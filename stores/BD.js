import { Sequelize } from 'sequelize';
import 'dotenv/config'

// Conexión a la base de datos de articulos

const { BD_NAME, BD_USER, BD_PASSWORD } = process.env;

const BD = new Sequelize(BD_NAME, BD_USER, BD_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export { BD };
