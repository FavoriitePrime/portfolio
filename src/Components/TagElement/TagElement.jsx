import React from "react";
import './TagElement.css'

const TagElement = function({Text}){
    return(
        <>
            <div className="TagElement">
                <div>
                    {Text}
                </div>
            </div>
        </>
    )
}

export default TagElement;