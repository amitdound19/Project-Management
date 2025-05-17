package com.example.Project.Management.service;

import java.util.List; 

import com.example.Project.Management.model.Users;

public interface InterfaceUsersService {

	public Users loginUsers(String email,String password);
	List<Users> getallusers();
	
}
