import { Usuario } from "../models/usuario.model.js";

export class UsuarioService {
    constructor() {
        this.usuarioModel = Usuario;
    }

    async createUsuario(usuarioData) {
        return await this.usuarioModel.create(usuarioData);
    }

    async getUsuarios() {
        return await this.usuarioModel.findAll();
    }

    async getUsuarioById(id) {
        return await this.usuarioModel.findByPk(id);
    }

    async getUsuarioByEmail(email) {
        return await this.usuarioModel.findOne({
            where: {
                email
            }
        })
    }

    async updateUsuario(usuarioData) {
        return await this.usuarioModel.update(usuarioData);
    }

    async deleteUsuario(id) {
        return await this.usuarioModel.destroy({
            where: {
                id
            }
        });
    }
}

