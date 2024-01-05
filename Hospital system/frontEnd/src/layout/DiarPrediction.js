import React, {useState} from 'react';
import '../App.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";


const DiarPrediction = () => {
    const {id}=useParams();

    const [doctor, setDoctor] = useState({
        sex: "",
        ecg: "",
        chest: "",
        agina: "",
        slop: "",
        age: "",
        bloodPressure: "",
        cholesterol: "",
        bloodSugar: ""
    });

    const {sex, ecg, chest, agina,slop,age,bloodPressure,cholesterol,bloodSugar} = doctor;

    const onInputChange = (e) => {
        setDoctor({...doctor, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/doctor/updateDoctor`, doctor);
    };

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"patient"} patientId={id} style={{paddingRight:0}}/>
            <h1 style={{fontSize:'2em', marginTop:'0.5em', fontWeight: 'bold'}}>Patient Information</h1>
            <div className="container border rounded p-4 shadow" style={{marginTop:'3em', marginLeft:0}}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-5">
                            <label htmlFor="Doctorname" className="form-label">
                                Sex
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Sex"
                                name="sex"
                                value={sex}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-5">
                            <label htmlFor="Contact" className="form-label">
                                Resting ECG
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter ECG"
                                name="ecg"
                                value={ecg}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-5">
                            <label htmlFor="Email" className="form-label">
                                Chest Pain Type
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Chest Pain Type"
                                name="chest"
                                value={chest}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-5">
                            <label htmlFor="Specialization" className="form-label">
                                Exercise Angina
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Exercise Angina"
                                name="agina"
                                value={agina}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-5">
                            <label htmlFor="Specialization" className="form-label">
                                ST Slop
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter ST Slop"
                                name="slop"
                                value={slop}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div><div className="col-md-4">
                    <div className="mb-5">
                        <label htmlFor="Specialization" className="form-label">
                            Age
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Age"
                            name="age"
                            value={age}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-5">
                            <label htmlFor="Specialization" className="form-label">
                                Resting Blood Pressure
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Resting Blood Pressure"
                                name="bloodPressure"
                                value={bloodPressure}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-5">
                            <label htmlFor="Specialization" className="form-label">
                                Cholesterol
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Cholesterol"
                                name="cholesterol"
                                value={cholesterol}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div><div className="col-md-4">
                    <div className="mb-5">
                        <label htmlFor="Specialization" className="form-label">
                            Fasting Blood Sugar
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Fasting Blood Sugar"
                            name="bloodSugar"
                            value={bloodSugar}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <button type="submit" className="btn btn-outline-primary btn-lg">
                                Prediction
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};


export default DiarPrediction;
