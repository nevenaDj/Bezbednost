package com.example.model;

import java.util.Date;

public class TimeDTO {
	private Date start;
	private Date end;
	
	public Date getStart() {
		return start;
	}
	public void setStart(Date start) {
		this.start = start;
	}
	public Date getEnd() {
		return end;
	}
	public void setEnd(Date end) {
		this.end = end;
	}
	public TimeDTO(Date start, Date end) {
		super();
		this.start = start;
		this.end = end;
	}
	public TimeDTO() {
		super();
	}
	
}
