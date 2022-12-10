import React from "react";
import './TextBlock.css'
const ContactCard = function ({ Telephone, Email, GitHub, Width, Height }) {

    const style = {
        width: Width,
        height: Height
    }
    return (
        <>
            <div className="underline" style={style}>
                <h2 className="Contacts">Телефон:
                    <a href={"tel:" + Telephone}>
                        {Telephone}
                    </a>
                </h2>
                <h2 className="Contacts">Почта:
                    <a href={"mailto:" + Email}>
                        {Email}
                    </a>
                </h2>
                <h2 className="Contacts">GitHub:
                    <a href={GitHub} >
                        {GitHub}
                    </a>
                </h2>
            </div>
        </>
    )
}

export default ContactCard