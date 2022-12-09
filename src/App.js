import React from "react";

import { Home } from './Pages/Home/Home.jsx'

import Navbar from "./Components/Navigation/Navbar.jsx";

import './App.css'

import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const pages = [
    { name: 'Главная', Element: '<Home/>', url: '' },
    { name: 'Обо мне', Element: '', url: '/aboutMe' },
    { name: 'Моё \n образование' , Element: '' , url: '' },
    { name: 'что то' , Element: '' , url: '' },
  ];

  return (
    <main>
      <Navbar pages={pages}>
      </Navbar>
      <Routes>
        <Route path="/aboutMe">
        </Route>
        <Route path="/users">
        </Route>
        <Route exact path="" element={<Home pages={pages} />}>
        </Route>
      </Routes>
    </main>
  );
}