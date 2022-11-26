import React from "react";
import Header from "./Header";
import Circle from "./Circle";
import './Styles/Body.css';

const Body = function () {
    return (
        <div className="App">
            
            <Header></Header>

            <div className="Circle">
                <Circle></Circle>
            </div>

        </div>
    )
}

export default Body;