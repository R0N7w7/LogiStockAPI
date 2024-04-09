import bcrypt from "bcrypt";
import { INTEGER, STRING } from "sequelize";
import { BD_user as BD } from "../stores/USERDB.js";

export const Usuario = BD.define('usuario', {
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
    },
    nombre: {
        allowNull: false,
        type: STRING(100),
    },
    apellido_paterno: {
        allowNull: false,
        type: STRING(100),
    },
    apellido_materno: {
        allowNull: false,
        type: STRING(100),
    },
    email: {
        allowNull: false,
        type: STRING(150),
        unique: true
    },
    password: {
        allowNull: false,
        type: STRING(255)
    },
    rol: {
        type: STRING(35),
        allowNull: false,
    }
}, {
    hooks: {
        beforeCreate: async (Usuario) => {
            const hashedPassword = await bcrypt.hash(Usuario.password, 10);
            Usuario.password = hashedPassword;  
        }
    }
});