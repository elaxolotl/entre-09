import React from "react";
import './Services.css'
import { FaCalculator, FaTruck, FaBalanceScale, FaMoneyBill } from 'react-icons/fa';

const ServicesList = [
  {
    name: "Accounting",
    description: "Handle financial records, including the preparation of financial statements.",
    icon: <FaCalculator />
  },
  {
    name: "Logistics",
    description: "Manage the transportation and storage of goods, ensuring efficient supply chain operations.",
    icon: <FaTruck />
  },
  {
    name: "Jurdical",
    description: "Provide legal support and advice on various matters related to business operations and compliance.",
    icon: <FaBalanceScale />
  },
  {
    name: "Financial",
    description: "Offer financial advisory services and assistance in managing investments and assets.",
    icon: <FaMoneyBill />
  }
];
export default function Services(){
    return(
        <div id="services">
            <h2>Our services</h2>
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