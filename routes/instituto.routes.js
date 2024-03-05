import { Router } from "express";
import {
    createInstituto,
    deleteInstituto,
    getInstitutoById,
    getInstitutos,
    updateInstituto
} from "../controllers/instituto.controller.js";

const router = Router();

router.post('/', createInstituto);

router.get('/', getInstitutos);

router.get('/:id', getInstitutoById);

router.put('/:id', updateInstituto);

router.delete('/:id', deleteInstituto);

export default router;