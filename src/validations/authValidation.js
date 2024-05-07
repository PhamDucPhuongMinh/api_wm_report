import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const registerAccount = async (req, res, next) => {
  const condition = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })

  try {
    // abortEarly: true - check have 1 error will stop, false - check all error
    await condition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

const loginAccount = async (req, res, next) => {
  const condition = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })

  try {
    // abortEarly: true - check have 1 error will stop, false - check all error
    await condition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

export const authValidation = {
  registerAccount,
  loginAccount
}
