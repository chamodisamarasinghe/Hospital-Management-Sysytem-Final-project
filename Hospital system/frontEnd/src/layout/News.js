import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavBar from './NavBar';
import b2 from "./images/b2.jpg";
import b3 from "./images/b3.jpg";
import b5 from "./images/b5.jpg";

const News = () => {
    const containerStyle = {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '50px',
    };

    const headerStyle = {
        color: 'darkblue',
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '20px',
    };

    const carouselContainerStyle = {
        maxWidth: '800px',
        margin: 'auto',
    };

    const newsItemStyle = {
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const newsTitleStyle = {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '20px',
        marginBottom: '10px',
    };

    const newsContentStyle = {
        color: '#555',
        fontSize: '16px',
    };

    return (
        <div>
            <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
                <NavBar isAuthenticated={true} userRole={'front'} patientId={''} style={{ paddingRight: 0 }} />
            </div>

            <div style={carouselContainerStyle}>
                <Carousel showArrows={false} showThumbs={false}>
                    <div>
                        <img style={{ width: "900px", height: "300px" }} src={b2} alt="Childcare" />
                    </div>
                    <div>
                        <img style={{ width: "900px", height: "300px" }} src={b3} alt="Childcare" />
                    </div>
                    <div>
                        <img style={{ width: "900px", height: "300px" }} src={b5} alt="Childcare" />
                    </div>
                </Carousel>
            </div>

            <div style={containerStyle}>
                <h2 style={headerStyle}>Hospital News</h2>

                <div style={newsItemStyle}>
                    <h3 style={newsTitleStyle}>Important Announcement</h3>
                    <p style={newsContentStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus id urna commodo consequat.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>

                <div style={newsItemStyle}>
                    <h3 style={newsTitleStyle}>New Services Available</h3>
                    <p style={newsContentStyle}>
                        Nullam eu elit nec nulla lobortis facilisis. Pellentesque nec metus nec quam tincidunt tristique
                        eu vel massa. Integer ultricies augue a justo semper, ut malesuada lectus suscipit.
                    </p>
                </div>

                <div style={newsItemStyle}>
                    <h3 style={newsTitleStyle}>New Services Available</h3>
                    <p style={newsContentStyle}>
                        Nullam eu elit nec nulla lobortis facilisis. Pellentesque nec metus nec quam tincidunt tristique
                        eu vel massa. Integer ultricies augue a justo semper, ut malesuada lectus suscipit.
                    </p>
                </div>

                <div style={newsItemStyle}>
                    <h3 style={newsTitleStyle}>New Services Available</h3>
                    <p style={newsContentStyle}>
                        Nullam eu elit nec nulla lobortis facilisis. Pellentesque nec metus nec quam tincidunt tristique
                        eu vel massa. Integer ultricies augue a justo semper, ut malesuada lectus suscipit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default News;
