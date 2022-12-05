import React, { useState } from "react";

import { Link } from "react-router-dom";

import './Styles/Header.css'

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
            <div className="all">
                <div className="rings" />
                <div className={menuActive ? 'menu active' : 'menu'}>
                    <div className='header'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/users">Users</Link>
                    </div>
                    <button className="burger-btn"
                        onClick={() => setMenuActive(!menuActive)}>
                        <span />
                    </button>
                </div>
            </div>
        </>
    )
}