import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from './config/db.js'
import usersRoutes from './routes/usersRoutes.js'
import jokesRoutes from './routes/jokesRoutes.js'

// inicializamos la app
const app = express()

// esto habilita que pueda leer la informacion como formato json
app.use(express.json())

// guardamos la informacion delicada en variables de entorno
dotenv.config()

// Hacemos la conexion a la base de datos
conectarDB()

// configuracion y uso de cors
const whiteList = [process.env.FRONTEND_URL] // lista de los dominios que estan permitidos para llamar a nuestra api

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      // puede consultar la api
      callback(null, true)
    } else {
      // No puede consultar la api
      callback(new Error('Error de CORS'))
    }
  },
}

app.use(cors(corsOptions))

// rutasss
app.use('/api/users', usersRoutes)
app.use('/api/jokes', jokesRoutes)

// es importante que al hacer deploy tener una variable que apunte al puerto
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`)
})
