import mongoose from 'mongoose'

const jokeSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    autor: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
)

// Aqui inicializamos el modelo dandole el nombre y pasandole el schema y se exporta
const Joke = mongoose.model('Joke', jokeSchema)
export default Joke
