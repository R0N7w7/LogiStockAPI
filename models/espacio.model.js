import { Sequelize } from 'sequelize';

import { BD } from '../config/BD.js';
import { Edificio } from './edificio.model.js';

// Modelo "Espacio"
export const Espacio = BD.define('espacio', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  tipo: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  capacidad: {
    type: Sequelize.INTEGER,
  },
  edificioId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'edificios',
      key: 'id',
    },
  },
});

// Relación con "Edificio"
Espacio.belongsTo(Edificio, { foreignKey: 'edificioId' });
