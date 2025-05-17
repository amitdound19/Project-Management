package com.example.Project.Management.service;

 

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.Project.Management.model.ProjectsDetails;

public interface ProjectDetailsRepo extends JpaRepository<ProjectsDetails, Integer>{
	
	 @Query("SELECT p.status, COUNT(p.status) FROM ProjectsDetails p GROUP BY p.status")
	    List<Object[]> countProjectByStatus();
	
	@Query("SELECT p FROM ProjectsDetails p WHERE p.pname LIKE %:pname%")
    List<ProjectsDetails> findByNameContaining(@Param("pname") String pname);
}
