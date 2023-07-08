import { Router } from "express";
import {
     borrarProducto,
     crearProducto,
     obtenerProductos } from "../controllers/productos.controlers";
const router= Router()

router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').delete(borrarProducto);
export default router;