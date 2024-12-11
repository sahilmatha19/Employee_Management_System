package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Employee;
import com.dao.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	public void addEmployee(Employee employee) {
		System.out.println("Add Employee Method!!");
    	System.out.println(employee);
		empRepo.save(employee);
	}
	
	public List<Employee> showAllEmployee() {
		System.out.println("Show All Employee Method!!");
		return empRepo.findAll();
	}
	
	public int updateEmployee(Employee employee) {
    	System.out.println("Update Employee Method!!");
    	System.out.println(employee);
    	
    	Employee e1 = empRepo.findById(employee.getEmpId()).orElse(null);
    	e1.setEmpName(employee.getEmpName());
    	e1.setEmail(employee.getEmail());
    	e1.setPhoneNo(employee.getPhoneNo());
    	e1.setDeptName(employee.getDeptName());
    	
    	empRepo.save(employee);
        return 1;
    }

    public void deleteEmployee(long empId) {
    	System.out.println("Delete Employee Method!!");
    	System.out.println(empId);
    	empRepo.deleteById(empId);
    }

}
