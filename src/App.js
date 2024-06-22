import React from 'react';
import { useEffect } from 'react';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Inicio';
import Noticia from './Noticia';
import Contacto from './Contacto';
import Juegos from './Juegos';
import Novedades from './Novedades';
import NotFound from './NotFound';
import imgIcono from './img/icono.png';

// Componente principal de la aplicación
export default function App() {
    useEffect(() => {
        document.querySelector(".header").addEventListener("click", function () {
            window.scroll(0, 0);
        });
        document.querySelector(".header-movil").addEventListener("click", function () {
            document.querySelector(".header-movil").classList.remove("true");
            document.getElementById("menu-btn-input").checked = false;
        });
        document.getElementById("menu-btn-input").addEventListener("change", function () {
            if (document.getElementById("menu-btn-input").checked) {
                document.querySelector(".header-movil").classList.add("true");
            }
            else {
                document.querySelector(".header-movil").classList.remove("true");
            }
        });
    })
    return (
        <article class="main">
            <BrowserRouter>
                <header>
                    <div class="header">
                        <Link to="/" class="header__icon header__link"><img src={imgIcono} alt="Icono Inteli Games" /></Link>
                        <Link to="/novedades/" class="header__link">Novedades</Link>
                        <Link to="/juegos/" class="header__link">Juegos</Link>
                        <Link to="/contacto/" class="header__link">Contacto</Link>
                        <label class="menu-btn" for="menu-btn-input">
                            <input id="menu-btn-input" type="checkbox" class="hidden" />
                                <span class="menu-btn__uno"></span>
                                <span class="menu-btn__dos"></span>
                                <span class="menu-btn__tres"></span>
                        </label>
                    </div>
                    <div class="header-movil">
                        <Link to="/novedades/" class="header-movil__link">Novedades</Link>
                        <Link to="/juegos/" class="header-movil__link">Juegos</Link>
                        <Link to="/contacto/" class="header-movil__link">Contacto</Link> 
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/articulo/:nombre" element={<Noticia />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/juegos" element={<Juegos />} />
                    <Route path="/novedades" element={<Novedades />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <footer class="footer">
                <p>
                    {new Date().getFullYear()} Inteli Games. Todos los derechos
                    reservados
                </p>
            </footer>
        </article>
    );
}

