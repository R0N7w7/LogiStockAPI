import { AreaAcademicaService } from '../services/areaAcademica.services.js';

const areaAcademicaService = new AreaAcademicaService();

export const getAreasAcademicas = async (req, res, next) => {
    try {
        const areasAcademicas = await areaAcademicaService.getAreasAcademicas();
        res.json(areasAcademicas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener áreas académicas' });
    }
};

export const createAreaAcademica = async (req, res, next) => {
    try {
        const areaAcademica = req.body;
        const nuevaAreaAcademica = await areaAcademicaService.createAreaAcademica(areaAcademica);
        res.status(201).json(nuevaAreaAcademica);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const getAreaAcademicaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const areaAcademica = await areaAcademicaService.getAreaAcademicaById(id);
        if (!areaAcademica) {
            return res.status(404).json({ error: 'Área académica no encontrada' });
        }
        res.json(areaAcademica);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener área académica' });
    }
};

export const getAreaAcademicaByInstituto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const areaAcademica = await areaAcademicaService.getAreaAcademicaByInstituto(id);
        if (!areaAcademica) {
            return res.status(404).json({ error: 'Área académica no encontrada' });
        }
        res.json(areaAcademica);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener área académica' });
    }
};

export const updateAreaAcademica = async (req, res, next) => {
    try {
        const { id } = req.params;
        const areaAcademicaActualizada = req.body;
        await areaAcademicaService.updateAreaAcademica(id, areaAcademicaActualizada);
        res.status(204).json({ message: 'Área académica actualizada' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const deleteAreaAcademica = async (req, res, next) => {
    try {
        const { id } = req.params;
        await areaAcademicaService.deleteAreaAcademica(id);
        res.status(204).json({ message: 'Área académica eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar área académica' });
    }
};
