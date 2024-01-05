import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";
import Swal from "sweetalert2";

const HFPrediction = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [doctor, setDoctor] = useState({
        bmi: "",
        smoking: "",
        alcoholDrinking: "",
        stroke: "",
        physicalHealth: "",
        mentalHealth: "",
        difficultyWalking: "",
        sex: "",
        age: "",
        diabetic: "",
        physicalActivity: "",
        generalHealth: "",
        sleepTime: "",
        asthma: "",
        kidneyDisease: ""
    });

    const { bmi, smoking, alcoholDrinking, stroke, physicalHealth,
        mentalHealth, difficultyWalking, sex, age, diabetic,
        physicalActivity, generalHealth, sleepTime, asthma, kidneyDisease } = doctor;

    const onInputChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };

    const calculateBMI = () => {
        // Perform BMI calculation using the provided weight and height
        // Update the BMI state with the calculated value
        const weight = doctor.weight || 0;
        const height = doctor.height || 0;
        const calculatedBMI = (weight / ((height / 100) * (height / 100))).toFixed(2);
        setDoctor({ ...doctor, bmi: calculatedBMI });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/doctor/updateDoctor`, doctor);
            console.log('Axios Response:', response.data);

            // Trigger the saveFunction after the Axios request
            saveFunction();
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    const saveFunction = () => {
        console.log('Save');

        const formData = new FormData();
        formData.append('BMI', bmi);
        formData.append('Smoking', smoking);
        formData.append('AlcoholDrinking', alcoholDrinking);
        formData.append('Stroke', stroke);
        formData.append('PhysicalHealth', physicalHealth);
        formData.append('MentalHealth', mentalHealth);
        formData.append('DiffWalking', difficultyWalking);
        formData.append('Sex', sex);
        formData.append('age', age);
        formData.append('Diabetic', diabetic);
        formData.append('PhysicalActivity', physicalActivity);
        formData.append('GenHealth', generalHealth);
        formData.append('SleepTime', sleepTime);
        formData.append('Asthma', asthma);
        formData.append('KidneyDisease', kidneyDisease);

        axios.post('http://127.0.0.1:5000/heartRisk', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((response) => {
            console.log('2', response);
            if (response.data.status === 200) {
                if (response.data.response === 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'High',
                        text: 'It seems that there is a high risk of heart-related issues. We recommend consulting a doctor for further evaluation.',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Find Doctors',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/heartDoctors');
                        }
                    });

                }
                else if (response.data.response === 1) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Very Low',
                        text: 'Your recent heart health assessment indicates very low risk. Keep up the good work and stay committed to a healthy lifestyle!',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK',
                    });
                }

                else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Mid',
                        text: 'It seems that there is a mid risk of heart-related issues. We recommend consulting a doctor for further evaluation.',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Find Doctors',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/heartDoctors');
                        }
                    });
                }
            } else {
                alert(response.data.response) // TODO
            }
        }).catch((error) => {
            console.error('Error fetching types:', error);
        });
    };


    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"patient"} patientId={id} style={{paddingRight:0}}/>
            <h1 style={{fontSize:'2em', marginTop:'0.5em', fontWeight: 'bold'}}>Patient Information</h1>
            <div className="container border rounded p-4 shadow" style={{marginTop:'3em', marginLeft:0}}>

                <form>
                {/*Row1*/}
                <div className="row">
                        <div className="mb-4">
                            <label htmlFor="weight" className="form-label">
                                Weight (kg)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter weight"
                                name="weight"
                                value={doctor.weight || ""}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="height" className="form-label">
                                Height (cm)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter height"
                                name="height"
                                value={doctor.height || ""}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="bmi" className="form-label">
                                BMI
                            </label>
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter BMI"
                                    name="bmi"
                                    value={bmi}
                                    onChange={(e) => onInputChange(e)}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={calculateBMI}
                                >
                                    Calculate BMI
                                </button>
                            </div>
                        </div>
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="age" className="form-label">
                                Age
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter your age"
                                name="age"
                                value={age}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="alcoholDrinking" className="form-label">
                                Alcohol Drinking
                            </label>
                            <select
                                className="form-select"
                                name="alcoholDrinking"
                                value={alcoholDrinking}
                                onChange={(e) => onInputChange(e)}
                                aria-describedby="alcoholDrinkingDescription"  // Add aria-describedby
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="alcoholDrinkingDescription" className="form-text">
                                Please select "Yes" if you consume alcohol, and "No" if you do not. Providing accurate information helps in assessing your overall health condition.
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="stroke" className="form-label">
                                Stroke
                            </label>
                            <select
                                className="form-select"
                                name="stroke"
                                value={stroke}
                                onChange={(e) => onInputChange(e)}
                                aria-describedby="strokeDescription"  // Add aria-describedby
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="strokeDescription" className="form-text">
                                A stroke is a medical condition that occurs when there is a disruption in blood supply to the brain. If you have experienced a stroke, please select "Yes"; otherwise, select "No."
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="sex" className="form-label">
                                Sex
                            </label>
                            <select
                                name="sex"
                                className="form-select"
                                value={sex}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/*Row2*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="physicalHealth" className="form-label">
                                Physical Health
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                //placeholder="Enter your age"
                                name="physicalHealth"
                                value={physicalHealth}
                                onChange={(e) => onInputChange(e)}
                                aria-describedby="physicalHealthDescription"  // Add aria-describedby
                            />
                            <div id="physicalHealthDescription" className="form-text">
                                Please enter your physical health score. (e.g., 1 to 100)
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="mentalHealth" className="form-label">
                                Mental Health
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                //placeholder="Please enter your mental health score."
                                name="mentalHealth"
                                value={mentalHealth}
                                onChange={(e) => onInputChange(e)}
                                aria-describedby="mentalHealthDescription"  // Add aria-describedby
                            />
                            <div id="mentalHealthDescription" className="form-text">
                                Please enter your mental health score. (e.g., 1 to 100)
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="difficultyWalking" className="form-label">
                                Difficulty Walking
                            </label>
                            <select
                                className="form-select"
                                name="difficultyWalking"
                                value={difficultyWalking}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="difficultyWalkingDescription" className="form-text">
                                Please select "Yes" if you are experiencing difficulty walking, and "No" if you are not. Providing accurate information helps in assessing your overall health condition.
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="smoking" className="form-label">
                                Smoking
                            </label>
                            <select
                                className="form-select"
                                name="smoking"
                                value={smoking}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="alcoholDrinkingDescription" className="form-text">
                                Please select "Yes" if you smoke, and "No" if you do not. Providing accurate information helps in assessing your overall health condition.
                            </div>
                        </div>
                    </div>
                </div>

                {/*Row3*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="diabetic" className="form-label">
                                Diabetic
                            </label>
                            <select
                                className="form-select"
                                name="diabetic"
                                value={diabetic}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="diabeticDescription" className="form-text">
                                Please select "Yes" if you have been diagnosed with diabetes, and "No" if you have not. Providing accurate information about your diabetic status helps in assessing your overall health condition.
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="physicalActivity" className="form-label">
                                Physical Activity
                            </label>
                            <select
                                name="physicalActivity"
                                className="form-select"
                                value={physicalActivity}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="physicalActivityDescription" className="form-text">
                                Please select "Yes" if you engage in regular physical activity, and "No" if you do not. Providing accurate information helps in assessing your lifestyle and overall health condition.
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="generalHealth" className="form-label">
                                General Health
                            </label>
                            <select
                                name="generalHealth"
                                className="form-select"
                                value={generalHealth}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="Excellent">Excellent</option>
                                <option value="Very good">Very good</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="Poor">Poor</option>
                            </select>
                            <div id="mentalHealthDescription" className="form-text">
                                Please select the option that best describes your overall health. This information helps in understanding your current health status.
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="sleepTime" className="form-label">
                                Sleep Time
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Sleeping hours of the day"
                                name="sleepTime"
                                value={sleepTime}
                                onChange={(e) => onInputChange(e)}
                                aria-describedby="sleepTimeDescription"  // Add aria-describedby
                            />
                            <div id="sleepTimeDescription" className="form-text">
                                Please enter the average number of hours you sleep per day.
                            </div>
                        </div>
                    </div>
                </div>

                {/*Row4*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="asthma" className="form-label">
                                Asthma
                            </label>
                            <select
                                className="form-select"
                                name="asthma"
                                value={asthma}
                                onChange={(e) => onInputChange(e)}
                                aria-describedby="asthmaDescription"  // Add aria-describedby
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="asthmaDescription" className="form-text">
                                Asthma is a chronic respiratory condition that can affect your breathing. If you have been diagnosed with asthma, please select "Yes"; otherwise, select "No."
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="kidneyDisease" className="form-label">
                                Kidney Disease
                            </label>
                            <select
                                name="kidneyDisease"
                                className="form-select"
                                value={kidneyDisease}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div id="kidneyDiseaseDescription" className="form-text">
                                Please indicate whether you have been diagnosed with or are currently experiencing symptoms related to kidney disease.Your input helps in assessing your overall health and risk factors.
                            </div>

                        </div>
                    </div>
                </div>
            </form>


                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={onSubmit}>
                            {/*<button type="submit" className="btn btn-outline-primary btn-lg">*/}
                            {/*    Prediction*/}
                            {/*</button>*/}


                            <button type="button" className="btn btn-outline-success btn-lg ml-2"
                                    onClick={saveFunction}>
                                Prediction
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HFPrediction;
