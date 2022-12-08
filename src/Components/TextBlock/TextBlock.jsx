import React from "react";
import './TextBlock.css'
const TextBlock = function ({Header, Text}) {
    Header = Header.slice(0, 16)
    return(
        <>  
            <div className="underline">
                <h2 className="blockHeader">{Header}</h2>
                <div className="Content">{Text}</div>
            </div>
        </>
    )
}

export default TextBlock