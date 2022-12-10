import React from "react";

import TextBlock from "../../Components/TextBlock/TextBlock";
import TagElement from "../../Components/TagElement/TagElement";
import CircleImage from "../../Components/CircleImage/CircleImage";

import image from '../../Images/Cat.png'

import '../Default.css'
import './Home.css'

const Home = function ({ pages }) {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Главная'} />
                <div className="wraper">
                    <CircleImage Url={image} size="500px" />
                    <TextBlock
                        Header={'Здравствуйте'}
                        Text=
                        {
                            "Я Максим Попов мне 19 лет\n" +
                            "и бла бла бла \n" +
                            "Какая то строка\n\n"
                        }
                        Width='500px'
                        Height='500px'
                    />
                </div>
                <hr className="BottomUnderLine" />
            </main>
        </>
    )
}

export { Home };