import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { authRoutes } from './authRoutes'

const Router = express.Router()

Router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    msg: 'APIs v1 are ready to use'
  })
})

Router.use('/auth', authRoutes)

export const APIs_v1 = Router
