import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddPatient() {
    let navigate = useNavigate();

    const [patient, setPatient] = useState({
        name: "",
        contact: "",
        email: "",
        gardienName: "",
        gardienContact: "",
    });

    const {name, contact,email, gardienName, gardienContact} = patient;

    const onInputChange = (e) => {
        setPatient({...patient, [e.target.name]: e.target.value});
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
                    const response = await axios.post("http://localhost:8080/api/v1/patient/savePatient", patient);

                    // Check if the response contains a PatientDTO
                    if (response.data) {
                        Swal.fire({
                            title: 'Saved!',
                            text: 'Patient saved successfully!',
                            icon: 'success',
                            html: `Patient's Password: ${response.data.password}
                            Patient's ID: ${response.data.id}`
                        });
                        navigate("/")

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
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-lg-5 shadow"
                     style={{backgroundColor: "white"}}>
                    <h2 className="text-center m-4">Register Patient</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Patientname" className="form-label">
                                Patient Name
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
                                placeholder="Enter your contact"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Guardian Name" className="form-label">
                                Guardian Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your guardian's name"
                                name="gardienName"
                                value={gardienName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Guardian Contact" className="form-label">
                                Guardian Contact
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your guardian's contact"
                                name="gardienContact"
                                value={gardienContact}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/reg">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}