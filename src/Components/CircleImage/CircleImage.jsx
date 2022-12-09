import React from "react";
import './CircleImage.css'

const CircleImage = function ({ Url }) {
    const style = {
        backgroundImage: `url(${Url})`
    }
    return (
        <>
            <div alt="None" className="dot">
                <div style={style} className="Image"></div>
            </div>
        </>
    )
}

export default CircleImage ;