import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminDoctorReg() {
    let navigate = useNavigate();

    const [doctor, setDoctor] = useState({
        name: "",
        contact: "",
        email: "",
        specialization: "",
        channels: ""
    });

    const {name, contact, email, specialization, channels} = doctor;

    const onInputChange = (e) => {
        setDoctor({...doctor, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to save this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post("http://localhost:8080/api/v1/doctor/saveDoctor", doctor);

                    // Check if the response contains a PatientDTO
                    if (response.data) {
                        Swal.fire({
                            title: 'Saved!',
                            text: 'Patient saved successfully!',
                            icon: 'success',
                            html: `Doctor's Password: ${response.data.password}
                            Doctor's ID: ${response.data.id}`


                        });
                        navigate('/dashBoard');

                    } else {
                        Swal.fire('Error!', 'Failed to save patient.', 'error');
                    }
                } catch (error) {
                    Swal.fire('Error!', 'An error occurred while saving the patient.', 'error');
                }
            }
        });
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-lg-5 shadow" style={{backgroundColor: "white"}}>
                    <h2 className="text-center m-4">Register Doctor</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Doctorname" className="form-label">
                                Doctor Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Contact" className="form-label">
                                Contact
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your contact"
                                name="contact"
                                value={contact}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Specialization" className="form-label">
                                Specialization
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your specialization"
                                name="specialization"
                                value={specialization}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Channels" className="form-label">
                                Channels
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your channel count"
                                name="channels"
                                value={channels}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/dashBoard">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}