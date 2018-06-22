package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Alarm;

@Repository
public interface AlarmRepository extends JpaRepository<Alarm, Long> {

}
