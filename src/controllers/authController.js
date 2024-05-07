import { StatusCodes } from 'http-status-codes'
import { cryptoPassword } from '~/helpers/cryptoPassword'
import { generateToken } from '~/helpers/generateToken'
import { authService } from '~/services/authService'

const registerAccount = async (req, res, next) => {
  try {
    req.body.password = cryptoPassword(req.body.password)
    const registeredAccount = await authService.registerAccount(req.body)
    res.status(StatusCodes.CREATED).json({ ...registeredAccount })
  } catch (error) {
    next(error)
  }
}

const loginAccount = async (req, res, next) => {
  try {
    req.body.password = cryptoPassword(req.body.password)
    const account = await authService.loginAccount(req.body)
    if (!account) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Email or password is incorrect' })
    } else {
      delete account.password
      delete account._destroy
      const token = generateToken({ userId: account._id.toString() })
      return res.status(StatusCodes.OK).json({ userInfo: { ...account }, token })
    }
  } catch (error) {
    next(error)
  }
}

export const authController = {
  registerAccount,
  loginAccount
}
