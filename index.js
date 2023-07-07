import express from 'express'
import cors from'cors'
import morgan from'morgan'
import path from 'path'
import 'dotenv/config'
import './src/database/dbConnection'
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
app.use(morgan('dev'));//muestra inf de las solicitudes a las api solo en desarrollo

console.log(path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public'))); // con esto nos permite poder ejecutar los aechivo estaticos de mi proyecto en la ruta raiz de mi programa ejem=> http://localhost:4000

//rutas


