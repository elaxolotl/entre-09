import React from "react";
import { FaChalkboardTeacher, FaUserTie  } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import './Hero.css'
import FancyText from '@carefully-coded/react-text-gradient';


export default function Hero() {
    return (
        <div id="hero" style={{ marginTop: "50px" }}>
            <h1>Have it <FancyText
                    gradient={{ from: '#D4AF37', to: '#C25942', type: 'linear' }}
                    animate
                    animateDuration={1000}>
                    your
                </FancyText> way.</h1>
            <p className="hero-description">Tailor-made solutions for the growth and success
                of your business established in Tunisia or the Eurozone
            </p>
            <div id="hero-card">
                <h2>How can I help?</h2>
                <div className="card-subset">
                    <div>
                        <span><FaChalkboardTeacher /><IoIosArrowForward /></span>
                        <p>I'm looking for a trainer</p>
                    </div>
                    <div>
                        <span><MdEventNote /><IoIosArrowForward /></span>
                        <p>I'm looking for assistance</p>
                    </div>
                    <div>
                        <span><FaUserTie /><IoIosArrowForward /></span>
                        <p>I'm looking for a consultant</p>
                    </div>
                </div>
            </div>
        </div>
    )
}