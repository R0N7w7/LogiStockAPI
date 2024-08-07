import { Articulo } from "../models/articulo.model.js";
import { Usuario } from "../models/usuario.model.js";

export class UsuarioService {
    constructor() {
        this.usuarioModel = Usuario;
        this.articuloModel = Articulo;
    }

    async createUsuario(usuarioData) {
        return await this.usuarioModel.create(usuarioData);
    }

    async getUsuarios() {
        return {
            user: await this.usuarioModel.findAll(),
            articulos: await this.articuloModel.findAll(),
        };
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

    async updateUsuario(id, usuario) {
        return await this.usuarioModel.update(usuario, {
            where: {
                id,
            },
        });
    }
    
    async deleteUsuario(id) {
        return await this.usuarioModel.destroy({
            where: {
                id
            }
        });
    }
}

