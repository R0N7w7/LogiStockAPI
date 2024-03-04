import express from 'express';

import 'dotenv/config';
import { BD } from './config/BD.js';
import { Articulo } from './models/articulo.model.js';

const app = express();

const { API_PORT } = process.env;

try {
    await BD.sync();
    await BD.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.get('/', (req, res) => {
    res.json({ nombre: 'El Boooooooooooooooooooooooooooooooooob', edad: 20 })
});

app.listen(API_PORT, () => {
    console.log(`Listen on port ${API_PORT}`);
})