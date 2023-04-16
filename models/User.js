import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    edad: {
      type: Number,
      required: true,
      trim: true,
    },
    work: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
)

// Aqui inicializamos el modelo dandole el nombre y pasandole el schema y se exporta
const User = mongoose.model('User', userSchema)
export default User
