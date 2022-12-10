import React from "react";

import { Home } from './Pages/Home/Home.jsx'
import { Education } from "./Pages/Education/Education.jsx"
import { Contact } from "./Pages/Contact/Contact.jsx";
import { Projects } from "./Pages/Projects/Projects.jsx";

import Navbar from "./Components/Navigation/Navbar.jsx";

import './App.css'

import {
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const pages = [
    { name: 'Главная', Element: '<Home/>', url: '' },
    { name: 'Моё \n образование' , Element: '<Education />' , url: '/Education' },
    { name: 'Мои \n проекты', Element: '', url: '/Projects' },
    { name: 'Контакты', Element: '', url: '/Contact' },
  ];

  return (
    <main>
      <Navbar pages={pages}>
      </Navbar>
      <Routes>
      <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route exact path="" element={<Home pages={pages} />}/>
      </Routes>
    </main>
  );
}