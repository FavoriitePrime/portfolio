import React from "react";

import { Home } from './Pages/Home/Home.jsx'

import Navbar from "./Components/Navigation/Navbar.jsx";

import './App.css'

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
        <Route path="/about">
        </Route>
        <Route path="/users">
        </Route>
        <Route exact path="" element={<Home />}>
        </Route>
      </Routes>
    </main>
  );
}