import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import NavBar from "../layout/NavBar";
import Swal from "sweetalert2";

export default function UpdateDoctor() {
    let navigate = useNavigate();

    const {id} = useParams();

    const [doctor, setDoctor] = useState({
        name: "",
        contact: "",
        email: "",
        specialization: "",
    });

    const {name, contact, email, specialization} = doctor;

    const onInputChange = (e) => {
        setDoctor({...doctor, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadDoctor();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to edit this!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, edit it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been edited.',
                    'success'
                )
                await axios.put(`http://localhost:8080/api/v1/doctor/updateDoctor`, doctor);
                navigate("/doctorDetails");
            }
        })

    };

    const loadDoctor = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/doctor/getDoctor/${id}`);
        setDoctor(result.data);

    }

    return (
        <div className="row">
            <NavBar isAuthenticated={true} userRole={""}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Update Doctor</h2>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Doctorname" className="form-label">
                                    Doctor Name
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your doctorname"
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
                                    name="email"
                                    value={email}
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
                                    name="specialization"
                                    value={specialization}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}