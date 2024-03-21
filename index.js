import express from 'express';


import bodyParser from 'body-parser';

import 'dotenv/config';

import { BD } from './config/BD.js';

import appRouter from './routes/index.routes.js';

import cors from 'cors';

const { API_PORT } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());

try {
    await BD.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}



app.use('/API', appRouter);

app.listen(API_PORT, () => {
    console.log(`Listen on port ${API_PORT}`);
})