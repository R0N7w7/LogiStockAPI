import { AreaAcademica } from "../models/areaAcademica.model.js";
import { Instituto } from "../models/instituto.model.js";

export class AreaAcademicaService {
  constructor() {
    this.areaAcademicaModel = AreaAcademica;
    this.institutoModel = Instituto;
  }

  async createAreaAcademica(areaAcademica) {
    return await this.areaAcademicaModel.create(areaAcademica);
  }

  async getAreasAcademicas() {
    return await this.areaAcademicaModel.findAll({
      include: {
        model: Instituto,
        attributes: ['nombre'], // Solo obtiene el nombre del instituto
      },
    });
  }

  async getAreaAcademicaById(id) {
    return await this.areaAcademicaModel.findByPk(id, {
      include: {
        model: Instituto,
        attributes: ['nombre'], // Solo obtiene el nombre del instituto
      },
    });
  }

  async updateAreaAcademica(id, areaAcademica) {
    return await this.areaAcademicaModel.update(areaAcademica, {
      where: {
        id,
      },
    });
  }

  async deleteAreaAcademica(id) {
    return await this.areaAcademicaModel.destroy({
      where: {
        id,
      },
    });
  }
}
