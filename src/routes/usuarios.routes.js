import { Router } from "express";
import {
  crearUsuario,
  login,
  obtenerUnUsuario,
  obtenerUsuarios,
} from "../controllers/usuarios.controlers";
import validarUsuario from "../helpers/validarUsuario";
import { obtenerUnProducto } from "../controllers/productos.controlers";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(validarUsuario, crearUsuario);

router.route("/usuarios/:id").get(obtenerUnProducto);

router.route("/").post(login);

export default router;
