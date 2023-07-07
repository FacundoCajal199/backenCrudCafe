import { Router } from "express";
import { crearProducto, obtenerProductos } from "../controllers/productos.controlers";
const router= Router()

router.route('/productos').get(obtenerProductos).post(crearProducto);
export default router;