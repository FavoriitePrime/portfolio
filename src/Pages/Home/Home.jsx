import React from "react";

import TextBlock from "../../Components/TextBlock/TextBlock";
import TagElement from "../../Components/TagElement/TagElement";

import '../Default.css'
import './Home.css'

const Home = function () {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Text'} />
                <div className="wraper">
                    <TextBlock Header={'Здравствуйте'}
                        Text={
                            "Я Максим Попов мне 19 лет\n" +
                            "и бла бла бла \n" +
                            "Какая то строка\n\n\n\n\n\n\n\n\n"
                        }
                    />
                </div>
            </main>
        </>
    )
}

export { Home };