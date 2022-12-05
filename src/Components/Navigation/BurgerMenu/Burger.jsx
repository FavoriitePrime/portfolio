import React from "react";
import './Styles/Burger.css'

export default function Burger({setMenuActive, menuActive}) {
    return (
        <button className="burger-btn" 
        onClick={()=> setMenuActive(!menuActive)}>
            <span />
        </button>
    )
}