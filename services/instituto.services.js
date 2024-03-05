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
