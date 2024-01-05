import React, {useState} from 'react';
import '../App.css';
import {useNavigate, useParams} from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";
import {Input} from "reactstrap";
import Swal from "sweetalert2";

const DiabeticPrediction = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const [doctor, setDoctor] = useState({
        age: "",
        gender: "",
        polyuria: "",
        polydipsia: "",
        weightLoss: "",
        weakness: "",
        polyphagia: "",
        genitalThrush: "",
        visualBlurring: "",
        itching: "",
        irritability: "",
        delayedHealing: "",
        partialParesis: "",
        muscleStiffness: "",
        alopecia: "",
        obesity: ""
    });

    const {
        age, gender, polyuria, polydipsia, weightLoss, weakness, polyphagia,
        genitalThrush, visualBlurring, itching, irritability, delayedHealing,
        partialParesis, muscleStiffness, alopecia, obesity
    } = doctor;

    const onInputChange = (e) => {
        setDoctor({...doctor, [e.target.name]: e.target.value});
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
        formData.append('Age', age);
        formData.append('Gender', gender);
        formData.append('Polyuria', polyuria);
        formData.append('Polydipsia', polydipsia);
        formData.append('Sudden_weight_loss',weightLoss);
        formData.append('Weakness', weakness);
        formData.append('Polyphagia', polyphagia);
        formData.append('Genital_thrush', genitalThrush);
        formData.append('Visual_blurring', genitalThrush);
        formData.append('Itching', itching);
        formData.append('Irritability', irritability);
        formData.append('Delayed_healing', delayedHealing);
        formData.append('Partial_paresis', partialParesis);
        formData.append('Muscle_stiffness', muscleStiffness);
        formData.append('Alopecia', alopecia);
        formData.append('Obesity', obesity);

        axios.post('http://127.0.0.1:5000/diabetesRisk', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((response) => {
            console.log('2', response);
            if (response.data.status === 200) {
                if (response.data.response === 1) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Diabetic Risk Detected',
                        text: 'It seems that there is a risk of diabetic issues. We recommend consulting a doctor for further evaluation.',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Find Doctors',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/diabeticDoctors');
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'No Diabetic Risk Detected',
                        text: 'Congratulations! It appears that there is no significant risk of Diabetic issues. Stay healthy!',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK',
                    });
                }
            } else {
                alert(response.data.response)
            }
        }).catch((error) => {
            console.error('Error fetching  types:', error);
        });

        // axios.post('http://127.0.0.1:5000/api_test',)
        //     .then((response) => {
        //         console.log('2', response);
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching animal types:', error);
        //     });
    };


    return (
        <div className="row" style={{marginRight: 0, marginLeft: 0}}>
            <NavBar isAuthenticated={true} userRole={"patient"} patientId={id} style={{paddingRight: 0}}/>
            <h1 style={{fontSize: '2em', marginTop: '0.5em', fontWeight: 'bold'}}>Patient Information</h1>
            <div className="container border rounded p-4 shadow" style={{marginTop: '3em', marginLeft: 0}}>

                <form>
                    {/*Row1*/}
                    <div className="row">
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
                                <label htmlFor="gender" className="form-label">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    className="form-select"
                                    value={gender}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="polyuria" className="form-label">
                                    Polyuria
                                </label>
                                <select
                                    className="form-select"
                                    name="polyuria"
                                    value={polyuria}
                                    onChange={(e) => onInputChange(e)}
                                    aria-describedby="polyuriaDescription"  // Add aria-describedby
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div id="polyuriaDescription" className="form-text">
                                    Polyuria is excessive or an abnormally large production or passage of urine. Please select "Yes" if you are experiencing this symptom.
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="polydipsia" className="form-label">
                                    Polydipsia
                                </label>
                                <select
                                    className="form-select"
                                    name="polydipsia"
                                    value={polydipsia}
                                    onChange={(e) => onInputChange(e)}
                                    aria-describedby="polydipsiaDescription"  // Add aria-describedby
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div id="polydipsiaDescription" className="form-text">
                                    Polydipsia is excessive thirst or an abnormally increased desire for fluid intake. Please select "Yes" if you are experiencing this symptom.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Row2*/}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="weightLoss" className="form-label">
                                    Sudden Weight Loss
                                </label>
                                <select
                                    className="form-select"
                                    name="weightLoss"
                                    value={weightLoss}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Sudden weight loss refers to a significant and unintentional reduction in body weight over a short period. Please select "Yes" if you are experiencing sudden weight loss and "No" if you are not.
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="weakness" className="form-label">
                                    Weakness
                                </label>
                                <select
                                    className="form-select"
                                    name="weakness"
                                    value={weakness}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Weakness can be described as a lack of strength or energy. Please select "Yes" if you are experiencing weakness and "No" if you are not.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="polyphagia" className="form-label">
                                    Polyphagia
                                </label>
                                <select
                                    className="form-select"
                                    name="polyphagia"
                                    value={polyphagia}
                                    onChange={(e) => onInputChange(e)}
                                    aria-describedby="polyphagiaDescription"  // Add aria-describedby
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div id="polyphagiaDescription" className="form-text">
                                    Polyphagia is excessive hunger or increased appetite. Please select "Yes" if you are experiencing this symptom.
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="genitalThrush" className="form-label">
                                    Genital Thrush
                                </label>
                                <select
                                    className="form-select"
                                    name="genitalThrush"
                                    value={genitalThrush}
                                    onChange={(e) => onInputChange(e)}
                                    aria-describedby="genitalThrushDescription"  // Add aria-describedby
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div id="genitalThrushDescription" className="form-text">
                                    Genital Thrush, also known as a yeast infection, is a common condition that may affect the genital area. Please select "Yes" if you are experiencing this symptom.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Row3*/}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="visualBlurring" className="form-label">
                                    Visual Blurring
                                </label>
                                <select
                                    className="form-select"
                                    name="visualBlurring"
                                    value={visualBlurring}
                                    onChange={(e) => onInputChange(e)}
                                    aria-describedby="visualBlurringDescription"  // Add aria-describedby
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div id="visualBlurringDescription" className="form-text">
                                    Visual Blurring refers to the loss of sharpness of vision, making objects appear out of focus or hazy. Please select "Yes" if you are experiencing this symptom.
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="itching" className="form-label">
                                    Itching
                                </label>
                                <select
                                    className="form-select"
                                    name="itching"
                                    value={itching}
                                    onChange={(e) => onInputChange(e)}
                                    aria-describedby="itchingDescription"  // Add aria-describedby
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div id="itchingDescription" className="form-text">
                                    Itching refers to a sensation that causes the desire or reflex to scratch. Please select "Yes" if you are experiencing itching.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="irritability" className="form-label">
                                    Irritability
                                </label>
                                <select
                                    className="form-select"
                                    name="irritability"
                                    value={irritability}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Irritability refers to a state of excessive sensitivity or excitability, often accompanied by a reduced threshold for annoyance, frustration, or anger. Please select "Yes" if you are experiencing irritability and "No" if you are not.
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="delayedHealing" className="form-label">
                                    Delayed Healing
                                </label>
                                <select
                                    className="form-select"
                                    name="delayedHealing"
                                    value={delayedHealing}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Please select whether you are experiencing delayed healing or not.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Row4*/}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="partialParesis" className="form-label">
                                    Partial Paresis
                                </label>
                                <select
                                    className="form-select"
                                    name="partialParesis"
                                    value={partialParesis}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Partial Paresis refers to a condition of weakened muscle strength or control. If you experience weakness or partial loss of movement, please select "Yes"; otherwise, choose "No".
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="muscleStiffness" className="form-label">
                                    Muscle Stiffness
                                </label>
                                <select
                                    className="form-select"
                                    name="muscleStiffness"
                                    value={muscleStiffness}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Muscle Stiffness refers to a sensation of reduced flexibility or increased tension in the muscles. If you experience stiffness, please select "Yes"; otherwise, choose "No".
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="alopecia" className="form-label">
                                    Alopecia
                                </label>
                                <select
                                    className="form-select"
                                    name="alopecia"
                                    value={alopecia}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Alopecia refers to hair loss, which may occur in different parts of the body. If you are experiencing hair loss, please select "Yes"; otherwise, choose "No".
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="mb-4">
                                <label htmlFor="obesity" className="form-label">
                                    Obesity
                                </label>
                                <select
                                    className="form-select"
                                    name="obesity"
                                    value={obesity}
                                    onChange={(e) => onInputChange(e)}
                                >
                                    <option value=''></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <div className="form-text">
                                    Obesity is a medical condition characterized by an excess accumulation of body fat. If you are currently experiencing obesity, please select "Yes"; otherwise, choose "No".
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


export default DiabeticPrediction;
