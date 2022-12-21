import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import "./EmployeesDetails.css"
//import { EmployeesList } from '../properties/Properties'
//import { EmployeesList } from '../properties/Properties'

const EmployeesDetails: React.FC = () => {
  const { id } = useParams();
 
  const initialState ={
    firstName: " ",
    lastName: "",
    image : " ",
    email: "",
    phone : " ",
    gender : " ",
    username : " ", 
    birthDate : " ",
    bloodGroup : " ",
    height : " ",
    weight : " ",
  };


  const [employee, setEmployee] = useState(initialState);

  //console.log(employees)
  useEffect(() => {
    fetchDetails();
  }, [id]);

  const fetchDetails = async () => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    console.log(response)
    setEmployee(response.data);
    console.log(employee);
  };

  if (!employee) {
    return <div>Loading...</div>
  }

  return (
    <>
        <div className="main">
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-md-6 ">
          <img src={employee.image} className=" img-fluid p-4 " alt="..." />
          </div>
            <div className=" col-md-6 p-4"> 
            <h5 className="card-title">First Name : {employee.firstName}</h5><br/>
            <p className="card-text" ><b>Last Name :</b> {employee.lastName}</p>
             <p className="card-text" ><b>DOB :</b> {employee.birthDate}</p>
             <p className="card-text" ><b>Gender:</b> {employee.gender}</p>
             <p className="card-text" ><b>Phone no :</b> {employee.phone}</p>
             <p className="card-text" ><b> Blood Group:</b> {employee.bloodGroup}</p>
             <p className="card-text" ><b>Height :</b> {employee.height}</p>
             <p className="card-text" ><b>Weight:</b> {employee.weight}</p>
             <p className="card-text"><b>Email :</b>{employee.email}</p>
             
             
             
          </div>
        </div>
      </div> 
      </div>
    </>
  )
}

export default EmployeesDetails

