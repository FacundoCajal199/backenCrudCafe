import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarroducto,
  obtenerProductos,
  obtenerUnProducto,
} from "../controllers/productos.controlers";
import validarProducto from "../helpers/validarProducto";
import validarJWT from "../helpers/token-verify"


const router = Router();

router
  .route("/productos")
  .get(obtenerProductos)
  .post([validarJWT,validarProducto], crearProducto);

router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(validarProducto, editarroducto)
  .get(obtenerUnProducto);

export default router;
