import { Sequelize } from 'sequelize';

import { BD } from '../stores/BD.js';
import { Instituto } from './instituto.model.js';

// Modelo "AreaAcademica"
export const AreaAcademica = BD.define('area_academica', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  codigo: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  institutoId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'institutos',
      key: 'id',
    },
  },
});

// Relación con "Instituto"
AreaAcademica.belongsTo(Instituto, { foreignKey: 'institutoId' });
