// index.routes.js
import express from "express";
import areaAcademicaRouter from './areaAcademica.routes.js';
import articuloRouter from './articulo.routes.js';
import categoriaRouter from './categoria.routes.js';
import edificioRouter from './edificio.routes.js';
import espacioRouter from './espacio.routes.js';
import institutoRouter from './instituto.routes.js';

const app = express();

// Montando el router de Institutos en la ruta '/institutos'
app.use("/institutos", institutoRouter);

// Montando el router de Area Academica en la ruta '/area_academica'
app.use("/areas_academicas", areaAcademicaRouter);

// Montando el router de Area Academica en la ruta '/area_academica'
app.use("/edificios", edificioRouter);

// Montando el router de Area Academica en la ruta '/area_academica'
app.use("/espacios", espacioRouter);

// Montando el router de Area Academica en la ruta '/area_academica'
app.use("/categorias", categoriaRouter);

// Montando el router de Area Academica en la ruta '/area_academica'
app.use("/articulos", articuloRouter);

// ... Otras rutas de la aplicación
export default app; 
