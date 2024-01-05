import React, {useEffect, useState} from "react";
import jsPDF from "jspdf";
import NavBar from "./NavBar";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function PDFGenerator() {
    let navigate = useNavigate();

    useEffect(() => {
        loadChannel();

    }, []);

    const {channelId} = useParams();

    const [report, setReport] = useState({
        pName: "",
        pContact: "",
        date: "",
        time: "",
        dName: "",
        special: "",
        room: "",
        hCharge: "",
        dCharge: "",
    });

    const {pName, pContact, date, time, dName, special, room, hCharge, dCharge} = report;


    const loadChannel = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/channel/getChannel/${channelId}`);
        setReport({
            ...report,
            pName: result.data.patient.name,
            pContact: result.data.patient.contact,
            date: result.data.date,
            time: result.data.availability.startTime,
            dName: result.data.doctor.name,
            special: result.data.doctor.specialization,

        });

    }

    const onInputChange = (e) => {
        setReport({...report, [e.target.name]: e.target.value});
    };


    const generatePDF = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Generate PDF?",
            text: "Are you sure you want to generate the PDF?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const doc = new jsPDF();

                // Define the MEDCare logo URL
                const medcareLogoUrl = "https://i.ibb.co/N3HHKpw/med2.png"; // Replace with the actual logo URL

                // Logo positioning
                const logoWidth = 10; // Adjust the logo width as needed
                const logoHeight = 10; // Adjust the logo height as needed
                const xPosition = 90;
                const yPosition = 10;

                // Load the MEDCare logo from the URL and add it to the PDF
                doc.addImage(medcareLogoUrl, "PNG", xPosition, yPosition, logoWidth, logoHeight);

                // Add the "MEDCare" text next to the logo
                doc.setFontSize(16);
                const medcareText = "MEDCare";
                const textXPosition = 102;
                const textYPosition = 17;

                doc.text(medcareText, textXPosition, textYPosition);

                doc.setFontSize(14);
                doc.text("APPOINTMENT BILL", 85, textYPosition + 10);
                doc.setFontSize(12);
                const pName = document.getElementById("pName").value;
                doc.text(`Patient Name             : ${pName}`, 20, textYPosition + 30);
                const pContact = document.getElementById("pContact").value;
                doc.text(`Patient Contact          : ${pContact}`, 20, textYPosition + 37);
                const aDate = document.getElementById("aDate").value;
                doc.text(`Appointment Date      : ${aDate}`, 20, textYPosition + 54);
                const aTime = document.getElementById("aTime").value;
                doc.text(`Appointment Time      : ${aTime}`, 20, textYPosition + 61);
                const dName = document.getElementById("dName").value;
                doc.text(`Doctor Name              : ${dName}`, 20, textYPosition + 68);
                const special = document.getElementById("special").value;
                doc.text(`Doctor Specialization : ${special}`, 20, textYPosition + 75);
                const room = document.getElementById("room").value;
                doc.text(`Room Number            : ${room}`, 20, textYPosition + 82);
                const hCharge = document.getElementById("hCharge").value;
                doc.text(`Hospital Charge          : ${hCharge}`, 20, textYPosition + 99);
                const dCharge = document.getElementById("dCharge").value;
                doc.text(`Doctor Charge            : ${dCharge}`, 20, textYPosition + 106);

                const total = parseFloat(dCharge) + parseFloat(hCharge);

                // Add the calculated total to the PDF
                doc.setFontSize(17);
                doc.text(`Total: ${total.toFixed(2)}`, 20, textYPosition + 117);
                doc.save("report.pdf");

                const result = await axios.get(`http://localhost:8080/api/v1/channel/markChannelAsBilled/${channelId}`);

                navigate("/channels");
            }
        });
    };

    return (
        <div className="row">
            <NavBar isAuthenticated={true} userRole={""}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-1">Appointment Bill</h2>

                        <form onSubmit={generatePDF}>
                            <div className="mb-3">
                                <label htmlFor="pName" className="form-label">
                                    Patient Name
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your patient name"
                                    name="pName"
                                    value={pName}
                                    id="pName"
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pcontact" className="form-label">
                                    Patient Contact
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your patient Contact"
                                    name="pContact"
                                    value={pContact}
                                    id='pContact'
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">
                                    Appointment Date
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter the Date"
                                    id='aDate'
                                    name="aDate"
                                    value={date}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">
                                    Appointment Time
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter the Time"
                                    id='aTime'
                                    name="aTime"
                                    value={time}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dName" className="form-label">
                                    Doctor Name
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your doctor name"
                                    id='dName'
                                    value={dName}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="special" className="form-label">
                                    Specialization
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter specialization"
                                    id='special'
                                    name="special"
                                    value={special}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="room" className="form-label">
                                    Room Number
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter the room number"
                                    id='room'
                                    name="room"
                                    value={room}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="hcharg" className="form-label">
                                    Hospital Charge
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your hospital Charge"
                                    id='hCharge'
                                    name="hCharge"
                                    value={hCharge}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dCharge" className="form-label">
                                    Doctor Charge
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your doctor Charge"
                                    id='dCharge'
                                    name="dCharge"
                                    value={dCharge}
                                    onChange={onInputChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/channels">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PDFGenerator;
