import React from "react";
import './Styles/Header.css'

const Header = function () {
    return (
        <div className="App">
            <div className="header">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Header;