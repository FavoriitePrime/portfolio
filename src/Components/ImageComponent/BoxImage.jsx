import React from "react";
import './Image.css'

const CircleImage = function ({ Url , width, height}) {
    const style = {
        width: width,
        height: height,
    }
    const image = {
        backgroundImage: `url(${Url})`,
    }
    return (
        <>
            <div style={style} alt="None" className="box">
                <div style={image} className="Image"></div>
            </div>
        </>
    )
}

export default CircleImage ;