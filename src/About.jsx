import React from "react";
import { GoGoal } from "react-icons/go";
import './About.css'
import { IoIosArrowForward, IoMdSchool } from "react-icons/io";


function About1() {
    return (
        <div className="about-card">
            <div className="icon">
                <GoGoal />
            </div>
            <div className="text">
                <h4>My goals</h4>
                <p>
                    entre09 is committed to providing high quality services, providing exceptional support to our customers and ensuring their long-term success
                </p>
                <p id="link">see more about us<IoIosArrowForward /></p>
            </div>
        </div>
    )
}

function About2() {
    return (
        <div className="about-card">
            <div className="icon">
                <IoMdSchool />
            </div>
            <div className="text">
                <h4>My background</h4>
                <p> I have a rich experience in finance, accounting and logistics and I am dedicated to delivering top-tier support to ensure the long-term success of my clients.
                </p>
                <p id="link">see my resume<IoIosArrowForward /></p>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div id="about">
            <h1>Who am I</h1>
            <p>entre09 is your trusted partner for the development and growth of your business
            </p>
            <div className="about-me">
                <div className="about-me-text">
                    <About1 className="about1" />
                    <About2 className="about2" />
                </div>
                <div className="about-me-image"><img src="/public/about-me-img.png" />
                </div>
            </div>
        </div>
    )
}