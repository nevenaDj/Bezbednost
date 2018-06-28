package com.example.tcp;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLServerSocket;
import javax.net.ssl.SSLServerSocketFactory;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

@Component
public class TcpServer implements Server, Connection.Listener {
	private static Log logger = LogFactory.getLog(TcpServer.class);

	private SSLServerSocket serverSocket;
	private volatile boolean isStop;
	private List<Connection> connections = new ArrayList<>();
	private List<Connection.Listener> listeners = new ArrayList<>();

	public void setPort(Integer port) {
		try {
			if (port == null) {
				logger.info("Property tcp.server.port not found. Use default port 1234");
				port = 1234;
			}
			KeyStore keyStore = KeyStore.getInstance("JKS");
			keyStore.load(new FileInputStream("/Users/nomisabi/git/Bezbednost_nevena/SIEM/src/main/resources/siem-center.p12"), "secretpassword".toCharArray());

			KeyManagerFactory keyManagerFactory = KeyManagerFactory.getInstance("SunX509");
			keyManagerFactory.init(keyStore, "secretpassword".toCharArray());

			TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance("SunX509");
			trustManagerFactory.init(keyStore);

			SSLContext context = SSLContext.getInstance("TLSv1.2");
			TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();
			context.init(keyManagerFactory.getKeyManagers(), trustManagers, null);

			SSLServerSocketFactory serverSocketFactory = context.getServerSocketFactory();
			serverSocket = (SSLServerSocket) serverSocketFactory.createServerSocket(port);
			serverSocket.setEnabledCipherSuites(serverSocket.getSupportedCipherSuites());

			logger.info("Server start at port " + port);
		} catch (IOException | NoSuchAlgorithmException | KeyManagementException | KeyStoreException
				| CertificateException | UnrecoverableKeyException e) {
			e.printStackTrace();
			logger.error("May be port " + port + " busy.");
		}
	}

	@Override
	public int getConnectionsCount() {
		return connections.size();
	}

	@Override
	public void start() {
		new Thread(() -> {
			while (!isStop) {
				try {
					SSLSocket socket = (SSLSocket) serverSocket.accept();
					// Socket socket = serverSocket.accept();
					if (socket.isConnected()) {
						TcpConnection tcpConnection = new TcpConnection(socket);
						tcpConnection.start();
						tcpConnection.addListener(this);
						connected(tcpConnection);
					}
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}).start();
	}

	@Override
	public void stop() {
		isStop = true;
	}

	@Override
	public List<Connection> getConnections() {
		return connections;
	}

	@Override
	public void addListener(Connection.Listener listener) {
		listeners.add(listener);
	}

	@Override
	public void messageReceived(Connection connection, Object message) {
		logger.trace("Received new message from " + connection.getAddress().getCanonicalHostName());
		logger.trace("Class name: " + message.getClass().getCanonicalName() + ", toString: " + message.toString());
		for (Connection.Listener listener : listeners) {
			listener.messageReceived(connection, message);
		}
	}

	@Override
	public void connected(Connection connection) {
		logger.info("New connection! Ip: " + connection.getAddress().getCanonicalHostName() + ".");
		connections.add(connection);
		logger.info("Current connections count: " + connections.size());
		for (Connection.Listener listener : listeners) {
			listener.connected(connection);
		}
	}

	@Override
	public void disconnected(Connection connection) {
		logger.info("Disconnect! Ip: " + connection.getAddress().getCanonicalHostName() + ".");
		connections.remove(connection);
		logger.info("Current connections count: " + connections.size());
		for (Connection.Listener listener : listeners) {
			listener.disconnected(connection);
		}
	}
}
