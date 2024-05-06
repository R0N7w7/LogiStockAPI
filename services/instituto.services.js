import { AreaAcademica } from "../models/areaAcademica.model.js";
import { Edificio } from "../models/edificio.model.js";
import { Instituto } from "../models/instituto.model.js";

export class InstitutoService {
  constructor() {
    this.institutoModel = Instituto;
  }

  async createInstituto(instituto) {
    return await this.institutoModel.create(instituto);
  }

  async getInstitutos() {
    return await this.institutoModel.findAll();
  }

  async getInstitutoById(id) {
    return await this.institutoModel.findByPk(id);
  }

  async getInstitutoFullDetail() {
    try {
      // Obtener todos los institutos con todas las áreas académicas asociadas
      const institutos = await this.institutoModel.findAll({
        attributes: ['id', 'nombre', 'codigo'],
        include: {
          model: AreaAcademica, // Modelo de Área Académica
          attributes: ['id', 'nombre', 'codigo'], // Atributos que deseas incluir
          include: {
            model: Edificio,
            attributes: ['id', 'nombre', 'numero_pisos']
          }
        },
      });

      return institutos;
    } catch (error) {
      console.error(error);
    }

  }


  async updateInstituto(id, instituto) {
    return await this.institutoModel.update(instituto, {
      where: {
        id,
      },
    });
  }

  async deleteInstituto(id) {
    return await this.institutoModel.destroy({
      where: {
        id,
      },
    });
  }
}
