import bodyParser from 'body-parser';
import express from 'express';

import { BD } from './stores/BD.js';

import cors from 'cors';
import 'dotenv/config';
import appRouter from './routes/index.routes.js';

const { API_PORT } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());

//turnning on the database conection
try {
    await BD.authenticate();
    console.log('Conexion con la BD de articulos');
    //await BD_user.authenticate();
    console.log("Conexión con la BD de usuarios");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//networking to all API routes
app.use('/API', appRouter);

//put the serve working on
app.listen(API_PORT, () => {
    console.log(`Listen on port ${API_PORT}`);
})