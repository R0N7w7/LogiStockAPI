import { AuthService } from "../services/auth.services.js";

const authService = new AuthService();

export const authUsuario = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new Error("error");

        const user = await authService.authUser(email, password);

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "unauthorized" });
    }

}