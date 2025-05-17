package com.example.Project.Management.services;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.Project.Management.model.Users;
import com.example.Project.Management.service.InterfaceUsersService;
import com.example.Project.Management.service.UsersRepo;


@Service
public class UsersServices implements InterfaceUsersService{

	@Autowired
	private UsersRepo urepo;

	@Override
	public Users loginUsers(String email, String password) {
		Users user=urepo.findByEmailAndPassword(email, password);
		if(user != null && email.equals(user.getEmail()) && password.equals(user.getPassword())) {
			return user;
		}
		return null;
	}

	@Override
	public List<Users> getallusers() {
		List<Users> ulist=urepo.findAll();
		return ulist;
	}
	
	
	
	
	
	


}
