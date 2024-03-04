import { Sequelize } from 'sequelize';

import { BD } from '../config/BD.js'; // Define la conexión a la base de datos

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
    },
});