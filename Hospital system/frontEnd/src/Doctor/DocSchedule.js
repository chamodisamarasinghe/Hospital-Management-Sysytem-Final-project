import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import NavBar from "../layout/NavBar";
import Swal from "sweetalert2";


export default function DocSchedule() {
    const [schedules, setSchedule] = useState([]);

    /*const { doctorId } = useParams();*/
    const {id} = useParams();

    useEffect(() => {
        loadSchedule();

    }, []);

    const loadSchedule = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/channel/getChannelByDoc/${id}`);
            setSchedule(result.data);

            if (result.data.length === 0) {
                // If no records are fetched, show a SweetAlert error message
                await Swal.fire("No Appointments", "No appointments are available for this doctor.", "error");
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
            // Handle other errors as needed
            await Swal.fire("No Appointments", "No appointments are available for this doctor.", "error");
        }
    }



    const deleteDoctor = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                await axios.delete(`http://localhost:8080/api/v1/channel/deleteChannel/${id}`);
                loadSchedule();
            }
        })

    }

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"doctor"} patientId={id}/>
            <div className="background-image3"></div>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">Channel ID</th>
                            <th scope="col">Day</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th scope="col">Patient ID</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            schedules.map((schedule) => (
                                <tr>
                                    <td>{schedule.channelId}</td>
                                    <td>{schedule.availability.dayOfWeek}</td>
                                    <td>{schedule.availability.startTime}</td>
                                    <td>{schedule.availability.endTime}</td>
                                    <td>{schedule.patient.id}</td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-danger mx-1"
                                                onClick={() => deleteDoctor(schedule.channelId)}>Delete
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