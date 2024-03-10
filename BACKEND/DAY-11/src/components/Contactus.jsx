// import React from 'react';
import "../assets/css/ContactUs.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function ContactUs() {
    return (
        <div className="contact-us-container">
            <Navbar />
            <Sidebar />
            <div className="contact-box">
                <h2>Email</h2>
                <p>rookiechessacademy@example.com</p>
            </div>
            <div className="contact-box">
                <h2>Phone Number</h2>
                <p>8579964852</p>
            </div>
            <div className="contact-box">
                <h2>Twitter</h2>
                <p>@rookie_twitter</p>
            </div>
        </div>
    );
}

export default ContactUs;
