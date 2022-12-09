import React, { useState } from "react";

import { Link } from "react-router-dom";

import './Styles/Navbar.css'

export default function Navbar(pages) {
    const elements = pages.pages.map((pages) =>
        <Link to={pages.url}>
        {pages.name}
        </Link>
    );
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
            <div className="all">
                <div className="rings" />
                <div className={menuActive ? 'menu active' : 'menu'}>
                    <div className='header'>
                        {elements}
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