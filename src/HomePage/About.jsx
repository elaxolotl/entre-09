import React from "react";
import { GoGoal } from "react-icons/go";
import './About.css'
import { IoIosArrowForward, IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";


function About1() {
    return (
        <div className="about-card">
            <div className="icon">
                <GoGoal />
            </div>
            <div className="text">
                <h4>Mes objectifs</h4>
                <p>
                entre09 s'engage à fournir des services de haute qualité, à apporter un accompagnement exceptionnel à nos clients et à assurer leur succès à long terme.</p>
                <Link to="/about" style={{color:'#454545'}}><p id="link">en savoir plus sur nous<IoIosArrowForward /></p></Link>
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
                <h4>Mon parcours</h4>
                <p> Je possède une riche expérience en finance, comptabilité et logistique et je m'engage à fournir un accompagnement de haut niveau pour assurer le succès à long terme de mes clients.
                </p>
                <p id="link">voir mon CV<IoIosArrowForward /></p>
            </div>  
        </div>
    )
}

export default function About() {
    return (
        <div id="about">
            <h1>Qui suis je?</h1>
            <p>entre09 est votre partenaire de confiance pour le développement et la croissance de votre entreprise
            </p>
            <div className="about-me">
                <div className="about-me-text">
                    <About1 className="about1" />
                    <About2 className="about2" />
                </div>
                <div className="about-me-image"><img src="/public/about-me-img.jpg" />
                </div>
            </div>
        </div>
    )
}