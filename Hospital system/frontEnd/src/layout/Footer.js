import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <h2>Contact Us</h2>
            <p>
                <strong>Email:</strong> support@medcare.com
            </p>
            <p>
                <strong>Phone:</strong> +1 123-456-7890
            </p>
            <p>
                <strong>Address:</strong> 123 MedCare St., Health City, 45678
            </p>
            {/* Add more contact details if you have any */}
        </div>
    );
}

export default Footer;
