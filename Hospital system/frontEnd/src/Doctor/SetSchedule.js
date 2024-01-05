import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useParams} from 'react-router-dom';
import NavBar from "../layout/NavBar";

const DoctorScheduleForm = () => {
    const {doctorId} = useParams();

    const [doctor, setDoctor] = useState(null); // To store the doctor object
    const [formData, setFormData] = useState({
        doctorid: '', // Use the doctor object for this field
        startTime: '',
        endTime: '',
        dayOfWeek: '',
    });

    const {startTime, endTime, dayOfWeek} = formData;

    useEffect(() => {
        // Fetch the doctor object by doctorId
        async function fetchDoctor() {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/v1/doctor/getDoctor/${doctorId}`
                );
                setDoctor(response.data);
            } catch (error) {
                console.error('Error fetching doctor:', error);
            }
        }

        fetchDoctor();
    }, [doctorId]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!doctor) {
            // Ensure the doctor object is fetched before submitting
            return;
        }

        // Prepare the data to send to the backend
        const availabilityData = {
            doctor: doctor,
            startTime: startTime,
            endTime: endTime,
            dayOfWeek: dayOfWeek,
        };

        // Show SweetAlert confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to save this schedule?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Send the schedule data to the backend for processing
                    const response = await axios.post(
                        'http://localhost:8080/api/v1/availability/saveAvailability',
                        availabilityData
                    );

                    console.log('Schedule added successfully:', response.data);

                    // Reset the form after successful submission
                    setFormData({
                        doctorid: '', // Reset doctorid to an empty string
                        startTime: '',
                        endTime: '',
                        dayOfWeek: '',
                    });

                    Swal.fire('Success!', 'Schedule added successfully!', 'success');
                } catch (error) {
                    console.error('Error adding schedule:', error);
                    Swal.fire('Error!', 'An error occurred while saving the schedule.', 'error');
                }
            }
        });
    };

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"doctor"} patientId={doctorId}/>
            <div className="background-image3"></div>
            <div className="row mt-lg-5">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-lg-5 shadow"
                     style={{backgroundColor: "white"}}>
                    <h2>Doctor Schedule</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="doctorid" className="form-label">
                                Doctor ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="doctorid"
                                name="doctorid"
                                value={doctor?.id || ''}
                                readOnly
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startTime" className="form-label">
                                Start Time
                            </label>
                            <select
                                className="form-select"
                                id="startTime"
                                name="startTime"
                                value={startTime}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a Start Time</option>
                                <option value="4.00 PM">10.00 PM</option>
                                <option value="11.00 AM">11.00 AM</option>
                                <option value="12.00 AM">12.00 AM</option>
                                <option value="1.00 PM">1.00 PM</option>
                                <option value="2.00 PM">2.00 PM</option>
                                <option value="3.00 PM">3.00 PM</option>
                                <option value="4.00 PM">4.00 PM</option>
                                <option value="5.00 PM">5.00 PM</option>
                                <option value="6.00 PM">6.00 PM</option>
                                <option value="7.00 PM">7.00 PM</option>
                                <option value="8.00 PM">8.00 PM</option>
                                <option value="9.00 PM">9.00 PM</option>
                                <option value="10.00 PM">10.00 PM</option>
                                <option value="11.00 PM">11.00 PM</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="endTime" className="form-label">
                                End Time
                            </label>
                            <select
                                className="form-select"
                                id="endTime"
                                name="endTime"
                                value={endTime}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a End Time</option>
                                <option value="4.00 PM">10.00 PM</option>
                                <option value="11.00 AM">11.00 AM</option>
                                <option value="12.00 AM">12.00 AM</option>
                                <option value="1.00 PM">1.00 PM</option>
                                <option value="2.00 PM">2.00 PM</option>
                                <option value="3.00 PM">3.00 PM</option>
                                <option value="4.00 PM">4.00 PM</option>
                                <option value="5.00 PM">5.00 PM</option>
                                <option value="6.00 PM">6.00 PM</option>
                                <option value="7.00 PM">7.00 PM</option>
                                <option value="8.00 PM">8.00 PM</option>
                                <option value="9.00 PM">9.00 PM</option>
                                <option value="10.00 PM">10.00 PM</option>
                                <option value="11.00 PM">11.00 PM</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dayOfWeek" className="form-label">
                                Day of the Week
                            </label>
                            <select
                                className="form-select"
                                id="dayOfWeek"
                                name="dayOfWeek"
                                value={dayOfWeek}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a day</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save Schedule
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DoctorScheduleForm;
