import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'

const Joi = require('joi')

const ACCOUNT_COLLECTION_NAME = 'Users'

const ACCOUNT_COLLECTION_SCHEMA = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  createdAt: Joi.date().timestamp('unix').default(Date.now),
  updatedAt: Joi.date().timestamp('unix').default(null),
  roles: Joi.array().items(Joi.string()).default([]),
  _destroy: Joi.boolean().default(false)
})

const createNewAccount = async (data) => {
  try {
    const validData = await ACCOUNT_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
    const createdAccount = await GET_DB().collection(ACCOUNT_COLLECTION_NAME).insertOne(validData)
    return createdAccount
  } catch (error) {
    throw new Error(error)
  }
}

const findAccountById = async (id) => {
  try {
    const result = await GET_DB()
      .collection(ACCOUNT_COLLECTION_NAME)
      .findOne({
        _id: new ObjectId(id)
      })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const findAccountByEmail = async (email) => {
  try {
    const result = await GET_DB().collection(ACCOUNT_COLLECTION_NAME).findOne({
      email: email
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const accountModel = {
  ACCOUNT_COLLECTION_NAME,
  ACCOUNT_COLLECTION_SCHEMA,
  createNewAccount,
  findAccountById,
  findAccountByEmail
}
