import { ArticuloService } from '../services/articulo.services.js';

const articuloService = new ArticuloService();

export const getArticulos = async (req, res, next) => {
    try {
        const articulos = await articuloService.getArticulos();
        res.json(articulos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener artículos' });
    }
};

export const createArticulo = async (req, res, next) => {
    try {
        const articulo = req.body;
        const nuevoArticulo = await articuloService.createArticulo(articulo);
        res.status(201).json(nuevoArticulo);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const getArticuloById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const articulo = await articuloService.getArticuloById(id);
        if (!articulo) {
            return res.status(404).json({ error: 'Artículo no encontrado' });
        }
        res.json(articulo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener artículo' });
    }
};

export const updateArticulo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const articuloActualizado = req.body;
        await articuloService.updateArticulo(id, articuloActualizado);
        res.status(204).json({ message: 'Artículo actualizado' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const deleteArticulo = async (req, res, next) => {
    try {
        const { id } = req.params;
        await articuloService.deleteArticulo(id);
        res.status(204).json({ message: 'Artículo eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar artículo' });
    }
};

// **Funciones adicionales**

export const getArticulosByCategoria = async (req, res, next) => {
    try {
        const { categoriaId } = req.params;
        const articulos = await articuloService.getArticulosByCategoria(categoriaId);
        res.json(articulos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener artículos por categoría' });
    }
};

export const getArticulosByEspacio = async (req, res, next) => {
    try {
        const { espacioId } = req.params;
        const articulos = await articuloService.getArticulosByEspacio(espacioId);
        res.json(articulos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener artículos por espacio' });
    }
};

export const getArticulosByFechaAdquisicion = async (req, res, next) => {
    try {
        const { fechaInicio, fechaFin } = req.query;
        const articulos = await articuloService.getArticulosByFechaAdquisicion(
            fechaInicio,
            fechaFin
        );
        res.json(articulos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener artículos por fecha de adquisición' });
    }
};
