import express from 'express';
const router = express.Router();

import {
    createAreaAcademica,
    deleteAreaAcademica,
    getAreaAcademicaById,
    getAreaAcademicaByInstituto,
    getAreasAcademicas,
    updateAreaAcademica
} from '../controllers/areaAcademica.controller.js';

// Ruta para crear una nueva área académica
router.post('/', createAreaAcademica);

// Ruta para actualizar un área académica
router.put('/:id', updateAreaAcademica);

// Ruta para eliminar un área académica
router.delete('/:id', deleteAreaAcademica);

// Ruta para obtener un área académica por su ID
router.get('/:id', getAreaAcademicaById);

// Ruta para obtener las áreas académicas por instituto
router.get('/instituto/:id', getAreaAcademicaByInstituto);

// Ruta para obtener todas las áreas académicas
router.get('/', getAreasAcademicas);

export default router;
