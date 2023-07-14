import generarJWT from "../helpers/token-sign";
import Usuario from "../models/usuario";
import bcrypt from "bcrypt"
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const obtenerUnUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ mensaje: "Error al buscar el usuario" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    console.log(req.body)
let consultarUsuario = await Usuario.findOne({email: req.body.email})
if(consultarUsuario){
  return res.status(400).json({mensaje: "ya existe un usuario con la inf enviada"})
}

    const nuevoUsuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync(10);
    nuevoUsuario.password = bcrypt.hashSync(nuevoUsuario.password, salt);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "Se creo un nuevo usuario" });
  } catch (error) {
    console.log(error)
    res.status(400).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    //verificar mail en la db
    const { email, password } = req.body;
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({
        mensaje: "correo o password invalido (correo)",
      });
    }
    //preguntar si el  password no coincide
    const passwordValido = bcrypt.compareSync(password, usuario.password)
    if (passwordValido=== false) {
      return res.status(400).json({
        mensaje: "correo o password invalido (password)",
      });
    }
//generar token
    const token = await generarJWT(usuario._id, usuario.nombreUsuario )
    //responder
    res.status(200).json({
      mensaje: "el usuario existe",
      nombreUsuario: usuario.nombreUsuario,
      uid: usuario._id,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json("error al logear un usuario");
  }
};
