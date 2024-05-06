import { Sequelize } from 'sequelize';

import { BD } from '../stores/BD.js'; // Define la conexión a la base de datos
import { AreaAcademica } from './areaAcademica.model.js';

// Modelo "Instituto"
export const Instituto = BD.define('instituto', {
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
        unique: true,
    },
}
);