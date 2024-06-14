import React from 'react';
import { useEffect } from 'react';
import images from './utils/importImages';
import articulos from './utils/importArticulos';


export default function NotFound() {
    useEffect(() => {
        let articuloSugerido1;
        let articuloSugerido2;
        let articuloSugerido3;
        let articulosTodoslista;
        cargarArticulos();
        async function cargarArticulos() {
            try {
                articulosTodoslista = Object.keys(articulos);

                articulosTodoslista.splice(articulosTodoslista.indexOf("letras-fugitivas.json"), 1);
                articulosTodoslista.splice(articulosTodoslista.indexOf("anotador-de-truco-uruguayo.json"), 1);

                articulosTodoslista = articulosTodoslista.sort(function () { return Math.random() - 0.5 });

                articuloSugerido1 = articulos[articulosTodoslista[0]];
                document.getElementById("articulo-sugerido1-titulo").innerHTML = articuloSugerido1.nombre;
                document.getElementById("articulo-sugerido1-desc").innerHTML = articuloSugerido1.info;
                document.getElementById("articulo-sugerido1-img").src = images[articuloSugerido1.portada];
                document.getElementById("articulo-sugerido1").href = "/articulo/" + articulosTodoslista[0].replace(".json", "");

                articuloSugerido2 = articulos[articulosTodoslista[1]];
                document.getElementById("articulo-sugerido2-titulo").innerHTML = articuloSugerido2.nombre;
                document.getElementById("articulo-sugerido2-desc").innerHTML = articuloSugerido2.info;
                document.getElementById("articulo-sugerido2-img").src = images[articuloSugerido2.portada];
                document.getElementById("articulo-sugerido2").href = "/articulo/" + articulosTodoslista[1].replace(".json", "");

                articuloSugerido3 = articulos[articulosTodoslista[2]];
                document.getElementById("articulo-sugerido3-titulo").innerHTML = articuloSugerido3.nombre;
                document.getElementById("articulo-sugerido3-desc").innerHTML = articuloSugerido3.info;
                document.getElementById("articulo-sugerido3-img").src = images[articuloSugerido3.portada];
                document.getElementById("articulo-sugerido3").href = "/articulo/" + articulosTodoslista[2].replace(".json", "");
            } catch (error) {
                console.error("Error al cargar articulos:", error);
            }
        }

    })
    return <div>
        <section class="page-not-found">
            <div class="page-not-found__block1">
                <br />
                <h3>Oops! Error 404.</h3>
                <h2>La página que estas <br /> buscando no existe.</h2>
                <a class="page-not-found__btn-home" href='/'>Volver a Inicio</a>
                <br />
                <br />
            </div>
        </section>
        <section class="novedades">
            <h3>Últimas Novedades</h3>
            <div class="novedades__noticias">
                <a class="novedades__articulo" id="articulo-sugerido1">
                    <img id="articulo-sugerido1-img" />
                    <p><b id="articulo-sugerido1-titulo"></b></p>
                    <span id="articulo-sugerido1-desc"></span>
                </a>
                <a class="novedades__articulo" id="articulo-sugerido2">
                    <img id="articulo-sugerido2-img" />
                    <p><b id="articulo-sugerido2-titulo"></b></p>
                    <span id="articulo-sugerido2-desc"></span>
                </a>
                <a class="novedades__articulo" id="articulo-sugerido3">
                    <img id="articulo-sugerido3-img" />
                    <p><b id="articulo-sugerido3-titulo"></b></p>
                    <span id="articulo-sugerido3-desc"></span>
                </a>
            </div>
        </section>
    </div>
}