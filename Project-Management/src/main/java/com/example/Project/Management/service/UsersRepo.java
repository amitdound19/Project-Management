package com.example.Project.Management.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Project.Management.model.Users;

public interface UsersRepo extends JpaRepository<Users, Integer> {

	public Users findByEmailAndPassword(String email,String password);
	
}
