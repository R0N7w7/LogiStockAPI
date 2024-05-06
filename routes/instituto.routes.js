import { Router } from "express";
import {
    createInstituto,
    deleteInstituto,
    getInstitutoById,
    getInstitutoFullDetail,
    getInstitutos,
    updateInstituto
} from "../controllers/instituto.controller.js";

const router = Router();

router.post('/', createInstituto);

router.get('/detail/', getInstitutoFullDetail);

router.get('/:id', getInstitutoById);

router.get('/', getInstitutos);

router.put('/:id', updateInstituto);

router.delete('/:id', deleteInstituto);

export default router;
