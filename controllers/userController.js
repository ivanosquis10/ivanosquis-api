import mongoose from 'mongoose'
import User from '../models/User.js'

const createUser = async (req, res) => {
  // obtener la info que viene el body instanciando el modelo
  const nuevoUsuario = new User(req.body)

  const { nombre, apellido, edad } = nuevoUsuario
  if ([nombre, apellido, edad].includes('')) {
    const error = new Error('Todos los campos son obligatorios')
    return res.json({ msg: error.message })
  }

  try {
    const addUser = await nuevoUsuario.save()
    return res.json(addUser)
  } catch (error) {
    console.log(error)
  }
}

const getUsers = async (req, res) => {
  try {
    const usuarios = await User.find().select('-createdAt -updatedAt -__v')
    res.json(usuarios)
  } catch (error) {
    console.log(error)
  }
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const valid = mongoose.Types.ObjectId.isValid(id)

    if (!valid) {
      const error = new Error('Usuario no encontrado')
      return res.status(404).json({ msg: error.message })
    }

    const usuario = await User.findById(id).select('-createdAt -updatedAt -__v')

    res.json(usuario)
  } catch (error) {
    console.log(error.message)
  }
}

export { createUser, getUsers, getUser }
