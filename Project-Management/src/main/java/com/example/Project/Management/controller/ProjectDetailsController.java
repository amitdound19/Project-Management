package com.example.Project.Management.controller;
 
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Project.Management.model.ProjectsDetails;
import com.example.Project.Management.service.InterfaceProjectDetailsService;

@CrossOrigin("http://localhost:4200")
@RestController 
@RequestMapping("/projectdetail")
public class ProjectDetailsController {

	@Autowired
	private InterfaceProjectDetailsService ProjectInterface;

	@PostMapping("/saveproject")
	public ProjectsDetails saveProject(@RequestBody ProjectsDetails p) {
		ProjectsDetails pd=null;
		System.out.println("project details saved");
		try {
			pd=ProjectInterface.saveProjects(p);
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return pd;
	}
	
	@GetMapping("/getprojectlist")
	public List<ProjectsDetails> getProjectList(){
		return ProjectInterface.getProjectList();
	}
	
	  @PutMapping("/changestatus/{id}")
	  public ProjectsDetails updateStatus(@PathVariable int id , @RequestParam String status) {
	    return ProjectInterface.updateStatus(id, status);
	  }
	  
	  @GetMapping("/statuscount")
	  public HashMap<String, Long> count() {
	    return ProjectInterface.count();
	  }
	  
	  @GetMapping("/searchlist")
	  public List<ProjectsDetails> searchProjects(@RequestParam String pname) {
	      return ProjectInterface.searchProjectByName(pname);
	  }
}
