package com.example.security;

import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.example.security.UserNotActivatedException;
import com.example.model.User;
import com.example.repository.UserRepository;

@Component("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

	private final Logger log = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

	@Autowired
	private UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String login) {
		log.debug("Authenticating {}", login);
		String lowercaseLogin = login.toLowerCase(Locale.ENGLISH);
		Optional<User> userByEmail = userRepository.findOneWithAuthoritiesByLogin(lowercaseLogin);
		return userByEmail.map(user -> createSpringSecurityUser(lowercaseLogin, user)).orElseGet(() -> {
			Optional<User> userByLoginFromDatabase = userRepository.findOneWithAuthoritiesByLogin(lowercaseLogin);
			return userByLoginFromDatabase.map(user -> createSpringSecurityUser(lowercaseLogin, user))
					.orElseThrow(() -> new UsernameNotFoundException(
							"User " + lowercaseLogin + " was not found in the " + "database"));
		});

	}

	private org.springframework.security.core.userdetails.User createSpringSecurityUser(String lowercaseLogin,
			User user) {
		if (!user.getActivated()) {
			throw new UserNotActivatedException("User " + lowercaseLogin + " was not activated");
		}
		List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
				.map(authority -> new SimpleGrantedAuthority(authority.getName())).collect(Collectors.toList());
		return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(),
				grantedAuthorities);
	}

}
