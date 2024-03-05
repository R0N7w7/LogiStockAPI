import express from 'express';

const router = express.Router();

import {
  getEspacios,
  createEspacio,
  getEspacioById,
  updateEspacio,
  deleteEspacio,
} from '../controllers/espacio.controller.js';

// Ruta para obtener todos los espacios
router.get('/', getEspacios);

// Ruta para crear un nuevo espacio
router.post('/', createEspacio);

// Ruta para obtener un espacio por su ID
router.get('/:id', getEspacioById);

// Ruta para actualizar un espacio
router.put('/:id', updateEspacio);

// Ruta para eliminar un espacio
router.delete('/:id', deleteEspacio);

export default router;
