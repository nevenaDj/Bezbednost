package com.example.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.UserAttempt;

@Repository
public interface UserAttemptRepository extends JpaRepository<UserAttempt, Integer> {
	@Query("SELECT COUNT(a) FROM UserAttempt a WHERE a.username = ?1 AND a.date > ?2")
	public Integer getUserAttempts(String username, Date date);

}
