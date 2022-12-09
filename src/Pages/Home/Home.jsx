import React from "react";

import TextBlock from "../../Components/TextBlock/TextBlock";
import TagElement from "../../Components/TagElement/TagElement";

import image from '../../Images/Cat.png'

import '../Default.css'
import './Home.css'
import CircleImage from "../../Components/CircleImage/CircleImage";

const Home = function ({ pages }) {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Главная'} />
                <div className="wraper">
                    <CircleImage Url={image}/>
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
                </div>
                <hr className="BottomUnderLine"/>
            </main>
        </>
    )
}

export { Home };