import React from "react";
import './CircleImage.css'

const CircleImage = function ({ Url , size}) {
    const style = {
        width: size,
        height: size,
    }
    const image = {
        backgroundImage: `url(${Url})`,
    }
    return (
        <>
            <div style={style} alt="None" className="dot">
                <div style={image} className="Image"></div>
            </div>
        </>
    )
}

export default CircleImage ;