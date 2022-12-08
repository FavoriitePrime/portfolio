import React from "react";
import './CircleImage.css'

const CircleImage = function ({ Url }) {
    return (
        <>
            <div src={Url} alt="None" className="dot">
                <div className="Image"></div>
            </div>
        </>
    )
}

export { CircleImage };