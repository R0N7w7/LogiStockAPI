import { EdificioService } from '../services/edificio.services.js';

const edificioService = new EdificioService();

export const getEdificios = async (req, res, next) => {
    try {
        const edificios = await edificioService.getEdificios();
        res.json(edificios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener edificios' });
    }
};

export const createEdificio = async (req, res, next) => {
    try {
        const edificio = req.body;
        const nuevoEdificio = await edificioService.createEdificio(edificio);
        res.status(201).json(nuevoEdificio);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const getEdificioById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const edificio = await edificioService.getEdificioById(id);
        if (!edificio) {
            return res.status(404).json({ error: 'Edificio no encontrado' });
        }
        res.json(edificio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener edificio' });
    }
};

export const updateEdificio = async (req, res, next) => {
    try {
        const { id } = req.params;
        const edificioActualizado = req.body;
        await edificioService.updateEdificio(id, edificioActualizado);
        res.status(204).json({ message: 'Edificio actualizado' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const deleteEdificio = async (req, res, next) => {
    try {
        const { id } = req.params;
        await edificioService.deleteEdificio(id);
        res.status(204).json({ message: 'Edificio eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar edificio' });
    }
};
