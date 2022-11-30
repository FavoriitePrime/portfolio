import React from "react";

import { CircleImage } from './Components/CircleImage.jsx'
import { Home } from './Pages/Home.jsx'

import './Components/Styles/Header.css'
import './Components/Styles/Main.css'

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <main>
      <header className="background">
        <div className="rings">fds</div>
          <nav className="navigation">
            <div className="bookmark"><Link to="/">Home</Link></div>
            <div className="bookmark"><Link to="/about">About</Link></div>
            <div className="bookmark"><Link to="/users">Users</Link></div>
          </nav>
      </header>
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