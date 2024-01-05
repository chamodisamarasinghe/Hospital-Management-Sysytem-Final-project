import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Carousel } from 'react-bootstrap';
import admin from './images/admin.png';
import doctor from '././images/doctor.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from "./ImageSlider";
import Information from "./Information";
import DepartmentCard from "./DepartmentCard";


const Home = () => {
    const navigate = useNavigate();
    const navigateToLog = () => {
        navigate('/log'); // Navigate to the /patient route
    };

    const navigateToReg = () => {
        navigate('/reg'); // Navigate to the /patient route
    };

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"front"} patientId={""} style={{paddingRight:0}}/>
            <div className="background-image"></div>
            <div className="welcome-container" style={{paddingRight:0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <h1 style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        marginBottom: '0.2em',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#00A9FF',
                        fontFamily: 'lucida grande'
                    }}>CARING FOR LIFE</h1>


                    <h1 style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        marginBottom: '0.2em',
                        fontSize: '4rem',
                        fontWeight: 'bold',
                        color: 'darkblue',
                        fontFamily: 'lucida grande'
                    }}>Leading the Way in Medical Excellence</h1>
                    <p style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#3876BF', fontFamily: 'lucida grande'}}>Welcome to
                        MEDCare, your trusted partner in healthcare. Our mission is to provide quality medical services
                        to our patients and a convenient platform for our doctors and staff. Whether you are a patient,
                        doctor, or an administrator, we have you covered. Explore our services and start your journey
                        with us today.</p>
                </div>
                <div className="front-button-container">
                    <button className="welcome-button btn btn-primary" onClick={navigateToLog}>
                        Log In
                    </button>
                    <button className="welcome-button btn btn-outline-primary" onClick={navigateToReg}>
                        Register
                    </button>
                </div>
            </div>







            <ImageSlider/>
    <div>
        <Information/>
    </div>

    <div style={{marginTop: '70px'}}>
     <DepartmentCard/>
    </div>

            <Footer/>
        </div>



    );
};


export default Home;










