package com.example.Project.Management.controller;


import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Project.Management.model.Users;
import com.example.Project.Management.service.InterfaceUsersService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UsersController {

	@Autowired
	private InterfaceUsersService userinterface;
	
	@PostMapping("/loginuser")
	public Users loginUser( @RequestBody Users user) {
		Users u=userinterface.loginUsers(user.getEmail(), user.getPassword());
		
		return u;
	}
	
	@GetMapping("/getallusers")
	public List<Users>getAllUsers(){
		return userinterface.getallusers();
	}
}
