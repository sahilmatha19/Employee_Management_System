import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmp.css";

const AddEmp = () => {

    const backEndUrl = "http://localhost:8080/api/";

    const [empName, setEmpName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [deptName, setDeptName] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        axios.post(`${backEndUrl}add`, {
            empName,
            email,
            phoneNo,
            deptName
        })
        .then(response => {
            console.log("Employee added successfully:", response.data);
            navigate("/showAll"); // Navigate to the list of employees after successful addition
        })
        .catch(error => {
            console.error("There was an error adding the employee:", error);
        });
    };

    return (
        <div className="center-form">
            <h1>Add New Employee</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="empName"
                    onChange={(e) => setEmpName(e.target.value)}
                    placeholder="Enter name"
                    required
                /><br /><br />

                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                /><br /><br />

                <input
                    type="text"
                    name="phoneNo"
                    onChange={(e) => setPhoneNo(e.target.value)}
                    placeholder="Enter phone number"
                    required
                /><br /><br />

                <input
                    type="text"
                    name="deptName"
                    onChange={(e) => setDeptName(e.target.value)}
                    placeholder="Enter department name"
                    required
                /><br /><br />

                <input type="submit" value="Add Employee" />
            </form>
        </div>
    );
};

export default AddEmp;
