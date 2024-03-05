import { Espacio } from "../models/espacio.model.js";
import { Edificio } from "../models/edificio.model.js";

export class EspacioService {
  constructor() {
    this.espacioModel = Espacio;
    this.edificioModel = Edificio;
  }

  async createEspacio(espacio) {
    return await this.espacioModel.create(espacio);
  }

  async getEspacios() {
    return await this.espacioModel.findAll({
      include: {
        model: Edificio,
        attributes: ['nombre'], // Solo obtiene el nombre del edificio
      },
    });
  }

  async getEspacioById(id) {
    return await this.espacioModel.findByPk(id, {
      include: {
        model: Edificio,
        attributes: ['nombre'], // Solo obtiene el nombre del edificio
      },
    });
  }

  async updateEspacio(id, espacio) {
    return await this.espacioModel.update(espacio, {
      where: {
        id,
      },
    });
  }

  async deleteEspacio(id) {
    return await this.espacioModel.destroy({
      where: {
        id,
      },
    });
  }
}
