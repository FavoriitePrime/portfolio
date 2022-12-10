import React from "react";

import { Main } from "./Pages/Main/Main.jsx";
import { Unity } from "./Pages/Unity/Unity";
import { ReactP } from "./Pages/React/React";
 
import {
    Routes,
    Route,
} from "react-router-dom";
import { Blender } from "./Pages/Blender/Blender.jsx";

const Projects = function () {
    return (
        <>
            <main>
                    <Routes>
                        <Route exact path="/" element={<Main />} />
                        <Route exact path="/Unity" element={(<Unity />)} />
                        <Route exact path="/React" element={(<ReactP />)} />
                        <Route exact path="/Blender" element={(<Blender />)} />
                    </Routes>
            </main>
        </>
    )
}

export { Projects };