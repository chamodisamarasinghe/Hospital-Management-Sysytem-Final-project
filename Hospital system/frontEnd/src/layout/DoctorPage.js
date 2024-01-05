import React from 'react';
import {useNavigate} from 'react-router-dom';
import NavBar from "./NavBar";
import '../App.css';
import styles from '../DoctorPage.module.css';
import contact from './images/contact.png';
import doc1 from './images/d1.png';
import doc2 from './images/d2.png';
import doc3 from './images/d3.jpg';
import doc5 from './images/d5.jpg';
import doc6 from './images/d6.jpg';
import doc7 from './images/d7.jpg';
import doc8 from './images/d8.jpeg';
import doc9 from './images/d9.png';
import doc10 from './images/d10.png';
import doc11 from './images/d11.png';
import doc12 from './images/d12.png';
import doc14 from './images/d14.png';
import Footer from "./Footer";

const doctors = [
    {
        id: 1,
        name: 'Dr. B.N. LALITHA MUNASINGHE',
        specialization: 'Consultant Neurosurgeon',
        description: 'Dr. Ajay Singh is a seasoned Consultant Neurosurgeon with a remarkable five-plus years of experience.',
        image: doc1,
    },
    {
        id: 2,
        name: 'Dr. M.D.R.KUMARA',
        specialization: 'Obstetrics & Gynecology',
        description: 'Dr. Harmanpreet Kaur is a Senior Consultant Obstetrician, Gynecologist & Laparoscopic surgeon at Healing Hospital, Chandigarh.',
        image: doc2,
    },
    {
        id: 3,
        name: 'Dr. S.A.KOHOMBANGE',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc12,
    },

    {
        id: 4,
        name: 'Dr. W.D.ARIYADASA',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc9,
    },

    {
        id: 4,
        name: 'Dr. SHIRANI JAYASINGHE',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc11,
    },

    {
        id: 4,
        name: 'Dr. D.WIJEWARDANA',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc10,
    },

    {
        id: 4,
        name: 'Dr. V.M.C.PERERA',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc8,
    },

    {
        id: 4,
        name: 'Dr. M.A.P.TISSERA',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc5,
    },

    {
        id: 4,
        name: 'Dr. W.W.FERNANDO',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc3,
    },

    {
        id: 4,
        name: 'Dr. W.R.NANAYAKKARA',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc7,
    },

    {
        id: 4,
        name: 'Dr. R.D.DE.S.GINIGE',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc14,
    },

    {
        id: 4,
        name: 'Dr. D.K.D.MATHEW',
        specialization: 'Neuromedicine Specialist',
        description: 'Dr. J. P. Singhvi, MBBS, MD (Medicine), DM (Neurology), is working as a Sr. Consultant-Neurology at Healing Hospital, Chandigarh.',
        image: doc6,
    }
];




const DoctorPage = () => {

    const navigate = useNavigate();

    const doctorList = doctors.map(doctor => (
        <div key={doctor.id} className={styles.card}>
            <img src={doctor.image} alt={doctor.name} className={styles.doctorImage} />
            <div className={styles.cardContent}>
                <h3>{doctor.name}</h3>
                <p><strong>{doctor.specialization}</strong></p>
                <p>{doctor.description}</p>
                <button className={styles.readMoreButton}>Read More</button>
            </div>
        </div>
    ));




    return (
        <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
            <NavBar isAuthenticated={true} userRole={"front"} patientId={""} style={{ paddingRight: 0 }} />
            <div className={styles.doctorGrid}>
                {doctorList}
            </div>


            <Footer />
        </div>



    );
};


export default DoctorPage;
