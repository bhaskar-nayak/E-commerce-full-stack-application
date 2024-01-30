package com.fullstack.controller;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.model.User;
import com.fullstack.service.UsersService;
import com.fullstack.utils.MailSender;
import com.fullstack.utils.Response;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	UsersService usersService;
//	@Operation(summary="check whether app is working or not", description="Return a product as per id")
	@GetMapping("/health")
	public String healthCheck() {
		return "App is working perfect";	
	}
	@SuppressWarnings({"rawtpye", "unchecked"})
	@PostMapping("/register")
	public ResponseEntity register(@RequestBody User user) {
		

		Response response = usersService.registerUser(user);
		 if(response.getOperation() == true) {
			 MailSender mailSender = new MailSender();
			 try {
				int statusCode = mailSender.sendRegistrationConfirmation(user.getEmail());
				System.out.println("Status code" +  statusCode);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 
		 }
		return new ResponseEntity(response,response.getOperation()? HttpStatus.CREATED : HttpStatus.BAD_REQUEST);	
	}
	//creating api for login
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PostMapping("/user/login")
	public ResponseEntity login(@RequestBody User user) {
		Response response = usersService.loginUser(user);
		return new ResponseEntity(response,response.getOperation()? HttpStatus.OK : HttpStatus.BAD_REQUEST);	
	}
}
