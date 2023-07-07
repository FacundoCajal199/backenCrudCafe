import express from 'express'
import cors from'cors'

//tomar puerto
//crear una instancia de express
const app = express();
//crear una variable para guardar un puerto
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.log(`estoy en el puerto ${app.get('port')}`)
})

//midlleware
app.use(cors());  //permite conexiones remotas
app.use(express.json());//puedo tomar del objeto request datos en formato json.


//rutas


