import { AreaAcademica } from "../models/areaAcademica.model.js";
import { Edificio } from "../models/edificio.model.js";


export class EdificioService {
  constructor() {
    this.edificioModel = Edificio;
    this.areaAcademicaModel = AreaAcademica;
  }

  async createEdificio(edificio) {
    return await this.edificioModel.create(edificio);
  }

  async getEdificios() {
    return await this.edificioModel.findAll({
      include: {
        model: AreaAcademica,
        attributes: ['nombre'], // Solo obtiene el nombre del area academica
      },
    });
  }

  async getEdificioById(id) {
    return await this.edificioModel.findByPk(id, {
      include: {
        model: AreaAcademica,
        attributes: ['nombre'], // Solo obtiene el nombre del area academica
      },
    });
  }

  async getEdificiosByAreaId(area_academica_id) {
    return await this.edificioModel.findAll({
      where: {
        area_academica_id
      }
    })
  }

  async updateEdificio(id, edificio) {
    return await this.edificioModel.update(edificio, {
      where: {
        id,
      },
    });
  }

  async deleteEdificio(id) {
    return await this.edificioModel.destroy({
      where: {
        id,
      },
    });
  }
}
