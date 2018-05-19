package com.example.dto;

import io.swagger.annotations.ApiModelProperty;

public class UserDataDTO {
	@ApiModelProperty(position = 0)
	private String currentPassword;
	@ApiModelProperty(position = 1)
	private String newPassword;
	@ApiModelProperty(position = 2)
	private String checkPassword;

	public String getCurrentPassword() {
		return currentPassword;
	}

	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getCheckPassword() {
		return checkPassword;
	}

	public void setCheckPassword(String checkPassword) {
		this.checkPassword = checkPassword;
	}

}
