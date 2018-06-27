package com.example.model;

public class ReportDTO {
	private String name;
	private int number;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public ReportDTO(String name, int number) {
		super();
		this.name = name;
		this.number = number;
	}
	
	
}
