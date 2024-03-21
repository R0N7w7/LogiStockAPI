import bcrypt from "bcrypt";
import { UsuarioService } from "./usuario.services.js";

export class AuthService {
    constructor() {
        this.userService = new UsuarioService();
    }

    async authUser(email, password) {
        const user = await this.userService.getUsuarioByEmail(email);
        if (!user) throw new Error("No hay un usario");

        if (await bcrypt.compare(password, user.password)) {
            return user;
        }
        throw new Error("No autorizado");
    }
}