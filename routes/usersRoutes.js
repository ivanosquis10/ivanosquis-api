import express from 'express'
import { createUser, getUsers, getUser } from '../controllers/userController.js'

// Llamada tipo get a la direccion de la api, en este caso, usuarios. ejemplo :router.get('/', usuarios)
const router = express.Router()

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getUser)

export default router
