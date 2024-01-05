import React from 'react';
import '../App.css';
import countdoc from './images/countdoc.png';
import countpat from './images/countpat.png';
import countsur from './images/countsur.png';
import countawar from './images/counyawar.png';  // Typo? The filename seems a bit off. Make sure the filename matches.

const Information = () => {
    const stats = [
        {
            image: countsur,
            number: '20000 +',
            text: 'SUCCESSFUL SURGERIES'
        },
        {
            image: countdoc,
            number: '50 +',
            text: 'MEDICAL EXPERTS'
        },
        {
            image: countpat,
            number: '10000 +',
            text: 'FAMILIES HEALED'
        },
        {
            image: countawar,  // Ensure this filename is correct
            number: '10 +',
            text: 'AWARDS & ACCREDITATIONS'
        }
    ];

    return (
        <div className="hospital-stats-container">
            {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-image">
                        <img src={stat.image} alt={stat.text} />
                    </div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-text">{stat.text}</div>
                </div>
            ))}
        </div>
    );
};

export default Information;
