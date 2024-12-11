import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
    const backEndUrl = "http://localhost:8080/api/";
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        showAllEmployees();
    }, []);

    const showAllEmployees = () => {
        axios.get(`${backEndUrl}showAll`).then(
            success => {
                setEmployees(success.data);
            },
            error => {
                console.log(error);
            }
        );
    };

    const deleteEmployee = (empId) => {
        axios.delete(`${backEndUrl}delete/${empId}`).then(
            success => {
                console.log(success);
                showAllEmployees(); // Refresh the list of employees
            },
            error => {
                console.log(error);
            }
        );
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <h2 className="text-center my-4">List of Employees</h2>
                    <Table striped bordered hover responsive className="text-center">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Department Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((item) => (
                                <tr key={item.empId}>
                                    <td>{item.empId}</td>
                                    <td>{item.empName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNo}</td>
                                    <td>{item.deptName}</td>
                                    <td>
                                        <Link className="btn btn-info" to="/updateEmp" state={{empId:item.empId}}>Update</Link>

                                        <Button variant="danger" onClick={() => deleteEmployee(item.empId)} className="ml-2">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
