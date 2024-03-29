import React from "react";
import './Clients.css'

export default function Clients() {
    return (
        <div id="clients">
            <div className="header">
                <div class="hr-line"></div> 
                <h1>Clients</h1>
                <div className="hr-line"></div>
            </div>
            <div className="client-list">
                <img src="https://humanrightsconnected.org/wp-content/uploads/2019/03/org_logo_internationalfederationforhumanrightsfidh.jpg" alt="FIDH" />
                <img src="https://media.licdn.com/dms/image/C4D03AQGh-PicqxHHUA/profile-displayphoto-shrink_800_800/0/1626432610361?e=2147483647&v=beta&t=IRhvHbYX8JSQnojrtfj3Z1siQZ_Nos9DAgN9Qswbg5s" alt="FormaPole" />
            </div>
        </div>
    )
}