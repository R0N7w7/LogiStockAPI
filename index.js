import bodyParser from 'body-parser';
import express from 'express';

import { BD } from './stores/BD.js';
import { BD_user } from './stores/USERDB.js';

import cors from 'cors';
import 'dotenv/config';
import appRouter from './routes/index.routes.js';

const { API_PORT } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Conexión a la BD
try {
    await BD.authenticate();
    console.log('Conexion con la BD de articulos');
    await BD_user.authenticate();
    console.log("Conexión con la BD de usuarios");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//Enrutado de toda la App
app.use('/API', appRouter);

//Arranque de la App
app.listen(API_PORT, () => {
    console.log(`Listen on port ${API_PORT}`);
})