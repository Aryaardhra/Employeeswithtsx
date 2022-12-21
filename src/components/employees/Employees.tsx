import React, { useEffect, useState } from 'react'
import { EmployeesList } from '../properties/Properties';
import axios from 'axios';
import { Link } from "react-router-dom"
import LoadingIcon from '../loadingicon/LoadingIcon';

const Employees: React.FC = () => {

  const [employees, setEmployees] = useState<EmployeesList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await axios.get(`https://dummyjson.com/users`);

    // console.log(response);
    setEmployees(response.data.users);
    setLoading(false);

  };

  return (
    <>
      {loading ? <LoadingIcon /> :
        <div className="container-fluid my-4 ">
          <div className="row align-items-center gy-5  ">

            {employees.map((emp) => {
              return (


                <div className="col-lg-3 col-md-4 col-6" key={emp.id}>

                  <div className="card " >

                    <img 
                      src={emp.image} 
                      className="card-img-top p-5 "
                      height="200" width="200"
                      style={{ height: "20em" }}
                      alt="..." 
                    />

                    <div className="card-body" >
                      <h5 className="card-title"> First Name : {emp.firstName}</h5>
                      <p className="card-text"> Last Name : {emp.lastName}</p>

                        <Link to={`/EmployeesDetails/${emp.id}`} className="btn btn-outline-dark">VIEW</Link>

                    </div>


                  </div>
                </div>
              )
            })}



          </div>
        </div>
      }
    </>
  )
}

export default Employees