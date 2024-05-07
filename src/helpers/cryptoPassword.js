import crypto from 'crypto'
import env from '~/config/environment'

export const cryptoPassword = (password) => {
  return crypto.createHash('sha256', env.SECRET_KEY_PASSWORD).update(password).digest('hex')
}
