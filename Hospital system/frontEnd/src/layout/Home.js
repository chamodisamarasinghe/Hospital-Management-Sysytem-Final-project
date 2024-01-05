import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";



const Home = () => {
    const navigate = useNavigate();
    const navigateToPatientDetail = () => {
        navigate('/plog'); // Navigate to the /patient route
    };

    const navigateToDoctor = () => {
        navigate('/dlog'); // Navigate to the /patient route
    };

    const navigateToUser = () => {
        navigate('/ulog'); // Navigate to the /patient route
    };

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"home"} patientId={""} />
            <div className="background-image"></div>
                <div className="welcome-container">
                    <div className="col-md-4 offset-md-0 border rounded p-5 mt-0 shadow"
                         style={{backgroundColor: "white",paddingTop:0}}>
                    <img
                        src="https://i.ibb.co/N3HHKpw/med2.png"
                        alt="Your Image"
                        className="main-image"
                    />
                    <h1 style={{fontSize:'0.6em', marginTop:'0.3em', fontWeight: 'bold'}}>MEDCare</h1>
                        <div className="d-flex justify-content-center text-center button-container"> {/* Add text-center class */}
                            <button className="welcome-button btn btn-outline-primary" onClick={navigateToUser}>
                                Admin Account
                            </button>
                            <button className="welcome-button btn btn-outline-primary" onClick={navigateToDoctor}>
                                Doctor Account
                            </button>
                            <button className="welcome-button btn btn-outline-primary" onClick={navigateToPatientDetail}>
                                Patient Account
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};



export default Home;
