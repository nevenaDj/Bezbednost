package com.example.security.jwt;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtConfigurer extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
	public static final String AUTHORIZATION_HEADER = "Authorization";

	private TokenProvider tokenProvider;

	public JwtConfigurer(TokenProvider tokenProvider) {
		this.tokenProvider = tokenProvider;

	}

	@Override
	public void configure(HttpSecurity httpSecurity) throws Exception {
		JwtFilter customFilter = new JwtFilter(tokenProvider);
		httpSecurity.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
	}

}
