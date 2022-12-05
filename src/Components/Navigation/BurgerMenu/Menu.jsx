import React from "react";
import { Link } from "react-router-dom";
import './Styles/Menu.css'

export default function Menu({header, items, setActive, menuActive }) {
    return (
        <div className={menuActive ? 'menu active' : 'menu'}>
            <div className="blur"></div>
            <div className="menu_content">
                <div className="menu_header">{header}</div>
                <ul>
                    {items.map(item =>
                        <li>
                            <Link to={item.href}>{item.value}</Link>
                        </li>
                        )}
                </ul>
            </div>
        </div>
    )
}