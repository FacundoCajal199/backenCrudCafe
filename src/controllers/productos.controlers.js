import Producto from "../models/producto";

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al buscar los productos",
    });
  }
};
export const crearProducto = async (req, res) => {
  try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "el producto se creo correctamente",
    }); //201 hace referencia a que se creo algo
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al crear los productos",
    });
  }
};
export const borrarProducto = async (req, res) => {
  try {
    //pedir a la base de datod borrar el productos
    console.log(req.params.id);
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
        mensaje:'producto eliminado correctamente'
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al borrar los productos",
    });
  }
};
