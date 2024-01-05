import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import NavBar from "../layout/NavBar";
import Swal from "sweetalert2";


export default function PatientDetail() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        loadPatients();

    }, []);

    const loadPatients = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/patient/getPatients");
        setPatients(result.data);
    }

    const deletePatient = async (id) => {
        Swal.fire({
            title: "Confirm Delete",
            text: "Are you sure you want to delete this patient?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete!",
            cancelButtonText: "No, cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                // User confirmed, proceed to delete the doctor
                await axios.delete(`http://localhost:8080/api/v1/patient/deletePatient/${id}`);
                await loadPatients();
                await Swal.fire("Deleted!", "The Patient has been deleted.", "success");
            }
        });
    }

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"admin"}/>
            <div className="background-image4"></div>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">GuardianName</th>
                            <th scope="col">GuardianContact</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            patients.map((patient) => (
                                <tr>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.contact}</td>
                                    <td>{patient.gardienName}</td>
                                    <td>{patient.gardienContact}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-outline-primary mx-1"
                                              to={`/updatePat/${patient.id}`}>Edit</Link>
                                        <button className="btn btn-sm btn-outline-danger mx-1"
                                                onClick={() => deletePatient(patient.id)}>Delete
                                        </button>
                                    </td>
                                </tr>

                            ))
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}