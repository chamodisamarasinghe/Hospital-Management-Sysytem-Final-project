import React from 'react';
import '../App.css';
import styles from '../AboutUsPage.module.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import hos from './images/hos.jpg';
import doc from './images/doctor-watching.jpg';
import Footer from "./Footer";


const AboutUs = () => {
    return (
        <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
            <NavBar isAuthenticated={true} userRole={"front"} patientId={""} style={{ paddingRight: 0 }}/>

            <div className="about-us" style={{background:'white'}}>
                <h1 style={{fontWeight:'bold', color:'darkblue'}}>About Our Hospital</h1>

                <img src={hos} alt="Hospital Building" className="about-us-image" />



                <div className="about-us-container">
                    <div className="about-us-column">
                        <p>
                            Founded in 2017, MEDCare Hospital has swiftly become a cornerstone of
                            health and wellness in our community, offering an extensive range of
                            healthcare services for over 5 years. We are unwavering in our commitment
                            to excellence in patient care, groundbreaking research, and comprehensive
                            education.
                        </p>
                        <br/>
                        <p>
                            At MEDCare Hospital, our journey began with the vision to provide compassionate
                            care coupled with the latest in medical innovation. With our patient-first
                            philosophy, we have dedicated ourselves to fostering a supportive environment
                            that promotes healing and well-being. Our state-of-the-art facilities are designed
                            to ensure comfort and effectiveness, allowing for both inpatient and outpatient
                            services to be delivered with equal proficiency.
                        </p>

                        <br/>
                        <p>
                            Our medical staff, a diverse team of world-renowned specialists and dedicated
                            healthcare professionals, works collaboratively to stay at the forefront of medical
                            technology and treatment. Their commitment is the backbone of our institution and
                            ensures that our patients receive the highest standard of care. Continuous professional
                            development and training are ingrained in our culture, ensuring that the knowledge and
                            skills of our staff remain at the cutting edge.
                        </p>
                    </div>

                    <div className="about-us-column">
                        <div className="mission-vision-container">
                            <div >
                                <h2 style={{fontWeight:'bold', color:'darkblue'}}>Our Mission</h2>
                                <p>
                                    Our mission is to deliver compassionate, high-quality healthcare to our community and beyond.
                                    We are committed to being a leader in innovative medical care, research, and in empowering our
                                    community to be knowledgeable about their health.
                                </p>
                            </div>

                            <div >
                                <h2 style={{fontWeight:'bold', color:'darkblue'}}>Our Vision</h2>
                                <p>
                                    MEDCare Hospital envisions a world where access to top-tier medical care is not a privilege, but a right.
                                    We aim to set the standard for excellence in healthcare, to be the first choice of patients worldwide,
                                    and to continuously innovate in ways that will shape the future of medicine.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <di>
                    <Footer />
                </di>

            </div>
        </div>
    );
};

export default AboutUs;
