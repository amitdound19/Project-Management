package com.example.Project.Management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity

@Table(name = "users")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	private String email;
	private String password;
	
	public Users() {
		super();
	}

	public Users(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public Users(int uid, String email, String password) {
		super();
		this.uid = uid;
		this.email = email;
		this.password = password;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Users [uid=" + uid + ", email=" + email + ", password=" + password + "]";
	}
	
	
}
