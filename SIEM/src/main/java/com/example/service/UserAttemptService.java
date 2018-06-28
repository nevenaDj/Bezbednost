package com.example.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.UserAttempt;
import com.example.repository.UserAttemptRepository;

@Service
public class UserAttemptService {
	@Autowired
	private UserAttemptRepository userAttemptRepository;

	public void addUserAttempt(String username) {
		UserAttempt userAttempt = new UserAttempt(username);
		userAttemptRepository.save(userAttempt);
	}

	public Integer getUserAttempts(String username, Date date) {
		return userAttemptRepository.getUserAttempts(username, date);
	}

}
