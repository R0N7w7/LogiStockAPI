import { Articulo } from "../models/articulo.model.js";
import { Categoria } from "../models/categoria.model.js";
import { Espacio } from "../models/espacio.model.js";

export class ArticuloService {
  constructor() {
    this.articuloModel = Articulo;
    this.categoriaModel = Categoria;
    this.espacioModel = Espacio;
  }

  async createArticulo(articulo) {
    return await this.articuloModel.create(articulo);
  }

  async getArticulos() {
    return await this.articuloModel.findAll({
      include: [
        {
          model: Categoria,
          attributes: ['nombre'], // Solo obtiene el nombre de la categoria
        },
        {
          model: Espacio,
          attributes: ['nombre'], // Solo obtiene el nombre del espacio
        },
      ],
    });
  }

  async getArticuloById(id) {
    return await this.articuloModel.findByPk(id, {
      include: [
        {
          model: Categoria,
          attributes: ['nombre'], // Solo obtiene el nombre de la categoria
        },
        {
          model: Espacio,
          attributes: ['nombre'], // Solo obtiene el nombre del espacio
        },
      ],
    });
  }

  async updateArticulo(id, articulo) {
    return await this.articuloModel.update(articulo, {
      where: {
        id,
      },
    });
  }

  async deleteArticulo(id) {
    return await this.articuloModel.destroy({
      where: {
        id,
      },
    });
  }

  // **Funciones adicionales**

  async getArticulosByCategoria(categoriaId) {
    return await this.articuloModel.findAll({
      where: {
        categoria_id: categoriaId,
      },
      include: [
        {
          model: Categoria,
          attributes: ['nombre'], // Solo obtiene el nombre de la categoria
        },
        {
          model: Espacio,
          attributes: ['nombre'], // Solo obtiene el nombre del espacio
        },
      ],
    });
  }

  async getArticulosByEspacio(espacioId) {
    return await this.articuloModel.findAll({
      where: {
        espacio_id: espacioId,
      },
      include: [
        {
          model: Categoria,
          attributes: ['nombre'], // Solo obtiene el nombre de la categoria
        },
        {
          model: Espacio,
          attributes: ['nombre'], // Solo obtiene el nombre del espacio
        },
      ],
    });
  }

  async getArticulosByFechaAdquisicion(fechaInicio, fechaFin) {
    return await this.articuloModel.findAll({
      where: {
        fecha_adquisicion: {
          between: [fechaInicio, fechaFin],
        },
      },
      include: [
        {
          model: Categoria,
          attributes: ['nombre'], // Solo obtiene el nombre de la categoria
        },
        {
          model: Espacio,
          attributes: ['nombre'], // Solo obtiene el nombre del espacio
        },
      ],
    });
  }
}
