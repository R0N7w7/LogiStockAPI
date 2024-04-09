import { DATE, DECIMAL, INTEGER, JSON, STRING } from "sequelize";
import { BD } from "../stores/BD.js";
import { Categoria } from "./categoria.model.js";
import { Espacio } from "./espacio.model.js";

export const Articulo = BD.define('Articulo', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: STRING(255),
        allowNull: false,
    },
    descripcion: {
        type: STRING(255),
    },
    codigo: {
        type: STRING(10),
        allowNull: false,
        unique: true
    },
    cantidad: {
        type: INTEGER,
        allowNull: false,
    },
    precio: {
        type: DECIMAL(10, 2),
        allowNull: false,
    },
    estado: {
        type: STRING(255),
        allowNull: false,
    },
    categoria_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: 'categorias'
        }
    },
    espacio_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: 'espacios',
        }
    },
    fecha_adquisicion: {
        type: DATE,
    },
    fecha_baja: {
        type: DATE,
    },
    numero_serie: {
        type: STRING(255),
    },
    posicion: {
        type: STRING(255),
    },
    caracteristicas: {
        type: JSON,
    },
});

// Relaciones
Articulo.belongsTo(Categoria, {
    foreignKey: 'categoria_id',
});
Articulo.belongsTo(Espacio, {
    foreignKey: 'espacio_id',
});
