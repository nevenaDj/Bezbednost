package com.example.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.Set;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Alarm;
import com.example.model.Log;
import com.example.repository.AlarmRepository;
import com.example.repository.LogRepository;
import com.example.util.ValueComparator;

@Service
public class AlarmService {

	@Autowired
	private AlarmRepository alarmRepository;
	@Autowired
	private LogRepository logRepository;

	public void save(Alarm alarm) throws ParseException {
		if (alarm.getHostname().equals("!hostname!")) {
			saveByHostname(alarm);
		} else {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
			Map<Log, Date> date = new HashMap<>();
			List<Log> logs = logRepository.findAll();
			List<Log> logsGood = new ArrayList<>();
			for (Log log : logs) {
				if (conditions(alarm, log)) {
					logsGood.add(log);
				}
			}
			for (Log log : logsGood) {
				System.out.println(log.toString());
				Date d = (Date) formatter.parse(log.getTimestamp());
				date.put(log, d);
			}
			Map<Log, Date> treeMap = new TreeMap<Log, Date>(new ValueComparator(date));
			treeMap.putAll(date);
			Set<Log> logAlarm = new HashSet<>();
			int temp = 0;
			for (Entry<Log, Date> entry : treeMap.entrySet()) {
	
				boolean sd = false;
				String valueSd = "";
				if (!alarm.getSd().equals("")) {
					sd = true;
					valueSd = getSdValue(entry.getKey().getSd(), alarm.getSd());
				}
				boolean forFrom = false;
				for (Entry<Log, Date> entry2 : treeMap.entrySet()) {
					if (entry.getKey() == entry2.getKey()) {
						forFrom = true;
					}
					if (entry.getKey() != entry2.getKey()) {
						if (forFrom) {
							if (sd) {
								String value = getSdValue(entry2.getKey().getSd(), alarm.getSd());
								if (value.equals(valueSd))
									if ((entry.getValue().getTime() - entry2.getValue().getTime()) / 1000 < alarm
											.getSeconds())
										temp++;
							} else {
								if ((entry.getValue().getTime() - entry2.getValue().getTime()) / 1000 < alarm.getSeconds())
									temp++;
							}
						}
					}
				}
				if (temp >= alarm.getNumber())
					logAlarm.add(entry.getKey());
			}
			alarm.setLogs(logAlarm);
			alarmRepository.save(alarm);
		}
	}
	
	private void saveByHostname(Alarm alarm) throws ParseException {
		List<Log> logs_all = logRepository.findAll();
		Map<String, List<Log>> hostname = new HashMap<>();
		for (Log log : logs_all) {
			if (hostname.containsKey(log.getHostname())) {
				List<Log> log_h= hostname.get(log.getHostname());
				log_h.add(log);
				hostname.put(log.getHostname(), log_h);
			} else {
				List<Log> log_h=new ArrayList<>();
				log_h.add(log);
				hostname.put(log.getHostname(), log_h);
			}
		}
		Set<Log> logAlarm = new HashSet<>();
		String alarmHostname=alarm.getHostname();
		for (String host : hostname.keySet()) {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
			Map<Log, Date> date = new HashMap<>();
			List<Log> logs = hostname.get(host);
			List<Log> logsGood = new ArrayList<>();
			alarm.setHostname(host);
			for (Log log : logs) {
				if (conditions(alarm, log)) {
					logsGood.add(log);
				}
			}
			for (Log log : logsGood) {
				System.out.println(log.toString());
				Date d = (Date) formatter.parse(log.getTimestamp());
				date.put(log, d);
			}
			Map<Log, Date> treeMap = new TreeMap<Log, Date>(new ValueComparator(date));
			treeMap.putAll(date);

			int temp = 0;
			for (Entry<Log, Date> entry : treeMap.entrySet()) {
	
				boolean sd = false;
				String valueSd = "";
				if (!alarm.getSd().equals("")) {
					sd = true;
					valueSd = getSdValue(entry.getKey().getSd(), alarm.getSd());
				}
				boolean forFrom = false;
				for (Entry<Log, Date> entry2 : treeMap.entrySet()) {
					if (entry.getKey() == entry2.getKey()) {
						forFrom = true;
					}
					if (entry.getKey() != entry2.getKey()) {
						if (forFrom) {
							if (sd) {
								String value = getSdValue(entry2.getKey().getSd(), alarm.getSd());
								if (value.equals(valueSd))
									if ((entry.getValue().getTime() - entry2.getValue().getTime()) / 1000 < alarm
											.getSeconds())
										temp++;
							} else {
								if ((entry.getValue().getTime() - entry2.getValue().getTime()) / 1000 < alarm.getSeconds())
									temp++;
							}
						}
					}
				}
				if (temp >= alarm.getNumber())
					logAlarm.add(entry.getKey());
			}
		}
		alarm.setLogs(logAlarm);
		alarm.setHostname(alarmHostname);
		alarmRepository.save(alarm);
		
		
	}

	private String getSdValue(String sd, String alarmValue) {
		String[] x = sd.split(" ");
		for (String x_i : x) {
			if (x_i.toLowerCase().contains(alarmValue.toLowerCase())) {
				String[] y = x_i.split("\"");
				return y[1];
			}
		}
		return null;
	}

	public static <K, V> void printMap(Map<K, V> map) {
		for (Map.Entry<K, V> entry : map.entrySet()) {
			System.out.println("Key : " + entry.getKey() + " Value : " + entry.getValue());
		}
	}

	private boolean conditions(Alarm a, Log l) {
		if (!(a.getAppname().equals(""))) {
			if (!l.getAppname().toLowerCase().contains(a.getAppname().toLowerCase()))
				return false;
		}
		if (!(a.getHostname().equals(""))) {
			if (!l.getHostname().toLowerCase().contains(a.getHostname().toLowerCase()))
				return false;
		}
		if (!(a.getAppname().equals(""))) {
			if (!l.getAppname().toLowerCase().contains(a.getAppname().toLowerCase()))
				return false;
		}
		if (!(a.getMsg().equals(""))) {
			if (!l.getMsg().toLowerCase().contains(a.getMsg().toLowerCase()))
				return false;
		}
		if (!(a.getMsgid().equals(""))) {
			if (!l.getMsgid().toLowerCase().contains(a.getMsgid().toLowerCase()))
				return false;
		}
		if (!(a.getProcid().equals(""))) {
			if (!l.getProcid().toLowerCase().contains(a.getProcid().toLowerCase()))
				return false;
		}
		if (!(a.getSd().equals(""))) {
			if (!l.getSd().toLowerCase().contains(a.getSd().toLowerCase()))
				return false;
		}
		if (!(a.getTimestamp().equals(""))) {
			if (!l.getTimestamp().toLowerCase().contains(a.getTimestamp().toLowerCase()))
				return false;
		}
		if (a.getPrival() != 0) {
			if (l.getPrival() != a.getPrival())
				return false;
		}
		if (a.getVersion() > 0) {
			if (l.getVersion() != a.getVersion())
				return false;
		}
		return true;
	}

	public List<Alarm> findAll() {
		return alarmRepository.findAll();
	}

	public Optional<Alarm> findOne(Long id) {
		return alarmRepository.findById(id);
	}

	public void remove(Alarm alarm) {
		alarmRepository.delete(alarm);
	}
	
	public int count(Date start, Date end) throws ParseException {
		List<Log> logs= new ArrayList<>();
		for (Alarm alarm : alarmRepository.findAll()) {
			for (Log log : alarm.getLogs()) {
				SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
				Date logDate = (Date) formatter.parse(log.getTimestamp());
				if (logDate.before(end) && logDate.after(start))
					logs.add(log);
			}
		}
		return logs.size();
	}
	
	public Map<String,Integer> countByHostname(Date start, Date end) throws ParseException {
		Map<String, Integer> logs= new HashMap<>();
		for (Alarm alarm : alarmRepository.findAll()) {
			for (Log log : alarm.getLogs()) {
				SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
				Date logDate = (Date) formatter.parse(log.getTimestamp());
				if (logDate.before(end) && logDate.after(start))
					if (logs.containsKey(log.getHostname())) {
						int x= logs.get(log.getHostname());
						logs.put(log.getHostname(),x+1);
					}
					else
						logs.put(log.getHostname(), 1);
			}
		}
		return logs;
	}

}
