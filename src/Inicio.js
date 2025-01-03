import { useEffect } from 'react';
import React from 'react';
import images from './utils/importImages';
import articulos from './utils/importArticulos';


export default function Inicio() {
    useEffect(() => {
        let solucionPuzzle1 = false;
        document.getElementById("boton-solucion-puzzle1").addEventListener("click", function () {
            if (!solucionPuzzle1) {
                document.getElementById("lf-puzzle-1__tabla").innerHTML = document.getElementById("lf-puzzle-1__tabla").innerHTML.replace(/_/g, "<b>e</b>");
                document.getElementById("boton-solucion-puzzle1").innerHTML = "Ocultar Solución";
                solucionPuzzle1 = true;
            }
            else {
                document.getElementById("lf-puzzle-1__tabla").innerHTML = document.getElementById("lf-puzzle-1__tabla").innerHTML.replace(/<b>e<\/b>/g, "_");
                document.getElementById("boton-solucion-puzzle1").innerHTML = "Mostrar Solución";
                solucionPuzzle1 = false;
            }
        });
        let solucionPuzzle2 = false;
        document.getElementById("boton-solucion-puzzle2").addEventListener("click", function () {
            if (!solucionPuzzle2) {
                document.getElementById("lf-puzzle-2__tabla").innerHTML = document.getElementById("lf-puzzle-2__tabla").innerHTML.replace(/_/g, "<b>t</b>");
                document.getElementById("boton-solucion-puzzle2").innerHTML = "Ocultar Solución";
                solucionPuzzle2 = true;
            }
            else {
                document.getElementById("lf-puzzle-2__tabla").innerHTML = document.getElementById("lf-puzzle-2__tabla").innerHTML.replace(/<b>t<\/b>/g, "_");
                document.getElementById("boton-solucion-puzzle2").innerHTML = "Mostrar Solución";
                solucionPuzzle2 = false;
            }
        });
        let articuloSugerido1;
        let articuloSugerido2;
        let articuloSugerido3;
        let articulosTodoslista;

        cargarArticulos();
        async function cargarArticulos() {
            try {
                document.title = "Inteli Games - Juegos y Herramientas móviles";
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
        window.addEventListener('message', function (event) {
            if (event.data === 'fullscreen-iframe-anot-truc') {
                const iframeAnotTruc = document.getElementById("iframeAnotTruc");
                if (iframeAnotTruc) {
                    // Check if iframe supports fullscreen
                    if (iframeAnotTruc.requestFullscreen) {
                        if (!document.fullscreenElement) {
                            iframeAnotTruc.requestFullscreen().catch(err => {
                                console.error(`Failed to enter fullscreen mode: ${err.message}`);
                            });
                        } else {
                            document.exitFullscreen().catch(err => {
                                console.error(`Failed to exit fullscreen mode: ${err.message}`);
                            });
                        }
                    } else {
                        console.error('Iframe does not support fullscreen mode.');
                    }
                } else {
                    console.error('Iframe with id "iframeAnotTruc" not found.');
                }
            }
        });


    })
    return <div>
        <section class="inicio-lf">
            <div class="inicio-lf__block1">
                <h1 class="titulo-main">
                    <p>Letras<br />Fugitivas</p>
                </h1>
                <p class="inicio-lf__tag">NUEVO</p>
                <p class="inicio-lf__about">
                    ¡Encontrá las letras fugitivas! Sumergite en el <b>nuevo desafío de palabras</b>. Este juego no solo entretiene, sino que también <b>ejercita tu mente y mejora tu vocabulario</b>. <br />
                </p>
                <div class="inicio-lf__block2">
                    {/* <a class="inicio-lf__btn1"href="https://inteligames.itch.io/letras-fugitivas" target="_blank">Jugar</a> */}
                    <a href="#demo" class="inicio-lf__btn2">Descubre más</a></div>
            </div>
        </section>
        <section class="lf-puzzle-1" id='demo'>
            <div class="texto-lf-puzzle">
                <h2>¿Qué única letra completa las palabras?</h2>
                <button id='boton-solucion-puzzle1'>Mostrar Solución</button>
            </div>
            <ul class="tabla-lf-puzzle" id='lf-puzzle-1__tabla'>
                <li class="palabra-lf-puzzle">pi_za</li>
                <li class="palabra-lf-puzzle">tar_a</li>
                <li class="palabra-lf-puzzle">fi_sta</li>
                <li class="palabra-lf-puzzle">muert_</li>
                <li class="palabra-lf-puzzle">c_na</li>
            </ul>
        </section>
        <section class="lf-puzzle-2">
            <div class="texto-lf-puzzle texto-lf-puzzle-alt">
                <h2>¿Y aquí que letra es?</h2>
                <button id='boton-solucion-puzzle2'>Mostrar Solución</button>
            </div>
            <ul class="tabla-lf-puzzle" id='lf-puzzle-2__tabla'>
                <li class="palabra-lf-puzzle">_ubo</li>
                <li class="palabra-lf-puzzle">pa_o</li>
                <li class="palabra-lf-puzzle">_echo</li>
                <li class="palabra-lf-puzzle">_abla</li>
                <li class="palabra-lf-puzzle">cua_ro</li>
            </ul>
        </section>
        <section class="lf-download">
            <h2>Desafía tu mente, compite y gana con cada palabra</h2>
            <a href="/articulo/letras-fugitivas" class="button">Más Información</a>
        </section>
        <section class="trucouy">
            <div class="trucouy__block1">
                <h2>Otras herramientas</h2>
                <p class="trucouy__tag">Herramienta Online</p>
                <div>
                    <p class="trucouy__about">
                        Anotador de truco uruguayo para contar los puntos de las partidas.<br />
                        <b>Práctico, Rápido y Facil</b>.
                    </p>
                    <iframe src='https://anotador-de-truco.netlify.app/web-inteli-games-iframe.html' id="iframeAnotTruc" allow='fullscreen'></iframe>
                </div>
            </div>
            <div class="trucouy__block2">
                <img src={images["mockup-anot-truc.png"]} alt="Celular con Anotador de Truco uruguayo online abierto"
                    class="trucouy__img" />
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