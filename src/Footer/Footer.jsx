import React from "react";
import './Footer.css'
import ServicesList from "../ServicesList";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



function Newsletter() {
    return (
        <div className="newsletter">
            <div>
                <h3>abonnez-vous à notre bulletin d'information</h3>
                <p>obtenez nos dernières actualités et offres</p>
            </div>
            <div>
                <form>
                    <input type="email" placeholder="votre adresse e-mail" />
                    <button>Inscrivez-moi</button>
                </form>
            </div>
        </div>
    )
}

function Content() {
    return (
        <div className="content">
            <div>
                <img src="./logo-b&w.svg" alt="Logo" />
            </div>
            <div>
                <h5>nos services</h5>
                {ServicesList.map(function (item, index) {
                    return (
                        <div key={index}>
                            <a><p>{item}</p></a>
                        </div>
                    )
                })}
            </div>
            <div>
                <h5>nos clients</h5>
                <a><p>fidh</p></a>
                <a><p>FormaPole</p></a>
            </div>
            <hr></hr>
        </div>)
}
function Bottom() {
    return (
        <>
            <hr></hr>
            <div className="bottom">
                <div>
                    <p>© 2024 entre09 | All Rights Reserved.</p>
                </div>
                <div className="icons">
                    <SiGmail /><FaFacebook style={{ marginLeft: "2vh" }} />
                </div>
            </div>
        </>
    )
}

export default function Footer() {
    return (
        <footer>
            <Newsletter />
            <Content />
            <Bottom />
        </footer>
    )
}