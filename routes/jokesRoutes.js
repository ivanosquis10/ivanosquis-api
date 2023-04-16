import express from 'express'
import { createJoke, getJoke, getJokes } from '../controllers/jokeController.js'

// Llamada tipo get a la direccion de la api, en este caso, usuarios. ejemplo :router.get('/', usuarios)
const router = express.Router()

router.route('/').get(getJokes).post(createJoke)

router.route('/:id').get(getJoke)

export default router
