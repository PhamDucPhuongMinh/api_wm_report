import 'dotenv/config'

const env = {
  USERNAME_MONGODB: process.env.USERNAME_MONGODB,
  PASSWORD_MONGODB: process.env.PASSWORD_MONGODB,
  DATABASE_NAME_MONGODB: process.env.DATABASE_NAME_MONGODB,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT
}

export default env
