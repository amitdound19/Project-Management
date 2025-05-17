package com.example.Project.Management.services;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Project.Management.model.ProjectsDetails;
import com.example.Project.Management.service.InterfaceProjectDetailsService;
import com.example.Project.Management.service.ProjectDetailsRepo;

import jakarta.transaction.Transactional;

@Service
public class ProjectServices implements InterfaceProjectDetailsService{

	@Autowired
	private ProjectDetailsRepo prepo;
	
	@Override
	public ProjectsDetails saveProjects(ProjectsDetails projectdetails) {
		ProjectsDetails pd=prepo.save(projectdetails);
		System.out.println("inside project details service method of springboot");
		return pd;
	}

	@Override
	public List<ProjectsDetails> getProjectList() {
		List<ProjectsDetails> projectlist=prepo.findAll();
		return projectlist;
	}

	@SuppressWarnings("deprecation")
	@Transactional
	@Override
	public ProjectsDetails updateStatus(int id, String status) {
		  ProjectsDetails p = prepo.getOne(id);
		    if(p != null) {
		      p.setStatus(status); 
		      p = prepo.save(p); 
		    }
		return p;
	}

	@Override
	public List<ProjectsDetails> searchProjectByName(String pname) {
		// TODO Auto-generated method stub
		return prepo.findByNameContaining(pname);
	}
	
	 public HashMap<String,Long> count(){
		    HashMap<String,Long> hm = new HashMap<String,Long>();
		    
		    List<Object[]> li = prepo.countProjectByStatus(); 
		    
		        for(Object[] obj:li) {
		          String status =(String) obj[0];
		           Long count =(Long) obj[1];
		           if(hm.containsKey(status)) {
		             hm.put(status,hm.get(status)+1);
		           }
		           else {
		             hm.put(status,count);
		           }
		        }
		    return hm;
		  }

	 
	
}
