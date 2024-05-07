import { StatusCodes } from 'http-status-codes'
import { accountModel } from '~/models/accountModel'
import ApiError from '~/utils/ApiError'

const registerAccount = async (reqBody) => {
  try {
    const existedAccount = await accountModel.findAccountByEmail(reqBody.email)
    if (!existedAccount) {
      const registeredAccount = await accountModel.createNewAccount(reqBody)
      const getNewAccount = await accountModel.findAccountById(registeredAccount.insertedId)
      return getNewAccount
    } else {
      throw new ApiError(StatusCodes.NOT_ACCEPTABLE, 'Email already exists')
    }
  } catch (error) {
    throw error
  }
}

const loginAccount = async (reqBody) => {
  try {
    const account = await accountModel.findAccountByEmail(reqBody.email)
    if (account && account.password === reqBody.password) {
      return account
    } else {
      return null
    }
  } catch (error) {
    throw error
  }
}

export const authService = {
  registerAccount,
  loginAccount
}
