import React from "react";
import { Link } from "react-router-dom";
import './List.css'

const List = function ({ list, Width, Height}) {
    console.log(list)
    const elements = list.map((list) =>
        <div className="list_Elements">
            <Link className="list_Elements" to={list.url}>{list.name}</Link>
        </div>
    );

    const Style = {
        width: Width,
        height: Height,
        backgroundSize: Width,Height
      };

    return (
        <>
            <div className="list" style={Style}>
                {elements}
            </div>
        </>
    )
}
export default List;