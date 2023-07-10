import { Router } from "express";
import {
  crearUsuario,
  obtenerUnUsuario,
  obtenerUsuarios,
} from "../controllers/usuarios.controlers";



const router = Router();

router.get("/usuarios", obtenerUsuarios);
router.get("/usuarios/:id", obtenerUnUsuario);
router.post("/usuarios", crearUsuario);

export default router;
