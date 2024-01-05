import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import NavBar from "../layout/NavBar";
import Swal from "sweetalert2";


export default function LoadChannels() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        loadDoctors();

    }, []);

    const loadDoctors = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/channel/getChannelsByBill");
            setChannels(result.data);
        } catch (error) {
            await Swal.fire("Error", "No record found.", "error");
        }
    }

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"admin"}/>
            <div className="background-image2"></div>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Doctor ID</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            channels.map((channel) => (
                                <tr>
                                    <td>{channel.channelId}</td>
                                    <td>{channel.date}</td>
                                    <td>{channel.patient.id}</td>
                                    <td>{channel.doctor.id}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-outline-primary mx-1" to={`/report/${channel.channelId}`}>Create Bill</Link>
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

