import { Router } from "express";
import {
  crearUsuario,
  login,
  obtenerUnUsuario,
  obtenerUsuarios,
} from "../controllers/usuarios.controlers";
import validarUsuario from "../helpers/validarUsuario";


const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(validarUsuario, crearUsuario);

router.route("/usuarios/:id").get(obtenerUnUsuario);

router.route("/").post(login);

export default router;
