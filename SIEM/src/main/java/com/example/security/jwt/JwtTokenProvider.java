package com.example.security.jwt;

import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.cert.Certificate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.example.exception.CustomException;
import com.example.model.Privilege;
import com.example.model.Role;
import com.example.security.MyUserDetails;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenProvider {

	@Value("${security.jwt.token.expire-length:3600000}")
	private long validityInMilliseconds = 3600000; // 1h

	@Autowired
	private MyUserDetails myUserDetails;

	PrivateKey privateKey;
	PublicKey publicKey;

	@PostConstruct
	protected void init() {
		KeyStoreReader kr = new KeyStoreReader();
		Certificate c = kr.readCertificate("/Users/nomisabi/git/Bezbednost_nevena/SIEM/src/main/resources/cert-chain.p12", "secretpassword", "1");
		publicKey = c.getPublicKey();
		privateKey = kr.readPrivateKey("/Users/nomisabi/git/Bezbednost_nevena/SIEM/src/main/resources/cert-chain.p12", "secretpassword", "1", "secretpassword");
	}

	public String createToken(String username, Collection<Role> roles) {

		Claims claims = Jwts.claims().setSubject(username);
		claims.put("auth", getAuthorities(roles));

		Date now = new Date();
		Date validity = new Date(now.getTime() + validityInMilliseconds);

		return Jwts.builder()//
				.setClaims(claims)//
				.setIssuedAt(now)//
				.setExpiration(validity)//
				.signWith(SignatureAlgorithm.RS512, privateKey)//
				.compact();
	}

	public Authentication getAuthentication(String token) {
		UserDetails userDetails = myUserDetails.loadUserByUsername(getUsername(token));
		return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
	}

	public String getUsername(String token) {
		return Jwts.parser().setSigningKey(publicKey).parseClaimsJws(token).getBody().getSubject();
	}

	public String resolveToken(HttpServletRequest req) {
		String bearerToken = req.getHeader("Authorization");
		if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7, bearerToken.length());
		}
		return null;
	}

	public boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(publicKey).parseClaimsJws(token);
			return true;
		} catch (JwtException | IllegalArgumentException e) {
			throw new CustomException("Expired or invalid JWT token", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	private Collection<? extends GrantedAuthority> getAuthorities(Collection<Role> roles) {

		return getGrantedAuthorities(getPrivileges(roles));
	}

	private List<String> getPrivileges(Collection<Role> roles) {

		List<String> privileges = new ArrayList<>();
		List<Privilege> collection = new ArrayList<>();
		for (Role role : roles) {
			collection.addAll(role.getPrivileges());
		}
		for (Privilege item : collection) {
			privileges.add(item.getName());
		}
		return privileges;
	}

	private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		for (String privilege : privileges) {
			authorities.add(new SimpleGrantedAuthority(privilege));
		}
		return authorities;
	}

}