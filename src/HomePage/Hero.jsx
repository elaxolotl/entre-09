import React, { useEffect, useRef } from 'react';
import { FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import './Hero.css'
import FancyText from '@carefully-coded/react-text-gradient';
import { Link } from 'react-router-dom';


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
                animateDuration={1000}
                className='hero-gradient'>
                Votre
            </FancyText> manière.</h1>
            <p className="hero-description">Des solutions sur mesure pour la croissance et la réussite de votre entreprise en Tunisie ou dans la zone euro
            </p>
            <div id="hero-card">
                <h2>Comment puis-je aider?</h2>
                <div className="card-subset">
                    <div>
                        <Link to="/training">
                            <span><FaChalkboardTeacher /><IoIosArrowForward /></span>
                            <p className='hero-card-desc'>je cherche un formateur</p>
                        </Link>
                    </div>
                    <div>

                        <Link to="/assistance">
                            <span><MdEventNote /><IoIosArrowForward /></span>
                            <p>je cherche de l'assistance</p>
                        </Link>                        
                    </div>
                    <div>
                        <Link to="/consulting">
                            <span><FaUserTie /><IoIosArrowForward /></span>
                            <p>je cherche un consultant</p>
                        </Link>                        
                    </div>
                </div>
            </div>
        </div>
    )
}