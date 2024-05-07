import express from 'express'
import { authController } from '~/controllers/authController'
import { authValidation } from '~/validations/authValidation'

const Router = express.Router()

Router.post('/register', authValidation.registerAccount, authController.registerAccount)
Router.post('/login', authValidation.loginAccount, authController.loginAccount)

export const authRoutes = Router
