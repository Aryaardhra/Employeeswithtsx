import React from 'react'
import { Routes, Route} from "react-router-dom"
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import EmployeesDetails from './components/employees/EmployeesDetails'
import "./App.css"
import Footer from './components/footer/Footer'

const App : React.FC = () => {
  return (
    <>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route  path="/home" element={<Home />} /> 
        <Route path="/EmployeesDetails/:id" element={<EmployeesDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App

