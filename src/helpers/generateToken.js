import jwt from 'jsonwebtoken'
import env from '~/config/environment'

export const generateToken = (payload) => {
  return jwt.sign(payload, env.SECRET_KEY_TOKEN, { expiresIn: 60 * 2 })
}
