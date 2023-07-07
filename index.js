import express from 'express'
console.log('tercer prueba back')

//tomar puerto
//crear una instancia de express
const app = express();
//crear una variable para guardar un puerto
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.log(`estoy en el puerto ${app.get('port')}`)
})

//midlleware



//rutas


