package com.example.Project.Management.model;

import jakarta.persistence.Column;
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

@Table(name = "projectdetails")
public class ProjectsDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "projectname")
	private String pname;
	private String reason;
	private String type;
	private String division;
	private String category;
	private String priority;
	private String department;
	private String location;
	@Column(name="startdate")
	private String startdate;
	private String enddate;
	@Column(name="status")
	private String status="Registered";
	
	public ProjectsDetails() {
		super();
	}




	public ProjectsDetails(String pname, String reason, String type, String division, String category, String priority,
			String department, String location, String startdate, String enddate, String status) {
		super();
		this.pname = pname;
		this.reason = reason;
		this.type = type;
		this.division = division;
		this.category = category;
		this.priority = priority;
		this.department = department;
		this.location = location;
		this.startdate = startdate;
		this.enddate = enddate;
		this.status = status;
	}

	public ProjectsDetails(int id, String pname, String reason, String type, String division, String category,
			String priority, String department, String location, String startdate, String enddate, String status) {
		super();
		this.id = id;
		this.pname = pname;
		this.reason = reason;
		this.type = type;
		this.division = division;
		this.category = category;
		this.priority = priority;
		this.department = department;
		this.location = location;
		this.startdate = startdate;
		this.enddate = enddate;
		this.status = status;
	}

	public ProjectsDetails(String pname, String reason, String type, String division, String category, String priority,
			String department, String location, String startdate, String enddate) {
		super();
		this.pname = pname;
		this.reason = reason;
		this.type = type;
		this.division = division;
		this.category = category;
		this.priority = priority;
		this.department = department;
		this.location = location;
		this.startdate = startdate;
		this.enddate = enddate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getStartdate() {
		return startdate;
	}

	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}

	public String getEnddate() {
		return enddate;
	}

	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "ProjectsDetails [id=" + id + ", pname=" + pname + ", reason=" + reason + ", type=" + type
				+ ", division=" + division + ", category=" + category + ", priority=" + priority + ", department="
				+ department + ", location=" + location + ", startdate=" + startdate + ", enddate=" + enddate
				+ ", status=" + status + "]";
	}

	
}
