import express from 'express';

const router = express.Router();

import {
    createCategoria,
    deleteCategoria,
    getCategoriaById,
    getCategorias,
    updateCategoria,
} from '../controllers/categoria.controller.js';

// Ruta para obtener todas las categorías
router.get('/', getCategorias);

// Ruta para crear una nueva categoría
router.post('/', createCategoria);

// Ruta para obtener una categoría por su ID
router.get('/:id', getCategoriaById);

// Ruta para actualizar una categoría
router.put('/:id', updateCategoria);

// Ruta para eliminar una categoría
router.delete('/:id', deleteCategoria);

export default router;
