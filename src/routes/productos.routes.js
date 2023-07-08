import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarroducto,
  obtenerProductos,
  obtenerUnProducto,
} from "../controllers/productos.controlers";
const router = Router();

router.route("/productos").get(obtenerProductos).post(crearProducto);

router.route("/productos/:id")
.delete(borrarProducto)
.put(editarroducto)
.get(obtenerUnProducto);

export default router;
