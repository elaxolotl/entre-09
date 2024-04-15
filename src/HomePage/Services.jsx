import React from "react";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { FaCalculator, FaTruck, FaBalanceScale, FaMoneyBill } from 'react-icons/fa';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArticleIcon from '@mui/icons-material/Article';
import BalanceIcon from '@mui/icons-material/Balance';
import SavingsIcon from '@mui/icons-material/Savings';
import './Services.css'

const ServicesList = [
  {
    name: "Comptabilité",
    description: "Gérer les dossiers financiers, y compris la préparation des états financiers.",
    icon: <CalculateIcon />
  },
  {
    name: "Logistique",
    description: "Solutions efficaces pour optimiser vos opérations administratives et relations avec l'administration tunisienne.",
    icon: <ArticleIcon />
  },
  {
    name: "Juridique",
    description: "Fournir un soutien juridique et des conseils sur divers aspects des opérations commerciales et de la conformité.",
    icon: <BalanceIcon />
  },
  {
    name: "Financier",
    description: "Offrir des services de conseil financier et une assistance dans la gestion des investissements et des actifs.",
    icon: <SavingsIcon />
  }
];
export default function Services(){
    return(
        <Container id="services">
            <h2>Nos services</h2>
            <div className="services-list">
            {ServicesList.map(function(item){
                return(
                    <Card className="service-card">
                        <span className="icon">{item.icon}</span>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </Card>
                )
            })}
            </div>
        </Container>
    )
}
