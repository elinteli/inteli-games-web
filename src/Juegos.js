import React from 'react';
import { useEffect } from 'react';
import images from './utils/importImages';
import articulos from './utils/importArticulos';


export default function Juegos() {
    useEffect(() => {
        let articuloSugerido1;
        let articuloSugerido2;
        let articulosTodoslista;
        cargarArticulos();
        async function cargarArticulos() {
            try {
                document.title = "Juegos y Herramientas - Inteli Games";

                articulosTodoslista = ["letras-fugitivas.json", "anotador-de-truco-uruguayo.json"];
                articuloSugerido1 = articulos[articulosTodoslista[0]];
                document.getElementById("articulo-sugerido1-titulo").innerHTML = articuloSugerido1.nombre;
                document.getElementById("articulo-sugerido1").title = articuloSugerido1.nombre;
                document.getElementById("articulo-sugerido1-desc").innerHTML = articuloSugerido1.info;
                document.getElementById("articulo-sugerido1-img").src = images[articuloSugerido1.portada];
                document.getElementById("articulo-sugerido1").href = "/articulo/" + articulosTodoslista[0].replace(".json", "");

                articuloSugerido2 = articulos[articulosTodoslista[1]];
                document.getElementById("articulo-sugerido2-titulo").innerHTML = articuloSugerido2.nombre;
                document.getElementById("articulo-sugerido2").title = articuloSugerido2.nombre;
                document.getElementById("articulo-sugerido2-desc").innerHTML = articuloSugerido2.info;
                document.getElementById("articulo-sugerido2-img").src = images[articuloSugerido2.portada];
                document.getElementById("articulo-sugerido2").href = "/articulo/" + articulosTodoslista[1].replace(".json", "");

            } catch (error) {
                console.error("Error al cargar articulos:", error);
            }
        }

    })
    return <section class="juegos">
        <h1>Juegos y Herramientas</h1>
        <div class="novedades__noticias">
            <a class="novedades__articulo--juego novedades__articulo" id="articulo-sugerido1" href=''>
                <p class="novedades__titulo--juego"><b id="articulo-sugerido1-titulo"></b></p>
                <img id="articulo-sugerido1-img" />
                <span id="articulo-sugerido1-desc"></span>
            </a>
            <a class="novedades__articulo--juego novedades__articulo" id="articulo-sugerido2">
                <p class="novedades__titulo--juego"><b id="articulo-sugerido2-titulo"></b></p>
                <img id="articulo-sugerido2-img" />
                <span id="articulo-sugerido2-desc"></span>
            </a>
        </div>
        <a class="button" href='https://inteligames.itch.io/' target='_blank'>Ver más</a>
    </section>
}