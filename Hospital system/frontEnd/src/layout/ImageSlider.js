import React, { useState } from 'react';
import Slider from 'react-slick';
import '../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import belly from './images/belly.jpg';
import doctor from './images/doctor-watching.jpg';
import preg from './images/pregnant-woman.jpg';
import heart from './images/heart.jpg';
import eye from './images/eye.jpg';
import ear from './images/ear.jpg';

function ImageSlider() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openPopup = (item) => {
        setSelectedItem(item);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedItem(null);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1200,
    };

    const imageStyle = {
        width: '470px',
        height: '350px',
        objectFit: 'cover',
        marginTop: '30px',
    };

    const containerStyle = {
        overflowX: 'hidden',
    };

    const textStyle = {
        fontWeight: 'bold',
        color: '#3876BF',
        fontSize: '5em',
    };

    const popupStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
    };

    const popupContentStyle = {
        textAlign: 'center',
    };

    const buttonStyle = {
        fontWeight: 'bold',
        color: 'white',
        borderRadius: '5px',
        background: '#3876BF',
        borderColor: '#3876BF',
    };

    return (
        <div style={containerStyle}>
            <div style={{ marginTop: '320px' }}>
                <h2 style={{ color: 'darkblue', fontFamily: 'lucida grande', fontWeight: 'bold', marginTop: '-20px', fontSize: '40px', textAlign: 'center' }}>
                    Our Critical Care Services
                </h2>
                <Slider {...settings}>
                    {/* ... (existing code remains the same) */}
                    {[
                        {
                            image: belly,
                            title: 'Pregnancy',
                            shortDescription: 'Comprehensive care for a healthy pregnancy journey.',
                            details: (
                                <div>
                                    <p style={{fontWeight:"bold"}}>During pregnancy, our specialized care includes:</p>
                                    <ol>
                                        <li>Regular prenatal check-ups to monitor the health of both the mother and the baby.</li>
                                        <li>Personalized nutrition guidance to ensure a well-balanced diet that meets the increased nutritional needs during pregnancy.</li>
                                        <li>Educational sessions on proper exercise and relaxation techniques for physical and mental well-being.</li>
                                        <li>Support and guidance on managing common discomforts such as nausea, back pain, and fatigue.</li>
                                        <li>Preparation for labor and delivery, including childbirth classes and information on available birthing options.</li>
                                        <li>Postpartum care to support the mother's recovery and adjustment to motherhood.</li>
                                    </ol>
                                    <p>Our team of experienced healthcare professionals is dedicated to providing the best care throughout your pregnancy journey.</p>
                                </div>
                            )
                        },


                        {
                            image: doctor,
                            title: 'Maternity',
                            shortDescription: 'Comprehensive care for a smooth maternity experience.',
                            details: (
                                <div>
                                    <p style={{fontWeight:"bold"}}>Our Maternity services provide comprehensive care for a smooth and memorable maternity experience:</p>
                                    <ol>
                                        <li>Antenatal care with regular check-ups to monitor the health of both the mother and the baby.</li>
                                        <li>Guidance on a healthy lifestyle and nutrition during pregnancy for the well-being of both mother and child.</li>
                                        <li>Education on childbirth options, birthing techniques, and pain management.</li>
                                        <li>Support for expectant mothers to navigate the physical and emotional changes during pregnancy.</li>
                                        <li>Collaboration with experienced healthcare professionals for a safe and comfortable labor and delivery.</li>
                                        <li>Postpartum care to assist in the recovery process and ensure a smooth transition to motherhood.</li>
                                    </ol>
                                    <p>Our dedicated team is committed to providing personalized and compassionate care, supporting you every step of the way in your maternity journey.</p>
                                </div>
                            )
                        },


                        {
                            image: preg,
                            title: 'Childcare',
                            shortDescription: 'Expert care for the health and development of your child.',
                            details: (
                                <div>
                                    <p style={{fontWeight:"bold"}}>Our Childcare services focus on providing comprehensive care for the well-being and development of your child:</p>
                                    <ol>
                                        <li>Regular well-child check-ups to monitor growth, development, and address any health concerns.</li>
                                        <li>Vaccination schedules and guidance to ensure your child is protected against preventable diseases.</li>
                                        <li>Nutritional counseling to establish healthy eating habits and meet the nutritional needs of growing children.</li>
                                        <li>Developmental screenings to assess cognitive, motor, and social skills.</li>
                                        <li>Behavioral and emotional support for both parents and children to navigate various stages of development.</li>
                                        <li>Guidance on age-appropriate activities and educational resources to stimulate learning.</li>
                                    </ol>
                                    <p>Our team of dedicated childcare professionals is committed to providing the best care to support your child's health and development.</p>
                                </div>
                            )
                        },

                        {
                            image: heart,
                            title: 'Cardio',
                            shortDescription: 'Specialized care for cardiovascular health.',
                            details: (
                                <div>
                                    <p style={{fontWeight:"bold"}}>Our Cardio care services focus on maintaining a healthy cardiovascular system. Key features include:</p>
                                    <ol>
                                        <li>Comprehensive heart health assessments to identify and manage risk factors.</li>
                                        <li>Customized exercise programs designed to improve heart function and overall fitness.</li>
                                        <li>Dietary guidance for heart-healthy nutrition, emphasizing a balanced and low-sodium diet.</li>
                                        <li>Monitoring and management of blood pressure and cholesterol levels.</li>
                                        <li>Education on lifestyle modifications to promote heart health, including stress management and smoking cessation.</li>
                                        <li>Collaboration with cardiac specialists for advanced diagnostics and interventions when necessary.</li>
                                    </ol>
                                    <p>Our dedicated team of healthcare professionals is committed to enhancing and maintaining your cardiovascular well-being.</p>
                                </div>
                            )
                        },


                        {
                            image: eye,
                            title: 'Eye Diseases',
                            shortDescription: 'Specialized care for maintaining healthy vision.',
                            details: (
                                <div>
                                    <p style={{fontWeight:"bold"}}>Our Eye Diseases care includes:</p>
                                    <ol>
                                        <li>Comprehensive eye examinations to detect and diagnose various eye conditions.</li>
                                        <li>Customized treatment plans for common eye diseases such as glaucoma, cataracts, and macular degeneration.</li>
                                        <li>Advanced surgical procedures for conditions requiring surgical intervention.</li>
                                        <li>Management and control of chronic eye diseases like diabetic retinopathy.</li>
                                        <li>Prescription of corrective lenses and guidance on proper eye care practices.</li>
                                        <li>Educational sessions on lifestyle factors that impact eye health and preventive measures.</li>
                                    </ol>
                                    <p>Our experienced team of eye care specialists is committed to preserving and improving your vision through personalized and compassionate care.</p>
                                </div>
                            )
                        },


                        {
                            image: ear,
                            title: 'Ear Infection',
                            shortDescription: 'Expert care for effective management of ear infections.',
                            details: (
                                <div>
                                    <p style={{fontWeight:"bold"}}>Ear infections require specialized care, and our services include:</p>
                                    <ol>
                                        <li>Thorough examination and diagnosis to identify the type and severity of the ear infection.</li>
                                        <li>Prescription of appropriate antibiotics or other medications to treat the infection.</li>
                                        <li>Guidance on home care practices to alleviate symptoms and prevent recurrence.</li>
                                        <li>Ear cleaning procedures performed by skilled professionals for safe and effective removal of excess wax or debris.</li>
                                        <li>Follow-up appointments to monitor progress and ensure the infection is fully resolved.</li>
                                        <li>Educational resources on preventive measures to reduce the risk of future ear infections.</li>
                                    </ol>
                                    <p>Our experienced healthcare team is dedicated to providing the best care to ensure a quick and effective recovery from ear infections.</p>
                                </div>
                            )
                        }


                    ].map((item, index) => (
                        <div key={index}>
                            <img style={imageStyle} src={item.image} alt={item.title} />
                            <p style={textStyle} style={{ textAlign: 'center', fontWeight: 'bold', color: '#3876BF', fontSize: '20px' }}>
                                {item.title}
                            </p>
                            <button className="buttonStyle" onClick={() => openPopup(item)}>
                                View Details
                            </button>
                        </div>
                    ))}
                </Slider>
                {showPopup && (
                    <div style={popupStyle}>
                        <div style={popupContentStyle}>
                            <h3>{selectedItem.title}</h3>
                            <p>{selectedItem.details}</p>
                            <p>{selectedItem.shortDescription}</p>
                            <button style={{borderRadius:"10px", backgroundColor:"darkblue", color:"white"}} onClick={closePopup}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageSlider;
