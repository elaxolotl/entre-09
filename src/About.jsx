import React from "react";
import { GoGoal } from "react-icons/go";

function About1(){
    return(
        <div>
            <GoGoal />
        </div>
    )
}

function About2(){
    return(
        <div>
            <GoGoal />
        </div>
    )
}

export default function About(){
    return(
        <div id="about">
            <h1>Who am I</h1>
            <p>entre09 est votre partenaire
                de confiance pour le développement
                et la croissance de votre entreprise
            </p>
            <div className="about-me">
                <About1/>
                <About2/>
                <img/>
            </div>
        </div>
    )
}