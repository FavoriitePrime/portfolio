import React from "react";
import { Link } from "react-router-dom";
import './List.css'

const List = function ({ pages, Width}) {
    const elements = pages.map((pages) =>
        <li className="list_Elements">
            <Link className="list_Elements" to={pages.url}>{pages.name}</Link>
        </li>
    );

    const Style = {
        width: Width
      };

    return (
        <>
            <ul className="list" style={Style}>
                {elements}
            </ul>
        </>
    )
}
export default List;