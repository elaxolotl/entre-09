import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tarifs.css'

export default function Tarifs() {
    return (
        <div id="tarif">
            <h1>Tarifs</h1>
            <Tabs
                defaultActiveKey="s&at"
                className="tabs"
                variant="pills"
            >
                <Tab eventKey="s&at" title="Société & Associations Tunisienne" className="tab-element">
                    <h3 className="price">250 TND</h3>
                    <p className="price-description">Jour/Homme en HT</p>
                </Tab>
                <Tab eventKey="s&ajt" title="Startup & Association des Jeunes Tunisienne" className="tab-element">
                    <h3 className="price">150 TND</h3>
                    <p className="price-description">Jour/Homme</p>
                </Tab>
                <Tab eventKey="sze" title="Société Zone Euro" className="tab-element">
                    <h3 className="price">120 TND</h3>
                    <p className="price-description">Jour/Homme</p>
                </Tab>
                <Tab eventKey="aze" title="Associations Zone Euro" className="tab-element">
                    <h3 className="price">100 TND</h3>
                    <p className="price-description">Jour/Homme</p>
                </Tab>
            </Tabs>
        </div>
    );
}
