import React from "react";
import './Footer.css'
import ServicesList from "./ServicesList";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



function Newsletter() {
    return (
        <div className="newsletter">
            <div>
                <h3>subscribe to our newsletter</h3>
                <p>get our latest news and offers </p>
            </div>
            <div>
                <form>
                    <input type="email" placeholder="your email" />
                    <button>Sign me up</button>
                </form>
            </div>
        </div>
    )
}

function Content() {
    return (
        <div className="content">
            <div>
                <img src="./logo-b&w.svg" />
            </div>
            <div>
                <h5>our services</h5>
                {ServicesList.map(function (item) {
                    return (
                        <div>
                            <a><p>{item}</p></a>
                        </div>
                    )
                })}
            </div>
            <div>
                <h5>our clients</h5>
                <a><p>fidh</p></a>
                <a><p>FormaPole</p></a>
            </div>
            <hr></hr>
        </div>

    )
}

function Bottom() {
    return (
        <>
            <hr></hr>
            <div className="bottom">
                <div>
                    <p>© 2024  entre09. All rights reserved</p>
                </div>
                <div className="icons">
                    <SiGmail/><FaFacebook style={{marginLeft:"2vh"}}/>
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