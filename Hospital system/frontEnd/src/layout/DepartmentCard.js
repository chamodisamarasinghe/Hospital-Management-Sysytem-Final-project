// src/pages/DepartmentPage.js

import React from 'react';
import { MdLocalHospital, MdPerson, MdFlare, MdAccessibility, MdFavorite, MdHearing } from 'react-icons/md';

const departments = [
    { label: 'CRITICAL CARE', icon: <MdLocalHospital />, description: '...Your description here...' },
    { label: 'NEUROLOGY', icon: <MdPerson />, description: '...Your description here...' },
    { label: 'UROLOGY', icon: <MdFlare />, description: '...Your description here...' },
    { label: 'ORTHOPEADIC', icon: <MdAccessibility />, description: '...Your description here...' },
    { label: 'CRITICAL CARE', icon: <MdLocalHospital />, description: '...Your description here...' },
    { label: 'CARDIAC SCIENCES', icon: <MdFavorite />, description: '...Your description here...' },
    { label: 'ENT (EAR, NECK & THF)', icon: <MdHearing />, description: '...Your description here...' },
    { label: 'CRITICAL CARE', icon: <MdLocalHospital />, description: '...Your description here...' },
    { label: 'CRITICAL CARE', icon: <MdLocalHospital />, description: '...Your description here...' }
];

function DepartmentCard({ label, icon, description }) {
    return (
        <div className="department-card">
            {icon}
            <h3>{label}</h3>
        </div>
    );
}
function DepartmentPage() {
    return (
        <div className="department-container">
            <h2 style={{color: "darkblue", fontFamily: 'lucida grande', fontWeight: 'bold',fontSize:'40px', textAlign:'center'}}>OUR DEPARTMENT OF EXPERTISE</h2>

            <div className="departments">
                {departments.map(dept => (
                    <DepartmentCard key={dept.label} {...dept} />
                ))}
            </div>

            {/* ...Additional content... */}
            {/*<img src="your-image-url-here" alt="Doctor and patient" />*/}
        </div>
    );
}

export default DepartmentPage;
