import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const UpdateEmp = () => {

    const backEndUrl = "http://localhost:8080/api/"

    const location = useLocation()

    // useEffect(()=>{
    //     console.log(location.state.empId);        
    // })

    const [empId, setEmpId] = useState(location.state.empId)
    const [empName, setEmpName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [deptName, setDeptName] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent full page reload
        console.log({
            empId,
            empName,
            email,
            phoneNo,
            deptName,
        });

        axios.put(`${backEndUrl}update`, { empId, empName, email, phoneNo, deptName })
            .then(
                success => {
                    console.log(success);
                    navigate("/showAll"); // Navigate to showAll after successful update
                }, error => {
                    console.log(error);
                }
            )
    }

    return (
        <>
            <div className="center-form">
                <h1>Update Employee</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="empId" value={empId} onChange={(e) => { setEmpId(e.target.value) }} placeholder="Enter employee ID" required disabled/><br /><br />

                    <input type="text" name="empName" onChange={(e) => { setEmpName(e.target.value) }} placeholder="Enter name" required /><br /><br />

                    <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" required /><br /><br />

                    <input type="text" name="phoneNo" onChange={(e) => { setPhoneNo(e.target.value) }} placeholder="Enter phone number" required /><br /><br />

                    <input type="text" name="deptName" onChange={(e) => { setDeptName(e.target.value) }} placeholder="Enter department name" required /><br /><br />

                    <input type="submit" value="Update Employee" />
                </form>

                {/* <button onClick={()=>{navigate("/showAll")}}>Click Me.</button> */}
            </div>
        </>
    )
}

export default UpdateEmp;
