import React from "react";

import TextBlock from "../../Components/TextBlock/TextBlock";
import TagElement from "../../Components/TagElement/TagElement";
import CircleImage from "../../Components/ImageComponent/CircleImage";

import image from '../../Images/MyPhoto.jpg'

import '../Default.css'
import './Home.css'

const Home = function ({ pages }) {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Главная'} />
                <div className="wraper">
                    <CircleImage Url={image} size="600px" />
                    <TextBlock
                        Header={'Здравствуйте'}
                        Text=
                        {
                            "Я Максим Попов мне 19 лет\n" +
                            "и бла бла бла \n" +
                            "Какая то строка\n\n"
                        }
                        Width='800px'
                        Height='600px'
                    />
                </div>
                <hr className="BottomUnderLine" />
            </main>
        </>
    )
}

export { Home };