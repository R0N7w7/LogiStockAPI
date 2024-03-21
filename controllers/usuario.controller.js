import { UsuarioService } from "../services/usuario.services.js";

const usuarioService = new UsuarioService();

export const createUsuario = async (req, res) => {
    try {
        const usuarioData = req.body;
        const usuario = await usuarioService.createUsuario(usuarioData);
        res.status(201).json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating usuario' });
    }
};

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.getUsuarios();
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting usuarios' });
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await usuarioService.getUsuarioById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario not found' });
        }
        res.json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting usuario by id' });
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioData = req.body;
        const usuario = await usuarioService.updateUsuario({ ...usuarioData, id });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario not found' });
        }
        res.json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating usuario' });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        await usuarioService.deleteUsuario(id);
        res.status(204).send(); // No content response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting usuario' });
    }
};
