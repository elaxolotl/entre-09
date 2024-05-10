import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './AboutUs.css'
import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa6";


function Header() {
  return (
    <div className="header">
      <h1>À propos de nous</h1>
      <p>
        Bienvenue chez entre09, votre partenaire
        de confiance pour le développement et la
        croissance de votre entreprise. Nous vous
        offrons des solutions personnalisées pour
        répondre à vos besoins spécifiques
      </p>
    </div>
  )
}

function WhyUs() {
  return (
    <Accordion defaultActiveKey="0" className="accordion" style={{margin: '1vh 70vh'}} >
      <Accordion.Item eventKey="0">
        <Accordion.Header ><h2>Pourquoi nous?</h2> </Accordion.Header>
        <Accordion.Body>
          <p style={{margin: '0vh', opacity:'0.7'}}>Nous sommes déterminés à fournir des services de haute qualité, à offrir un soutien exceptionnel à nos clients et à garantir leur succès à long terme  </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

function Quote() {
  return (
    <div id="quote">
      <div>
      <FaQuoteLeft className="icon" />
        <p>
          Notre entreprise « Entre 09 » travaille activement au développement du niveau d'activité économique en Tunisie
          en accordant une importance particulière à l'assistance juridique, comptable et fiscale. Celle-ci est considérée
          comme un élément essentiel pour accroître la valeur ajoutée des entreprises, startups et associations, en particulier
          celles œuvrant dans la défense des droits de l'homme et des groupes vulnérables. Nous cherchons ainsi à créer une synergie
          entre le droit à la réalisation d'un profit financier et l'engagement en faveur de nobles valeurs humaines.
          Par ailleurs, « Entre 09 » attache une grande importance à la création d'une relation constructive entre le Nord et le Sud
          de la méditerrané afin d'apporter une valeur ajoutée tant sur le plan matériel qu'humanitaire aux deux rives.
        </p><FaQuoteRight className="icon" style={{marginLeft:'70vw', opacity:'0.7'}}/>
      </div>
      <div>
        <img src="/about-me-img-page.png" />
        <h3>Radhouane Sfaxi</h3>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <div id="about-page">
      <Header />
      <WhyUs />
      <Quote />
    </div>
  )
}