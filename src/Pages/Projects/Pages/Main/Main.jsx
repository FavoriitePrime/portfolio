import React from "react";

import List from "../../../../Components/List/List"
import TagElement from "../../../../Components/TagElement/TagElement";

import '../../../Default.css'
import './Main.css'

const Main = function () {
    const list = [
        { name: 'Unity', Element: '<Unity/>', url: '/Projects/Unity' },
        { name: 'Blender', Element: '<Blender/>', url: '/Projects/Blender' },
        { name: 'React', Element: '<React/>', url: '/Projects/React' },
    ]
    return (
        <>
            <main className="Page">
                <TagElement Text={'Мои проекты'} />
                <div className="wraper">
                    <List list={list} Width="525px" Height="600px" />
                </div>
                <hr className="BottomUnderLine" />
            </main>
        </>
    )
}

export { Main };