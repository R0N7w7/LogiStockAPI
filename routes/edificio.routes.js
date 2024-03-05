import express from 'express'

const router = express.Router();

import {
  getEdificios,
  createEdificio,
  getEdificioById,
  updateEdificio,
  deleteEdificio,
} from '../controllers/edificio.controller.js';

// Ruta para obtener todos los edificios
router.get('/', getEdificios);

// Ruta para crear un nuevo edificio
router.post('/', createEdificio);

// Ruta para obtener un edificio por su ID
router.get('/:id', getEdificioById);

// Ruta para actualizar un edificio
router.put('/:id', updateEdificio);

// Ruta para eliminar un edificio
router.delete('/:id', deleteEdificio);

export default router;
