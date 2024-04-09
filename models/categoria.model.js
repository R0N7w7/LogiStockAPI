import { INTEGER, STRING, TEXT } from "sequelize";

import { BD } from "../stores/BD.js";

export const Categoria = BD.define('categorias', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: STRING(255),
        allowNull: false
    },
    descripcion: {
        type: TEXT,
        allowNull: false,
    },
}, {
    freezeTableName: false,
})