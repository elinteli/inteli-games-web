import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Noticia from './Noticia';
import Contacto from './Contacto';
import Juegos from './Juegos';
import Novedades from './Novedades';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/articulo/:nombre",
    element: <Noticia />
  },
  {
    path: "/contacto",
    element: <Contacto />
  },
  {
    path: "/juegos",
    element: <Juegos />
  },
  {
    path: "/novedades",
    element: <Novedades />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function Root() {
  return (
    <RouterProvider router={router} />
  );
}

export default Root;
