import React from "react";

import TagElement from "../../Components/TagElement/TagElement";
import List from "../../Components/List/List.jsx"

import '../Default.css'
import './Projects.css'

const Projects = function ({ pages }) {
    const list = [
        { name: 'Unity', Element: '<Unity/>', url: '/Unity' },
        { name: 'Blender', Element: '<Blender/>', url: '/Blender' },
        { name: 'React', Element: '<React/>', url: '/React' },
    ]

    return (
        <>
            <main className="Page">
                <TagElement Text={'Мои проекты'} />
                <div className="wraper">
                    <List list={list} Width="525px" Height="600px"/>
                </div>
                <hr className="BottomUnderLine"/>
            </main>
        </>
    )
}

export { Projects };