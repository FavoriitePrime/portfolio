import React from "react";

import TagElement from "../../Components/TagElement/TagElement";
import TextBlock from "../../Components/TextBlock/TextBlock";
import CircleImage from "../../Components/CircleImage/CircleImage";

import '../Default.css'
import './Education.css'

const Education = function ({ pages }) {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Моё образование'} />
                <div className="wraper">
                    <CircleImage size={'300px'}/>
                    <TextBlock Width={'800px'} Header={'Slice'}/>
                </div>
                <div className="wraper">
                    <CircleImage size={'300px'}/>
                    <TextBlock Width={'800px'} Header={'Slice'}/>
                </div>
                <hr className="BottomUnderLine"/>
            </main>
        </>
    )
}

export { Education };