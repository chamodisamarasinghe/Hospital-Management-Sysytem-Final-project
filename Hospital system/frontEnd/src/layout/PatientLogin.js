import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "./NavBar";

export default function PatientLogin() {
    let navigate = useNavigate();

    const [patientCredentials, setDoctorCredentials] = useState({
        email: "",
        password: "",
    });

    const { email, password } = patientCredentials;

    const onInputChange = (e) => {
        setDoctorCredentials({ ...patientCredentials, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/v1/patient/plogin", patientCredentials)
            .then((response) => {
                if (response.data) {
                    // Handle successful login
                    Swal.fire("Success!", "Logged in successfully!", "success");

                    // Here, you can access response.data, which contains your PatientDTO
                    const authenticatedPatient = response.data;
                    console.log(authenticatedPatient.id);

                    navigate(`/appo/${authenticatedPatient.id}`);
                } else {
                    Swal.fire("Error!", "Invalid email or password", "error");
                }
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with an error status code
                    if (error.response.status === 401) {
                        Swal.fire("Error!", "Invalid email or password", "error");
                    } else {
                        Swal.fire("Error!", "An error occurred", "error");
                    }
                } else {
                    // Network or other errors occurred
                    Swal.fire("Error!", "Network error occurred", "error");
                }
            });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-lg-5 shadow" style={{backgroundColor: "white"}}>
                    <h2 className="text-center m-4">Patient Login</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Patient Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Email"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Login
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
