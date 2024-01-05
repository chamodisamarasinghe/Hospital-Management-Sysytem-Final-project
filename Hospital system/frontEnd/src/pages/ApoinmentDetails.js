import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import NavBar from "../layout/NavBar";
import Swal from "sweetalert2";

export default function AppointmentDetails() {
    let navigate = useNavigate();
    const [appointments, setAppointment] = useState([]);
    const { doctorId, patientId } = useParams();

    useEffect(() => {
        loadAppointment();
    }, []);

    const loadAppointment = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/availability/getAvailabilityDoc/${doctorId}`);
            setAppointment(result.data);

            if (result.data.length === 0) {
                // If no records are fetched, show a SweetAlert error message
                Swal.fire("No Appointments", "No appointments are available for this doctor.", "error");
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
            // Handle other errors as needed
            Swal.fire("No Appointments", "No appointments are available for this doctor.", "error");
        }
    }

    const fetchDataForChannel = async (availabilityId) => {
        // Show a SweetAlert confirmation dialog
        Swal.fire({
            title: "Confirm Channel",
            text: "Are you sure you want to channel this doctor?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, channel!",
            cancelButtonText: "No, cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                // User confirmed, proceed to fetch the data and channel the doctor
                try {
                    const availabilityResponse = await axios.get(`http://localhost:8080/api/v1/availability/getAvailability/${availabilityId}`);
                    const doctorResponse = await axios.get(`http://localhost:8080/api/v1/doctor/getDoctor/${doctorId}`);
                    const patientResponse = await axios.get(`http://localhost:8080/api/v1/patient/getPatient/${patientId}`);

                    const availabilityData = availabilityResponse.data;
                    const doctorData = doctorResponse.data;
                    const patientData = patientResponse.data;

                    const currentDate = new Date();
                    const year = currentDate.getFullYear();
                    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
                    const day = currentDate.getDate().toString().padStart(2, "0");

// Create a formatted date string (e.g., "YYYY-MM-DD")
                    const formattedDate = `${year}-${month}-${day}`;

                    // Call onChannel with the fetched data
                    await onChannel(availabilityData, doctorData, patientData, formattedDate);
                } catch (error) {
                    console.error("An error occurred while fetching data for channel:", error);
                    // Handle other errors as needed
                    await Swal.fire("Error", "An error occurred while channeling the doctor. Please try again.", "error");
                }
            }
        });
    };


    const onChannel = async (availability, doctor, patient, date) => {
        // Define the data to be sent in the POST request
        const data = {
            availability: availability,
            doctor: doctor,
            patient: patient,
            date: date,
            isBilled: false
        };

        try {
            // Make a POST request to save the data
            const response = await axios.post("http://localhost:8080/api/v1/channel/saveChannel", data);

            // Check if the data was successfully saved
            if (response.status === 200) {
                // Handle success, e.g., show a success message or redirect
                console.log("Appointment successfully saved!");
                navigate(`/appo/${patientId}`);
            } else {
                // Handle any errors that occur during the POST request
                console.error("Error saving appointment.");
            }
        } catch (error) {
            // Handle any network or request errors
            console.error("An error occurred while saving the appointment:", error);
        }
    };

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={""} />
            <div className="background-image2"></div>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Day</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.availabilityId}>
                            <td>{appointment.availabilityId}</td>
                            <td>{appointment.doctor.name}</td>
                            <td>{appointment.dayOfWeek}</td>
                            <td>{appointment.startTime}</td>
                            <td>{appointment.endTime}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-primary mx-1"
                                    onClick={() => fetchDataForChannel(appointment.availabilityId)}>
                                    Channel
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
