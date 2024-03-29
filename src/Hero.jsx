import React, { useEffect, useRef } from 'react';
import { FaChalkboardTeacher, FaUserTie  } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import './Hero.css'
import FancyText from '@carefully-coded/react-text-gradient';


export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        if (heroRef.current) {
            heroRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <div id="hero" style={{ marginTop: "50px" }} ref={heroRef}>
            <h1> À <FancyText
                    gradient={{ from: '#D4AF37', to: '#C25942', type: 'linear' }}
                    animate
                    animateDuration={1000}>
                    Votre
                </FancyText> manière.</h1>
            <p className="hero-description">Des solutions sur mesure pour la croissance et la réussite de votre entreprise en Tunisie ou dans la zone euro
            </p>
            <div id="hero-card">
                <h2>Comment puis-je aider?</h2>
                <div className="card-subset">
                    <div>
                        <span><FaChalkboardTeacher /><IoIosArrowForward /></span>
                        <p>je cherche un formateur</p>
                    </div>
                    <div>
                        <span><MdEventNote /><IoIosArrowForward /></span>
                        <p>je cherche de l'assistance</p>
                    </div>
                    <div>
                        <span><FaUserTie /><IoIosArrowForward /></span>
                        <p>je cherche un consultant</p>
                    </div>
                </div>
            </div>
        </div>
    )
}