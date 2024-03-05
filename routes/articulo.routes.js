import express  from 'express';

const router = express.Router();

import {
    getArticulos,
    createArticulo,
    getArticuloById,
    updateArticulo,
    deleteArticulo,
    getArticulosByCategoria,
    getArticulosByEspacio,
    getArticulosByFechaAdquisicion,
} from '../controllers/articulo.controller.js';

// Ruta para obtener todos los artículos
router.get('/', getArticulos);

// Ruta para crear un nuevo artículo
router.post('/', createArticulo);

// Ruta para obtener un artículo por su ID
router.get('/:id', getArticuloById);

// Ruta para actualizar un artículo
router.put('/:id', updateArticulo);

// Ruta para eliminar un artículo
router.delete('/:id', deleteArticulo);

// Ruta para obtener artículos por categoría
router.get('/categoria/:categoriaId', getArticulosByCategoria);

// Ruta para obtener artículos por espacio
router.get('/espacio/:espacioId', getArticulosByEspacio);

// Ruta para obtener artículos por fecha de adquisición
router.get('/fecha-adquisicion', getArticulosByFechaAdquisicion);

export default router;
