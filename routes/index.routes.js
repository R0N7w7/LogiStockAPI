// index.routes.js
import express from "express";
import areaAcademicaRouter from './areaAcademica.routes.js';
import articuloRouter from './articulo.routes.js';
import authRouter from './auth.routes.js';
import categoriaRouter from './categoria.routes.js';
import edificioRouter from './edificio.routes.js';
import espacioRouter from './espacio.routes.js';
import institutoRouter from './instituto.routes.js';
import usuarioRouter from './usuario.routes.js';

const app = express();

app.use("/institutos", institutoRouter);

app.use("/areas_academicas", areaAcademicaRouter);

app.use("/edificios", edificioRouter);

app.use("/espacios", espacioRouter);

app.use("/categorias", categoriaRouter);

app.use("/articulos", articuloRouter);

app.use("/usuarios", usuarioRouter);

app.use("/auth", authRouter);

export default app; 
