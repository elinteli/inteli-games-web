import React from 'react';
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
    return (
        <article class="main">
            <BrowserRouter>
                <header>
                    <div class="header">
                        <Link to="/" class="header__icon header__link" onClick={window.location.reload()}><img src={imgIcono} alt="Icono Inteli Games" /></Link>
                        <Link to="/novedades/" class="header__link" onClick={window.location.reload()}>Novedades</Link>
                        <Link to="/juegos/" class="header__link" onClick={window.location.reload()}>Juegos</Link>
                        <Link to="/contacto/" class="header__link" onClick={window.location.reload()}>Contacto</Link>
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

