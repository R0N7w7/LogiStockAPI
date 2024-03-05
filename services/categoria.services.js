import { Categoria } from "../models/categoria.model.js";

export class CategoriaService {
  constructor() {
    this.categoriaModel = Categoria;
  }

  async createCategoria(categoria) {
    return await this.categoriaModel.create(categoria);
  }

  async getCategorias() {
    return await this.categoriaModel.findAll();
  }

  async getCategoriaById(id) {
    return await this.categoriaModel.findByPk(id);
  }

  async updateCategoria(id, categoria) {
    return await this.categoriaModel.update(categoria, {
      where: {
        id,
      },
    });
  }

  async deleteCategoria(id) {
    return await this.categoriaModel.destroy({
      where: {
        id,
      },
    });
  }
}
