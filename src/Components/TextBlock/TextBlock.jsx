import React from "react";
import './TextBlock.css'
const TextBlock = function ({ Header, Text, Width, Height }) {
    if (Header.length !== 0) {
        Header = Header.slice(0, 16)
    }

    const style = {
        width: Width,
        height: Height
    }
    return (
        <>
            <div className="underline" style={style}>
                <h2 className="blockHeader">{Header}</h2>
                <div className="Content">{Text}</div>
            </div>
        </>
    )
}

export default TextBlock