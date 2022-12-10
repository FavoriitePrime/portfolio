import React from "react";

import TagElement from '../../../../Components/TagElement/TagElement'
import GoBackButton from '../../../../Components/GoBackButton/GoBackButton'
import TextBlock from '../../../../Components/TextBlock/TextBlock'
import BoxImage from '../../../../Components/ImageComponent/BoxImage'

import '../../../Default.css'
import './React.css'

const ReactP = function () {
    return (
        <>
            <main className="Page">
                <div className='container'>
                    <GoBackButton />
                    <TagElement Text={'React'} />
                </div>
                <div className='container'>
                    <BoxImage
                        width="30%"
                        height="700px"
                    />
                    <div className='containerv'>
                        <TextBlock
                            Header={'React'}
                            Width="100%"
                            Height="400px"
                        />
                        <BoxImage
                            width='100%'
                            height='250px'
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export { ReactP };