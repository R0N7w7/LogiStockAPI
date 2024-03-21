import { authUsuario } from "../controllers/auth.controller.js";

import express from 'express'

const router = express.Router();

router.post('/', authUsuario);

export default router;