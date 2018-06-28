package com.example.security;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.model.Privilege;
import com.example.model.Role;
import com.example.model.User;
import com.example.repository.UserRepository;
import com.example.service.UserAttemptService;

@Service
public class MyUserDetails implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserAttemptService userAttemptService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException("User '" + username + "' not found");
		}

		Date today = new Date();
		Calendar cal = new GregorianCalendar();

		cal.setTime(today);
		cal.add(Calendar.DAY_OF_MONTH, -1);
		Date todayBefore1day = cal.getTime();

		if (user.getDate() != null && user.getDate().before(todayBefore1day) && user.isEnabled()) {
			user.setEnabled(false);
			user = userRepository.save(user);
		}

		cal.setTime(today);
		cal.add(Calendar.HOUR_OF_DAY, -1);
		Date todayBefore1 = cal.getTime();

		Integer count = userAttemptService.getUserAttempts(username, todayBefore1);

		if (count > 5) {
			user.setEnabled(true);
			user.setDate(new Date());
			user = userRepository.save(user);
		}

		return org.springframework.security.core.userdetails.User//
				.withUsername(username)//
				.password(user.getPassword())//
				.authorities(getAuthorities(user.getRoles()))//
				.accountExpired(false)//
				.accountLocked(false)//
				.credentialsExpired(false)//
				.disabled(user.isEnabled())//
				.build();
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
