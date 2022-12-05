import React from "react";

import { CircleImage } from './Components/CircleImage.jsx'
import { Home } from './Pages/Home.jsx'
import Navbar from "./Components/Navigation/Navbar.jsx";


import './Components/Styles/Main.css'

import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <main>
      <Navbar>
      </Navbar>
      <Routes>
        <Route path="/about" element={<CircleImage />}>
        </Route>
        <Route path="/users">
        </Route>
        <Route exact path="" element={<Home />}>
        </Route>
      </Routes>
    </main>
  );
}