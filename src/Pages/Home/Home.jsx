import React from "react";

import TextBlock from "../../Components/TextBlock/TextBlock";
import TagElement from "../../Components/TagElement/TagElement";
import List from "../../Components/List/List.jsx";

import '../Default.css'
import './Home.css'

const Home = function ({ pages }) {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Главная'} />
                <div className="wraper">
                    <TextBlock
                        Header={'Здравствуйте'}
                        Text=
                        {
                            "Я Максим Попов мне 19 лет\n" +
                            "и бла бла бла \n" +
                            "Какая то строка\n\n\n\n\n\n\n\n\n"
                        }
                        Width='800px'
                    />
                    <List pages={pages} Width="525px" />
                </div>
            </main>
        </>
    )
}

export { Home };