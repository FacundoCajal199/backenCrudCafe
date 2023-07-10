import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarroducto,
  obtenerProductos,
  obtenerUnProducto,
} from "../controllers/productos.controlers";
import { check } from "express-validator";
const router = Router();

router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("el nombre del producto es obligatorio"),
    ],
    crearProducto
  );

router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(editarroducto)
  .get(obtenerUnProducto);

export default router;
