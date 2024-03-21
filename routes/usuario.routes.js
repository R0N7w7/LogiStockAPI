import express from 'express';

const router = express.Router();

import {
  createUsuario,
  deleteUsuario,
  getUsuarioById,
  getUsuarios,
  updateUsuario,
} from '../controllers/usuario.controller.js';

// Ruta para obtener todos los usuarios
router.get('/', getUsuarios);

// Ruta para crear un nuevo usuario
router.post('/', createUsuario);

// Ruta para obtener un usuario por su ID
router.get('/:id', getUsuarioById);

// Ruta para actualizar un usuario
router.put('/:id', updateUsuario);

// Ruta para eliminar un usuario
router.delete('/:id', deleteUsuario);

export default router;
