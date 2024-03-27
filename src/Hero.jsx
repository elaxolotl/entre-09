import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdEventNote } from "react-icons/md";

export default function Hero() {
    return (
        <div id="hero" style={{ marginTop: "50px" }}>
            <h1>Have it your way</h1>
            <p>Tailor-made solutions for the growth and success
                of your business established in Tunisia or the Eurozone
            </p>
            <div id="hero-card">
                <h2>How can I help</h2>
                <div className="card-subset">
                    <div>
                        <FaChalkboardTeacher /><IoIosArrowForward />
                        <p>I'm looking for a trainer</p>
                    </div>
                    <div>
                        <MdEventNote /><IoIosArrowForward />
                        <p>I'm looking for assistance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}