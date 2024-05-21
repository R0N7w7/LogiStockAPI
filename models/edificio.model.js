import { INTEGER, STRING } from "sequelize";
import { BD } from "../stores/BD.js";
import { AreaAcademica } from "./areaAcademica.model.js";

export const Edificio = BD.define('Edificio', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: STRING(255),
        allowNull: false,
    },
    numero_pisos: {
        type: INTEGER,
        allowNull: false,
    },
    codigo: {
        type: String(255),
        allowNull: false
    },
    area_academica_id: {
        type: INTEGER,
        references: {
            model: 'area_academicas',
            key: 'id'
        }
    }
});

Edificio.belongsTo(AreaAcademica, { foreignKey: 'area_academica_id' });
AreaAcademica.hasMany(Edificio, { foreignKey: 'area_academica_id' });