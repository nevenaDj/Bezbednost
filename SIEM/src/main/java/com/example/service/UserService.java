package com.example.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.exception.CustomException;
import com.example.model.User;
import com.example.repository.UserRepository;
import com.example.security.jwt.JwtTokenProvider;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private AuthenticationManager authenticationManager;

	public String signin(String username, String password) {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			return jwtTokenProvider.createToken(username, userRepository.findByUsername(username).getRoles());
		} catch (DisabledException e) {
			throw new CustomException("Blokiran user", HttpStatus.UNPROCESSABLE_ENTITY);
		} catch (AuthenticationException e) {
			throw new CustomException("Password ne valja", HttpStatus.BAD_REQUEST);
		}
	}

	public String signup(User user) {
		if (!userRepository.existsByUsername(user.getUsername())) {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			userRepository.save(user);
			return jwtTokenProvider.createToken(user.getUsername(), user.getRoles());
		} else {
			throw new CustomException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	public void changePassword(String currentPassword, String newPassword, String checkPassword,
			HttpServletRequest req) {
		User user = userRepository.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));
		if (BCrypt.checkpw(currentPassword, user.getPassword()) && newPassword.equals(checkPassword)) {
			user.setPassword(passwordEncoder.encode(newPassword));
			userRepository.save(user);
		} else {
			throw new CustomException("Passwords are not same", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	public User search(String username) {
		User user = userRepository.findByUsername(username);
		if (user == null) {
			throw new CustomException("The user doesn't exist", HttpStatus.NOT_FOUND);
		}
		return user;
	}

	public User whoami(HttpServletRequest req) {
		return userRepository.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));
	}

}
