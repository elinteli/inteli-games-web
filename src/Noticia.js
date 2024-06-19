import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import images from './utils/importImages';
import articulos from './utils/importArticulos';

export default function Noticia() {
    let { nombre } = useParams();
    useEffect(() => {
        let articuloMain;
        let articuloSugerido1;
        let articuloSugerido2;
        let articuloSugerido3;
        let articulosTodoslista;
        const nombreArticulo = nombre;
        const mainContenedor = document.querySelector(".articulo");
        cargarArticulos();
        async function cargarArticulos() {
            try {
                articuloMain = articulos[nombreArticulo + ".json"];
                document.title = articuloMain.nombre + " - Inteli Games";
                mainContenedor.innerHTML = JSON.parse(articuloMain.html);
                let imagenesElementos = mainContenedor.getElementsByTagName("img");
                for (let i = 0; i < imagenesElementos.length; i++) {
                    let nombreImg = mainContenedor.getElementsByTagName("img")[i].src.split('/');
                    nombreImg = nombreImg[nombreImg.length - 1];
                    mainContenedor.getElementsByTagName("img")[i].src = images[nombreImg];
                }

                articulosTodoslista = Object.keys(articulos);

                articulosTodoslista.splice(articulosTodoslista.indexOf(nombreArticulo + ".json"), 1);
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
        <section class="articulo" id='articulo'>
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