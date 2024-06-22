import React from 'react';
import { useEffect } from 'react';
import images from './utils/importImages';
import articulos from './utils/importArticulos';


export default function NotFound() {
    useEffect(() => {
        document.title = "Página no encontrada (Error 404)";
    })
    return <section class="page-not-found">
            <div class="page-not-found__block1">
                <br />
                <h3>Oops! Error 404.</h3>
                <h2>La página que estas <br /> buscando no existe.</h2>
                <a class="page-not-found__btn-home" href='/'>Volver a Inicio</a>
                <br />
                <br />
            </div>
        </section>
}