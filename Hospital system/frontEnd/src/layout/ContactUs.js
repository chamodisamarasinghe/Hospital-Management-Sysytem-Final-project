import React, {useState} from 'react';

import styles from '../ContactUsPage.module.css';
import {useNavigate} from 'react-router-dom';
import NavBar from "./NavBar";
import contact from './images/con1.png';

const ContactUs = () => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
        });

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle the form submission logic, such as validating input
            // and sending a request to your hospital management system's backend
            console.log(formData);
            alert('Thank you for contacting us!');
        };





    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"front"} patientId={""} style={{paddingRight:0}}/>
            <div className={styles.mainContainer}>

                <div className={styles.imageContainer}>
                    <img src={contact} alt="Contact Us" className={styles.contactImage} />
                </div>

                <div className={styles.formContainer}>
                <h1 style={{color:'darkblue', fontWeight:'bold'}}>Contact Us</h1>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="contact">Contact Number:</label>
                        <input
                            type="contact"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                </form>
            </div>


        </div>
        </div>






    );
};


export default ContactUs;
