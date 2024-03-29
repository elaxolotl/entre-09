import React from "react";
import './Trainings.css';
import { FaCalculator, FaTruck, FaBalanceScale, FaMoneyBill } from 'react-icons/fa';


const ServicesList = [
    {
      name: "Comptabilité",
      description: "Gérer les dossiers financiers, y compris la préparation des états financiers.",
      icon: <FaCalculator />
    },
    {
      name: "Logistique",
      description: "Solutions efficaces pour optimiser vos opérations administratives et relations avec l'administration tunisienne.",
      icon: <FaTruck />
    },
    {
      name: "Juridique",
      description: "Fournir un soutien juridique et des conseils sur divers aspects des opérations commerciales et de la conformité.",
      icon: <FaBalanceScale />
    },
    {
      name: "Financier",
      description: "Offrir des services de conseil financier et une assistance dans la gestion des investissements et des actifs.",
      icon: <FaMoneyBill />
    }
  ];

export default function Trainings(){
    return(
        <div id="trainings">
            <h1>Consulting</h1>
            <p>Conseils avisés pour prendre des décisions éclairées pour la croissance de votre entreprise</p>
            <div className="services-list">
            {ServicesList.map(function(item){
                return(
                    <div className="service-card">
                        <span className="icon">{item.icon}</span>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}