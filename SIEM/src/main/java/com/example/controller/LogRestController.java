package com.example.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Alarm;
import com.example.model.Log;
import com.example.model.ReportDTO;
import com.example.model.TimeDTO;
import com.example.service.AlarmService;
import com.example.service.LogService;

@RestController
public class LogRestController {
	@Autowired
	private LogService logService;
	@Autowired
	private AlarmService alarmService;

	@RequestMapping(value = "/api/logs", method = RequestMethod.GET)
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<List<Log>> getLogs(Pageable page) {
		Page<Log> logs = logService.findAll(page);
		List<Log> log_ret = new ArrayList<Log>();
		for (Log log : logs) {
			log_ret.add(log);
			System.out.println(log.toString());
		}
		return new ResponseEntity<>(log_ret, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/logs", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<List<Log>> getLogsSearch(@RequestBody String search) {
		List<Log> logs = logService.findAllBySearch(search);
		return new ResponseEntity<>(logs, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/alarms", method = RequestMethod.POST, consumes = "application/json")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> createAlarm(@RequestBody Alarm alarm) throws ParseException {
		System.out.println(alarm.toString());
		alarmService.save(alarm);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/api/alarms/{id}", method = RequestMethod.DELETE, produces = "application/json")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteAlarm(@PathVariable("id") Long id) {
		Optional<Alarm> a = alarmService.findOne(id);
		Alarm alarm = null;
		if (a != null) {
			alarm = a.get();
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		if (!alarm.isCanDelete())
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		alarmService.remove(alarm);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/api/alarms/{id}", method = RequestMethod.GET, produces = "application/json")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Alarm> getAlarm(@PathVariable("id") Long id) {
		Optional<Alarm> a = alarmService.findOne(id);
		Alarm alarm = null;
		if (a != null) {
			alarm = a.get();
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(alarm, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/alarms", method = RequestMethod.GET, produces = "application/json")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<List<Alarm>> getAlarms() {
		List<Alarm> alarm = alarmService.findAll();

		return new ResponseEntity<>(alarm, HttpStatus.OK);
	}
	

	@RequestMapping(value = "/api/logs/count", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Integer> getLogsCount(@RequestBody TimeDTO time) throws ParseException {
		int x= logService.count(time.getStart(), time.getEnd());
		return new ResponseEntity<>(x, HttpStatus.OK);
	}
	

	@RequestMapping(value = "/api/logs/count/host", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<List<ReportDTO>> getLogsCountHost(@RequestBody TimeDTO time) throws ParseException {
		Map<String,Integer> x= logService.countByHostname(time.getStart(), time.getEnd());
		List<ReportDTO> ret = new ArrayList<>();
		for (String key : x.keySet()) {
			ReportDTO r= new ReportDTO(key, x.get(key));
			ret.add(r);
		}
		return new ResponseEntity<>(ret, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/alarms/count", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<Integer> getAlarmsCount(@RequestBody TimeDTO time) throws ParseException {
		int x= alarmService.count(time.getStart(), time.getEnd());
		return new ResponseEntity<>(x, HttpStatus.OK);
	}
	

	@RequestMapping(value = "/api/alarms/count/host", method = RequestMethod.POST)
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public ResponseEntity<List<ReportDTO>> getAlarmsCountHost(@RequestBody TimeDTO time) throws ParseException {
		Map<String,Integer> x= alarmService.countByHostname(time.getStart(), time.getEnd());
		List<ReportDTO> ret = new ArrayList<>();
		for (String key : x.keySet()) {
			ReportDTO r= new ReportDTO(key, x.get(key));
			ret.add(r);
		}
		return new ResponseEntity<>(ret, HttpStatus.OK);
	}
}
