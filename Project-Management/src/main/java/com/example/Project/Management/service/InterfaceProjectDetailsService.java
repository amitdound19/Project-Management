package com.example.Project.Management.service;



import java.util.HashMap;
import java.util.List;

import com.example.Project.Management.model.ProjectsDetails;

public interface InterfaceProjectDetailsService {

	public ProjectsDetails saveProjects(ProjectsDetails projectdetails);
	List<ProjectsDetails> getProjectList();
	public ProjectsDetails updateStatus(int id,String status);
	public HashMap<String,Long> count();
	public List<ProjectsDetails> searchProjectByName(String pname);
	
	
}
