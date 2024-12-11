package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Employee;
import com.service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	private EmployeeService empServ;
	
	@PostMapping("/add")
	public void addEmployee(@RequestBody Employee employee) {
		empServ.addEmployee(employee);
	}
	
	@GetMapping("/showAll")
	public List<Employee> showAllEmployee() {
		return empServ.showAllEmployee();
	}
	
	@PutMapping("/update")
	public int updateEmployee(@RequestBody Employee employee) {
    	return empServ.updateEmployee(employee);
    }

	@DeleteMapping("/delete/{empId}")
    public void deleteEmployee(@PathVariable long empId) {
    	empServ.deleteEmployee(empId);
    }

}
