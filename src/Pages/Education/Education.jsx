import React from "react";

import TagElement from "../../Components/TagElement/TagElement";
import TextBlock from "../../Components/TextBlock/TextBlock";
import BoxImage from "../../Components/ImageComponent/BoxImage";

import KMB from '../../Images/KMB.jpg'

import '../Default.css'
import './Education.css'

const Education = function () {
    return (
        <>
            <main className="Page">
                <TagElement Text={'Моё образование'} />
                <div className="wraper">
                    <BoxImage
                        Url={KMB}
                        width={'500px'}
                        height={'300px'}
                    />
                    <TextBlock
                        Width={'800px'}
                        Height="500px"
                        Header={'КМБ№4'}
                        Text=
                        {
                            "Колледж маллого бизнеса №4 на дубининской \n" +
                            "Специальность: Программист техник \n" +
                            "Диплом: Пурпурный" 
                            

                        }
                    />
                </div>
                {/* <div className="wraper">
                    <BoxImage
                        width={'500px'}
                        height={'300px'}
                    />
                    <TextBlock
                        Width={'800px'}
                        Header={''}
                    />
                </div> */}
                <hr className="BottomUnderLine" />
            </main>
        </>
    )
}

export { Education };