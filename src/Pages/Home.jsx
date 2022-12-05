import React from "react";
import TextBlock from "../Components/TextBlock";
import ListElement from "../Components/ListElement";
import './Styles/Default.css'

const Home = function () {
    return (
        <>
            <main className="Page">
                <ListElement/>
                <TextBlock Header={'Здравствуйте'} 
                Text={'Я Максим Попов мне 19 лет'} />
            </main>
        </>
    )
}

export { Home };