package com.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "EMS")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long empId;
	
	@Column(length = 25)
	private String empName;
	
	@Column(length = 30)
	private String email;
	
	@Column(length = 12)
	private String phoneNo;
	
	@Column(length = 20)
	private String deptName;

	public Employee(Long empId, String empName, String email, String phoneNo, String deptName) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.email = email;
		this.phoneNo = phoneNo;
		this.deptName = deptName;
	}

	public Employee() {
		super();
	}

	public Long getEmpId() {
		return empId;
	}

	public void setEmpId(Long empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", email=" + email + ", phoneNo=" + phoneNo
				+ ", deptName=" + deptName + "]";
	}
	
}
