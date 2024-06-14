import React from 'react';
import imgIcono from './img/icono.png';


export default function Contacto() {
    return <article class="main">
        <header>
            <div class="header">
                <a href="/" class="header__icon"><img src={imgIcono} alt="Icono Inteli Games" /></a>
                <a href="/novedades/">Novedades</a>
                <a href="/juegos/">Juegos</a>
                <a href="./">Contacto</a>
            </div>
        </header>
        <section class="contacto">
            <div class="contacto__block1">
                <h1>Contacto</h1>
                <form class="contacto__form" action="https://formsubmit.co/creaciones.inteli@gmail.com" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_autoresponse" value="¡Gracias por contactarnos!" />
                    <input class="contacto__input" type="text" name="Asunto" id="Asunto" placeholder="Título" required />
                    <input class="contacto__input" type="text" name="Nombre" id="Nombre" placeholder="Nombre" required />
                    <input class="contacto__input" type="email" name="email" id="email" placeholder="Email" required />
                    <textarea class="contacto__textarea" name="Mensaje" id="Mensaje" placeholder="Escríbeme tu mensaje" required></textarea>
                    <input class="contacto__input--submit" id="submit-button" type="submit" value="Enviar Mensaje" />
                </form>
            </div>
        </section>
        <footer class="footer">
            <p>
                {new Date().getFullYear()} Inteli Games. Todos los derechos
                reservados
            </p>
        </footer>
    </article>
}