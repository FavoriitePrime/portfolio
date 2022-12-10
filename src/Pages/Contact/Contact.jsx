import React from "react";
import ContactCard from "../../Components/TextBlock/ContactCard";

import TagElement from "../../Components/TagElement/TagElement";

import '../Default.css'
import './Contact.css'

const Contact = function ({ pages }) {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Контакты'} />
                <div className="wraper">
                    <ContactCard
                        GitHub={'https://github.com/FavoriitePrime'}
                        Telephone={'8(968)706-03-49'}
                        Email={'manhunt055@gmail.com'}
                        Width="50%"
                    />
                </div>
            </main>
        </>
    )
}

export { Contact };