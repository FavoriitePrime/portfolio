import React from "react";

import TagElement from "../../Components/TagElement/TagElement";
import TextBlock from "../../Components/TextBlock/TextBlock";

import '../Default.css'
import './Contact.css'

const Contact = function ({ pages }) {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Контакты'} />
                <div className="wraper">
                    <TextBlock 
                    Width={'1200px'} 
                    Height={'650px'} 
                    Header={'Slice'}
                    Text={'Номер телефона'}
                    />
                </div>
                <hr className="BottomUnderLine"/>
            </main>
        </>
    )
}

export { Contact };