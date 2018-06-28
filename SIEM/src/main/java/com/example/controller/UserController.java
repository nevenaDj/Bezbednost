package com.example.controller;

import javax.servlet.http.HttpServletRequest;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.UserCredentialsDTO;
import com.example.dto.UserDataDTO;
import com.example.dto.UserResponseDTO;
import com.example.exception.CustomException;
import com.example.model.User;
import com.example.service.UserAttemptService;
import com.example.service.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api")
@Api(tags = "users")
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@Autowired
	private UserAttemptService userAttemptService;

	@Autowired
	private ModelMapper modelMapper;

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<String> login(@RequestBody UserCredentialsDTO credentials) {
		try {
			String jwt = userService.signin(credentials.getUsername(), credentials.getPassword());
			return new ResponseEntity<>(jwt, HttpStatus.OK);
		} catch (CustomException e) {
			userAttemptService.addUserAttempt(credentials.getUsername());
			logger.info(e.getMessage() + "   " + e.getHttpStatus());
			return new ResponseEntity<>(e.getHttpStatus());
		}
	}

	@PostMapping("/signup")
	@ApiOperation(value = "${UserController.signup}")
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"), //
			@ApiResponse(code = 403, message = "Access denied"), //
			@ApiResponse(code = 422, message = "Username is already in use"), //
			@ApiResponse(code = 500, message = "Expired or invalid JWT token") })
	public String signup(@ApiParam("Signup User") @RequestBody UserResponseDTO user) {
		return userService.signup(modelMapper.map(user, User.class));
	}

	@PostMapping("/password")
	// @PreAuthorize("hasRole('ROLE_ADMIN')")
	@ApiOperation(value = "${UserController.signup}")
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"), //
			@ApiResponse(code = 403, message = "Access denied"), //
			@ApiResponse(code = 500, message = "Expired or invalid JWT token") })
	public ResponseEntity<Void> changePassword(HttpServletRequest req,
			@ApiParam("Signup User") @RequestBody UserDataDTO user) {
		try {
			userService.changePassword(user.getCurrentPassword(), user.getNewPassword(), user.getCheckPassword(), req);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping(value = "/{username}")
	@ApiOperation(value = "${UserController.search}", response = UserResponseDTO.class)
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"), //
			@ApiResponse(code = 403, message = "Access denied"), //
			@ApiResponse(code = 404, message = "The user doesn't exist"), //
			@ApiResponse(code = 500, message = "Expired or invalid JWT token") })
	public UserResponseDTO search(@ApiParam("Username") @PathVariable String username) {
		return modelMapper.map(userService.search(username), UserResponseDTO.class);
	}

	@GetMapping(value = "/me")
	@ApiOperation(value = "${UserController.me}", response = UserResponseDTO.class)
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"), //
			@ApiResponse(code = 403, message = "Access denied"), //
			@ApiResponse(code = 500, message = "Expired or invalid JWT token") })
	public ResponseEntity<UserResponseDTO> whoami(HttpServletRequest req) {
		try {
			UserResponseDTO user = modelMapper.map(userService.whoami(req), UserResponseDTO.class);
			return new ResponseEntity<>(user, HttpStatus.OK);
		} catch (Exception e) {
			logger.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

		}
	}

}
