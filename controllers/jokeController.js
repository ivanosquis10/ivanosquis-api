import mongoose from 'mongoose'
import Joke from '../models/Joke.js'

const createJoke = async (req, res) => {
  // obtener la info que viene el body instanciando el modelo
  const nuevaJoke = new Joke(req.body)

  try {
    const addJoke = await nuevaJoke.save()
    return res.json(addJoke)
  } catch (error) {
    console.log(error)
  }
}

const getJokes = async (req, res) => {
  try {
    const jokes = await Joke.find().select('-createdAt -updatedAt -__v')
    res.json(jokes)
  } catch (error) {
    console.log(error)
  }
}

const getJoke = async (req, res) => {
  try {
    const { id } = req.params
    const valid = mongoose.Types.ObjectId.isValid(id)

    if (!valid) {
      const error = new Error('Chiste no encontrado')
      return res.status(404).json({ msg: error.message })
    }

    const joke = await Joke.findById(id).select('-createdAt -updatedAt -__v')

    res.json(joke)
  } catch (error) {
    console.log(error.message)
  }
}

export { createJoke, getJokes, getJoke }
