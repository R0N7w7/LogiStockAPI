import { InstitutoService } from "../services/instituto.services.js";

const institutoService = new InstitutoService();

export const getInstitutos = async (req, res, next) => {
    try {
        const institutos = await institutoService.getInstitutos();
        res.json(institutos);
    } catch (error) {
        console.error(error);
    }
}