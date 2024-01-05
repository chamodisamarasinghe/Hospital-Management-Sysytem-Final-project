import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../Services.css';
import c1 from "./images/c1.png";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
import c4 from "./images/c4.png";
import c5 from "./images/c5.png";
import c6 from "./images/c6.png";
import Footer from "./Footer";

const Services = () => {
    return (
        <div>
            <NavBar isAuthenticated={true} userRole={'front'} patientId={''} />

            <div className="services-container">
                <h2 style={{color:'darkblue', fontWeight:'bold'}}>Welcome to Our Hospital Services</h2>
                <p>
                    At our hospital, we are committed to providing high-quality healthcare services to our
                    community. Explore our services below:
                </p>

                <div className="service-card">
                    <h3 style={{color:'blue', fontWeight:'bold'}}> <img  src={c2} alt="Childcare"/> Emergency Care</h3>
                    <p>
                        Our emergency care unit is open 24/7 to provide immediate medical attention in urgent
                        situations.
                    </p>
                </div>

                <div className="service-card">
                    <h3 style={{color:'blue', fontWeight:'bold'}}> <img  src={c1} alt="Childcare"/> Inpatient Services</h3>
                    <p>
                        Our inpatient services ensure comprehensive care for patients who require hospital
                        stay and continuous monitoring.
                    </p>
                </div>

                <div className="service-card" >
                    <h3 style={{color:'blue', fontWeight:'bold'}}> <img src={c3} alt="Childcare"/> Outpatient Services</h3>
                    <p>
                        For less severe cases, our outpatient services offer consultations, diagnostics, and
                        treatments without the need for hospital admission.
                    </p>
                </div>

                <div className="service-card" >
                    <h3 style={{color:'blue', fontWeight:'bold'}}> <img src={c4} alt="Childcare"/> Specialized Departments</h3>
                    <p>
                        We have dedicated departments for various specialties, including cardiology, oncology,
                        neurology, and more.
                    </p>
                </div>

                <div className="service-card" >
                    <h3 style={{color:'blue', fontWeight:'bold'}}> <img src={c5} alt="Childcare"/> Diagnostic Imaging</h3>
                    <p>
                        Our advanced diagnostic imaging services, such as MRI and CT scans, help in accurate
                        diagnosis.
                    </p>
                </div>

                <div className="service-card" >
                    <h3 style={{color:'blue', fontWeight:'bold'}}> <img src={c6} alt="Childcare"/> Pharmacy</h3>
                    <p>
                        Our in-house pharmacy ensures that patients have easy access to prescribed medications
                        and healthcare products.
                    </p>
                </div>

                <p>
                    For more information about our services or to schedule an appointment, please{' '}
                    <Link to="/contactUs">contact us</Link>.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default Services;
