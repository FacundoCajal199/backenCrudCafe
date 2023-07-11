import { validationResult } from "express-validator";

const resultadoValidacion= (req, res, next)=>{
    const errors = validationResult(req);
    //error.isEmpty();true: si esta vacio ,false si hay almenos un error
    if(errors.isEmpty()=== false){
    return res.status(400).json({
    errores:errors.array()
    })
    }
    next();

}
export default resultadoValidacion;