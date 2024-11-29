const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');
const hostname = 'https://inteligames.netlify.app';

// Función para leer todos los archivos JSON en la carpeta 'articulos'
function getArticulos(dir) {
    let articulos = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        if (file.endsWith('.json')) {
            articulos.push(file);
        }
    });

    return articulos;
}

// Obtener los artículos desde la carpeta 'src/articulos'
const articulos = getArticulos(path.join(__dirname, 'src', 'articulos'));

const urls = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/contacto', changefreq: 'monthly', priority: 0.8 },
    { url: '/juegos', changefreq: 'weekly', priority: 0.8 },
    { url: '/novedades', changefreq: 'weekly', priority: 0.8 },
    // Generando las rutas de los artículos dinámicamente
    ...articulos.map((articulo) => ({
        url: `/articulo/${articulo.replace('.json', '')}`,
        changefreq: 'monthly',
        priority: 0.7,
    }))
];

// Crear un objeto SitemapStream
const sitemapStream = new SitemapStream({ hostname });

// Convertir el flujo del sitemap a una cadena de texto XML
streamToPromise(sitemapStream)
    .then((smStream) => {
        // Guardar el archivo sitemap.xml en la carpeta 'public'
        const publicDir = path.join(__dirname, 'public', 'sitemap.xml');
        fs.writeFileSync(publicDir, smStream.toString());
        console.log('Sitemap generado con éxito en la carpeta "public"!');
    })
    .catch((err) => {
        console.error('Error al generar el sitemap:', err);
    });

// Escribir las URLs en el sitemap
urls.forEach((url) => {
    sitemapStream.write(url);
});

// Finalizar el flujo de escritura del sitemap
sitemapStream.end();
