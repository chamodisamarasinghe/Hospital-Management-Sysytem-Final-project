import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "../layout/NavBar";

export default function UpdatePatient() {
    let navigate = useNavigate();

    const {id} = useParams();

    const [patient, setPatient] = useState({
        name: "",
        contact: "",
        gardienName: "",
        gardienContact: "",
    });

    const {name, contact, gardienName, gardienContact} = patient;

    const onInputChange = (e) => {
        setPatient({...patient, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadPatient();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Update this!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Updated!',
                    'Your file has been Updated.',
                    'success'
                )
                await axios.put(`http://localhost:8080/api/v1/patient/updatePatient`, patient);
                navigate("/patient");
            }
        })

    };

    const loadPatient = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/patient/getPatient/${id}`);
        setPatient(result.data);

    }

    return (
        <div className="row">
            <NavBar isAuthenticated={true} userRole={""}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Update Patient</h2>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Patientname" className="form-label">
                                    Patient Name
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your patientname"
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
                                    placeholder="Enter your e-mail address"
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
                                    placeholder="Enter your e-mail address"
                                    name="gardienName"
                                    value={gardienName}
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
                                    placeholder="Enter your e-mail address"
                                    name="gardienContact"
                                    value={gardienContact}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/patient">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}