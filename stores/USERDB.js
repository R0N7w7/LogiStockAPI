import { Sequelize } from 'sequelize';
import 'dotenv/config'

// Conexión a la base de datos de usuarios

const { USERBD_NAME, BD_USER, BD_PASSWORD } = process.env;

const BD_user = new Sequelize(USERBD_NAME, BD_USER, BD_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export { BD_user };
