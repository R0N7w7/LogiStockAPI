import { InstitutoService } from '../services/instituto.services.js';

const institutoService = new InstitutoService();

export const getInstitutos = async (req, res, next) => {
    try {
        const institutos = await institutoService.getInstitutos();
        res.json(institutos);
    } catch (error) {
        console.error(error);
    }
};

export const createInstituto = async (req, res, next) => {
    try {
        const instituto = req.body;
        console.log(instituto);
        const nuevoInstituto = await institutoService.createInstituto(instituto);
        res.status(201).json(nuevoInstituto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getInstitutoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const instituto = await institutoService.getInstitutoById(id);
        if (!instituto) {
            return res.status(404).json({ error: "Instituto no encontrado" });
        }
        res.json(instituto);
    } catch (error) {
        console.error(error);
    }
};

export const updateInstituto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const institutoActualizado = req.body;
        const instituto = await institutoService.updateInstituto(id, institutoActualizado);
        res.json(instituto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteInstituto = async (req, res, next) => {
    try {
        const { id } = req.params;
        await institutoService.deleteInstituto(id);
        res.status(204).json({ message: "Instituto eliminado" });
    } catch (error) {
        res.status(404).json({ error: "Instituto no encontrado" });
    }
};
