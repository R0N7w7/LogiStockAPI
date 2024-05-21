import { EspacioService } from '../services/espacio.services.js';

const espacioService = new EspacioService();

export const getEspacios = async (req, res, next) => {
    try {
        const espacios = await espacioService.getEspacios();
        res.json(espacios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener espacios' });
    }
};

export const createEspacio = async (req, res, next) => {
    try {
        const espacio = req.body;
        const nuevoEspacio = await espacioService.createEspacio(espacio);
        res.status(201).json(nuevoEspacio);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const getEspacioById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const espacio = await espacioService.getEspacioById(id);
        if (!espacio) {
            return res.status(404).json({ error: 'Espacio no encontrado' });
        }
        res.json(espacio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener espacio' });
    }
};

export const getEspaciosByEdificioId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const espacios = await espacioService.getEspaciosByEdificioId(id);
        if (!espacios) {
            return res.status(404).json({ error: 'Espacio no encontrado' });
        }
        res.json(espacios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener espacios' });
    }
};

export const updateEspacio = async (req, res, next) => {
    try {
        const { id } = req.params;
        const espacioActualizado = req.body;
        await espacioService.updateEspacio(id, espacioActualizado);
        res.status(204).json({ message: 'Espacio actualizado' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const deleteEspacio = async (req, res, next) => {
    try {
        const { id } = req.params;
        await espacioService.deleteEspacio(id);
        res.status(204).json({ message: 'Espacio eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar espacio' });
    }
};
