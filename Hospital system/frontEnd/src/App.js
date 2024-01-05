import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./layout/NavBar";
import UserDetail from "./pages/UserDetail";
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom"
import AddUser from "./User/AddUser";
import UpdateUser from "./User/UpdateUser";
import DoctorDetail from "./pages/DoctorDetail";
import DoctorAdd from "./Doctor/DoctorAdd";
import UpdateDoctor from "./Doctor/UpdateDoctor";
import PatientDetail from "./pages/PatientDetail";
import AddPatient from "./Patient/AddPatient";
import UpdatePatient from "./Patient/UpdatePatient";
import DoctorAppoint from "./Doctor/DoctorAppoint";
import ApoinmentDetails from "./pages/ApoinmentDetails";
import DocSchedule from "./Doctor/DocSchedule";
import PatientLogin from "./layout/PatientLogin";
import SetSchedule from "./Doctor/SetSchedule";
import Home from "./layout/Home";
import DoctorLogin from "./layout/DoctorLogin";
import UserLogin from "./layout/UserLogin";
import Register from "./layout/Register";
import Schedules from "./pages/Schedules";
import FrontPage from "./layout/FrontPage";
import React from "react";
import AdminDoctorReg from "./layout/AdminDoctorReg";
import AdminPatientReg from "./layout/AdminPatientReg";
import PDFGenerator from "./layout/PDFGenerator";
import LoadChannels from "./pages/LoadChannels";
import AboutUs from "./layout/AboutUs";
import ContactUs from "./layout/ContactUs";
import HFPrediction from "./layout/HFPrediction";
import DashBoard from "./pages/DashBoard";
import Services from "./layout/Services";
import News from "./layout/News";
import DoctorPage from "./layout/DoctorPage";
import DiabeticPrediction from "./layout/DiabeticPrediction";
import Reports from "./User/Reports";
import CardioDoctors from "./layout/CardioDoctors";
import DiabeticDoc from "./layout/DiabeticDoc";

function App() {
    return (


            <Router>
                <Routes>

                    <Route path={"/log"} element={<Home/>}/>
                    <Route path={"/"} element={<FrontPage/>}/>
                    <Route path={"/reg"} element={<Register/>}/>
                    <Route path={"/user"} element={<UserDetail/>}/>

                    <Route path={"/adduser"} element={
                        <div className="row" style={{marginRight:0, marginLeft:0}}>
                            <div className="col-md-6">
                                <img
                                    src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=1060&t=st=1692635028~exp=1692635628~hmac=e8a0599cb186ffe464c6911d95ef3da0f4da9bc434103b7150664a8ab0cfb39e"
                                    alt="" width="600" height="600" className=" mt-lg-5"/>
                            </div>
                            <div className="col-md-6">
                                <AddUser/>
                            </div>
                        </div>
                    }/>
                    <Route path={"/addDoc"} element={
                        <div className="row" style={{marginRight:0, marginLeft:0}}>
                            <NavBar isAuthenticated={true} userRole={""}/>
                            <div className="background-image"></div>
                            <DoctorAdd/>
                        </div>
                    }/>
                    <Route path={"/addDocAdmin"} element={
                        <div className="row" style={{marginRight:0, marginLeft:0}}>
                            <NavBar isAuthenticated={true} userRole={"admin"}/>
                            <div className="background-image"></div>
                            <AdminDoctorReg/>
                        </div>
                    }/>
                    <Route path={"/addPat"} element={
                        <div className="row" style={{marginRight:0, marginLeft:0}}>
                            <NavBar isAuthenticated={true} userRole={""}/>
                            <div className="background-image"></div>
                            <AddPatient/>
                        </div>
                    }/>
                    <Route path={"/addPatAdmin"} element={
                        <div className="row" style={{marginRight:0, marginLeft:0}}>
                            <NavBar isAuthenticated={true} userRole={"admin"}/>
                            <div className="background-image"></div>
                            <AdminPatientReg/>
                        </div>
                    }/>
                    <Route path={"/plog"} element={
                        <div className="row justify-content-center" style={{marginRight:0, marginLeft:0}}>
                            <NavBar isAuthenticated={true} userRole={""}/>
                            <div className="background-image"></div>
                            <PatientLogin/>
                        </div>
                    }/>
                    <Route path={"/dlog"} element={
                        <div className="row" style={{marginRight:0, marginLeft:0}}>
                            <NavBar isAuthenticated={true} userRole={""}/>
                            <div className="background-image"></div>
                            <DoctorLogin/>
                        </div>
                    }/>
                    <Route path={"/ulog"} element={
                        <div className="row" style={{marginRight:0, marginLeft:0}}>
                            <NavBar isAuthenticated={true} userRole={""}/>
                            <div className="background-image"></div>
                            <UserLogin/>
                        </div>
                    }/>
                    <Route path={`/addScedule/:doctorId`} element={<SetSchedule/>}/>
                    <Route path={`/update/:id`} element={<UpdateUser/>}/>
                    <Route path={`/schedules/:id`} element={<Schedules/>}/>
                    <Route path={`/updateDoc/:id`} element={<UpdateDoctor/>}/>
                    <Route path={`/updatePat/:id`} element={<UpdatePatient/>}/>
                    <Route path={`/docSchedule/:id`} element={<DocSchedule/>}/>
                    <Route path={"/doctorDetails"} element={<DoctorDetail/>}/>
                    <Route path={"/appo/:patientId"} element={<DoctorAppoint/>}/>
                    <Route path={"/patient"} element={<PatientDetail/>}/>
                    <Route path={"/apoinment/:doctorId/:patientId"} element={<ApoinmentDetails/>}/>
                    <Route path={"/report/:channelId"} element={<PDFGenerator/>}/>
                    <Route path={"/channels"} element={<LoadChannels/>}/>
                    <Route path={"/aboutUs"} element={<AboutUs/>}/>
                    <Route path={"/contactUs"} element={<ContactUs/>}/>
                    <Route path={"/hfPrediction/:id"} element={<HFPrediction/>}/>
                    <Route path={"/dierPrediction/:id"} element={<HFPrediction/>}/>
                    <Route path={"/dashBoard"} element={<DashBoard/>}/>
                    <Route path={"/services"} element={<Services/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/doctorPage"} element={<DoctorPage/>}/>
                    <Route path={"/heartDoctors"} element={<CardioDoctors/>}/>
                    <Route path={"/diabeticDoctors"} element={<DiabeticDoc/>}/>
                    <Route path={"/diabetic/:id"} element={<DiabeticPrediction/>}/>

                    <Route path={"/reports"} element={<Reports/>}/>
                </Routes>
            </Router>

    );
}

export default App;
