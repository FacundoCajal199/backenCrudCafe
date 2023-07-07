import { Schema, model } from "mongoose";//esquema
const productoSchema= new Schema({
//tienen que tener los mismos nombres que en front
nombreProducto:{
    type: String,
    minLength:2,
    maxLength:100,
    required:true,
    unique:true

},
precio:{
    type:Number,
    min:1,
    max:10000,
    required:true
},
imagen:{
    type:String,
    required:true

},
categoria:{
type:String,
required:true
}
});


const  Producto = model('producto',productoSchema);

export default Producto;