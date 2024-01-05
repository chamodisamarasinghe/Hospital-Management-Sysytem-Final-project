import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { jsPDF } from 'jspdf';
import { Bar } from 'react-chartjs-2';
import { renderToStaticMarkup } from 'react-dom/server';

import NavBar from '../layout/NavBar';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AdminReportsPage = () => {
    const [reports, setReports] = useState([
        {
            id: 1,
            title: 'Monthly Financial Report',
            content: 'This report summarizes the financial activities for the month.',
            details: 'Total Revenue: $XXX, Expenses: $XXX, Profit: $XXX',
        },
        {
            id: 2,
            title: 'Patient Admissions Report',
            content: 'Details about patient admissions and discharges during the month.',
            details: 'Admissions: XX, Discharges: XX, Total Patients: XX',
        },
        // Add more reports as needed
    ]);

    const chartData = {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [
            {
                label: 'Sample Bar Chart',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const chartToImage = () => {
        const chartElement = <Bar data={chartData} options={options} />;
        const chartCanvas = document.createElement('canvas');
        const chartContext = chartCanvas.getContext('2d');

        // Set canvas size based on the chart size
        chartCanvas.width = 400; // Adjust the width as needed
        chartCanvas.height = 200; // Adjust the height as needed

        // Render the chart on the canvas
        chartElement.props.options.animation = false; // Disable animation for accurate rendering
        chartElement.props.options.responsive = false; // Disable responsiveness for accurate rendering
        chartElement.props.options.maintainAspectRatio = false; // Disable aspect ratio for accurate rendering

        chartElement.type.render(chartContext, { width: chartCanvas.width, height: chartCanvas.height });

        // Convert canvas to data URL
        const chartImage = chartCanvas.toDataURL('image/png');

        return chartImage;
    };


    const downloadTextReport = (report) => {
        const blob = new Blob([report.content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${report.title}.txt`;
        link.click();
    };

    const downloadPdfReport = (report) => {
        const pdf = new jsPDF();

        // Add text content
        pdf.text(report.content, 10, 10);

        // Add additional details
        pdf.text(report.details, 10, 30);

        // Add chart as an image
        const chartImage = chartToImage();

        // Calculate the height of the text and add space for the chart
        const textHeight = pdf.getTextDimensions(report.content).h;
        const detailsHeight = pdf.getTextDimensions(report.details).h;
        const chartHeight = 75; // Adjust the height as needed
        const chartY = textHeight + detailsHeight + 40; // Add space below the text and details for the chart

        pdf.addImage(chartImage, 'PNG', 10, chartY, 190, chartHeight);

        // Save the PDF
        pdf.save(`${report.title}.pdf`);
    };


    return (
        <div>
            <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
                <NavBar isAuthenticated={true} userRole={"admin"} patientId={""} style={{ paddingRight: 0 }} />
            </div>

            <div style={containerStyle}>
                <h2 style={headerStyle}>Admin Reports</h2>
                <ul style={listStyle}>
                    {reports.map((report) => (
                        <li key={report.id} style={listItemStyle}>
                            <strong>{report.title}</strong>
                            <p>{report.content}</p>
                            <p>{report.details}</p>
                            <button style={buttonStyle} onClick={() => downloadTextReport(report)}>
                                Download as Text
                            </button>
                            <button style={buttonStyle} onClick={() => downloadPdfReport(report)}>
                                Download as PDF
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const containerStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '50px',
};

const headerStyle = {
    color: '#333',
    textAlign: 'center',
};

const listStyle = {
    listStyle: 'none',
    padding: '0',
};

const listItemStyle = {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column', // Display details below the title and content
    alignItems: 'flex-start', // Align content to the start
};

const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default AdminReportsPage;
