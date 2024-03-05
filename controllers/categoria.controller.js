import { CategoriaService } from '../services/categoria.services.js';

const categoriaService = new CategoriaService();

export const getCategorias = async (req, res, next) => {
    try {
        const categorias = await categoriaService.getCategorias();
        res.json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener categorías' });
    }
};

export const createCategoria = async (req, res, next) => {
    try {
        const categoria = req.body;
        const nuevaCategoria = await categoriaService.createCategoria(categoria);
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const getCategoriaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoria = await categoriaService.getCategoriaById(id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener categoría' });
    }
};

export const updateCategoria = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoriaActualizada = req.body;
        await categoriaService.updateCategoria(id, categoriaActualizada);
        res.status(204).json({ message: 'Categoría actualizada' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const deleteCategoria = async (req, res, next) => {
    try {
        const { id } = req.params;
        await categoriaService.deleteCategoria(id);
        res.status(204).json({ message: 'Categoría eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar categoría' });
    }
};
