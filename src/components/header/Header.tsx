import React from 'react'
import Navbar from './navbar/Navbar'

const Header : React.FC = () => {
  return (
    <div className="header bg-info">
    <div className= "container-fluid ">
        <div className=" row g-0 ">
        <div className="  col-md-6">
        <span style={{fontSize:'37px'}}>EMPLOYEES</span>
            </div>
            <div className="  active col-md-6 " >
         <Navbar/>
        </div>
            </div>
            </div>
        </div>
  )
}

export default Header
