import React from "react";
import {Link, NavLink} from "react-router-dom";
import '../App.css';
import call from './images/phne.png';
import time from './images/time.png';

export default function NavBar({ isAuthenticated, userRole, patientId }) {
    const getNavLinks = () => {
        if (isAuthenticated) {
            if (userRole === "home") {
                return (

                    <>

                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/log">
                                Log In
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/reg">
                                Register
                            </NavLink>
                        </li>
                    </>
                );
            } else if (userRole === "patient") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to={`/appo/${patientId}`}>
                                Appointment
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to={`/hfPrediction/${patientId}`}>
                                Heart Failure Prediction
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to={`/diabetic/${patientId}`}>
                                Diabetic Prediction
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to={`/heartDoctors/${patientId}`}>
                                Cardio Specialists
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to={`/diabeticDoctors/${patientId}`}>
                                Diabetic Specialists
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/">
                                LogOut
                            </NavLink>
                        </li>
                        <div className="userHeader">
                            <img className="userIcon" width="40" height="40" style={{marginTop: '0.5em'}} src="https://img.icons8.com/ios-filled/50/FFFFFF/user.png" alt="user"/>
                            <h1 className="navHeader" style={{ position: 'absolute', top: 0, right: '2em', marginTop: '0.5em', fontSize: '1.5rem', color: 'white' }}>PID: {patientId}</h1>
                        </div>

                    </>
                );
            } else if (userRole === "front") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/" >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/aboutUs">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/contactUs">
                                Contact Us
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/services">
                                Services
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/doctorPage">
                                Doctors
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/news">
                                MedCareCancer Center
                            </NavLink>
                        </li>


                        <img src={call} style={{ position:"absolute",top:17, left:960 }}/>
                        <span className="nav-link ul-auto" style={{ position: "absolute", top: 0.2, left: 1000, color:'#A0E9FF', fontWeight:'bold'}}>Emergency</span>
                        <span className="nav-link ul-auto" style={{ position: "absolute", top: 22, left: 1000, color:'#A0E9FF', fontWeight:'bold'}}>0115 577 111</span>


                        <img src={time} style={{ position:"absolute",top:17, left:1200 }}/>
                        <span className="nav-link ul-auto" style={{ position: "absolute", top: 0.2, left: 1240, color:'#A0E9FF', fontWeight:'bold'}}>Working Hours</span>
                        <span className="nav-link ul-auto" style={{ position: "absolute", top: 22, left: 1240, color:'#A0E9FF', fontWeight:'bold'}}>24 Hours Everyday</span>

                    </>




                );
            }else if (userRole === "doctor") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to={`/docSchedule/${patientId}`}>
                                MyAppointments
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to={`/addScedule/${patientId}`}>
                                AddSchedule
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/">
                                LogOut
                            </NavLink>
                        </li>
                        <div className="userHeader">
                            <img className="userIcon" width="40" height="40" style={{marginTop: '0.5em'}} src="https://img.icons8.com/ios-filled/50/FFFFFF/user.png" alt="user"/>
                            <h1 className="navHeader" style={{ position: 'absolute', top: 0, right: '2em', marginTop: '0.5em', fontSize: '1.5rem', color: 'white' }}>DID: {patientId}</h1>
                        </div>
                    </>
                );
            } else if (userRole === "admin") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/dashBoard">
                                DashBoard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/patient">
                                PatientDetails
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/doctorDetails">
                                DoctorDetails
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/addPatAdmin">
                                AddPatient
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/addDocAdmin">
                                AddDoctor
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/channels">
                                Channels
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/reports">
                                Reports
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/">
                                LogOut
                            </NavLink>
                        </li>
                    </>
                );
            }else{
                return (
                    <>
                    </>
                );
            }
        }
    }

    return (
        <div style={{paddingRight:0,paddingLeft:0}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/front" className="navbar-brand">
                        <div className="row align-items-center">
                            <div className="col-auto" style={{paddingRight:0, paddingLeft:'1em'}}>
                                <img
                                    src="https://i.ibb.co/N3HHKpw/med2.png"
                                    alt="Logo"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-text-top"
                                />
                            </div>
                            <div className="col">
                                <h1 style={{fontSize:'1.5em', marginTop:'0.3em', fontWeight: 'bold'}}>MEDCare</h1>
                            </div>
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {getNavLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
