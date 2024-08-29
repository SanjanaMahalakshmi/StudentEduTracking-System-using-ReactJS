import React from 'react';
import logo from './WhatsApp Image 2024-08-29 at 17.08.19_fbce8372.jpg'
import './App.css'
import { IoPersonSharp } from "react-icons/io5";
import { RiTv2Line } from "react-icons/ri";
import { GiDividedSquare } from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import { BiSolidMemoryCard } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaHospital } from "react-icons/fa";


function App() {
  return (
    <div className="d-flex" >
      <div className="bar d-flex flex-column flex-shrink-0 p-3" style={{width: "280px", height:"723px", color:"whitesmoke"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-4">
            <img src={logo} alt="logo" className='image' />
          </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item ">
            <span className='icon1'><IoPersonSharp /></span>
            <a href="#" className="nav-link link-body-emphasis text-light">Student Management</a>
          </li>
          <li>
            <span className='icon1'><RiTv2Line /></span>
            <a href="#" className="nav-link link-body-emphasis text-light">Financial Management</a>
          </li>
          <li>
            <span className='icon1'><GiDividedSquare /></span>
            <a href="#" className="nav-link link-body-emphasis text-light">Quality Control</a>
          </li>
          <li>
            <span className='icon1'><FaBoxes /></span>
            <a href="#" className="nav-link link-body-emphasis text-light">Report Delivery</a>
          </li>
          <li>
            <span className='icon1'><BiSolidMemoryCard /></span>
            <a href="#" className="nav-link link-body-emphasis text-light">Attendance</a>
          </li>
        </ul>
        <hr />
        <div className='footer'>
          <span className='img1'><FaQuestionCircle /></span>
          <span className='img2'><IoIosSettings /></span>
          <span className='img3'><FaArrowRightToBracket /></span>
        </div>
      </div>

      <div className="content flex-grow-1">
        <div className="d-flex flex-column align-items-center">
          <h1>STUDENT MANAGEMENT</h1>
          
        </div>

        <div className="row">
          <div className="col-3">
            <div className="first card">
              <div className="card-body">
                <span className='icon5'><IoPersonSharp /></span>
                <span className='num1'>8</span>
                <span className='text'>Regular Students</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="second card">
              <div className="card-body">
                <span className='icon5'><PiStudentFill /></span>
                <span className='num1'>13</span>
                <span className='text'>Remedial Students</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="third card">
              <div className="card-body">
                <span className='icon5'><BsPersonArmsUp /></span>
                <span className='num1'>00</span>
                <span className='text'>In Paid Clubs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="table table-section mt-4">
          <table className="table table-bordered text-center">
            <tbody>
              <tr>
                <td><span className='icons'><IoPersonSharp /></span><br></br>Regular Enrollment</td>
                <td><span className='icons'><FaBook /></span><br></br>Remedial Enrollment</td>
                <td><span className='icons'><BsPersonArmsUp /></span><br></br>Club Management</td>
              </tr>
              <tr>
              <td><span className='icons'><SiGoogleclassroom /></span><br></br>Classroom Management</td>
                <td><span className='icons'><MdEmail /></span><br></br>SMS/Email</td>
                <td><span className='icons'><BiSolidMemoryCard /></span><br></br>Attendance</td>
              </tr>
              <tr>
                 <td></td>
                <td><span className='icons'><FaHospital /></span><br></br>Clinic</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
