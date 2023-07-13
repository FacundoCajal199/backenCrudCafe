import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minLength: 2,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
});

const Usuario = model("Usuario", usuarioSchema);
export default Usuario;
