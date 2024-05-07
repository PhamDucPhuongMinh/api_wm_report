import 'dotenv/config'

console.log(process.env)

const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME_MONGODB: process.env.DATABASE_NAME_MONGODB,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  SECRET_KEY_TOKEN: process.env.SECRET_KEY_TOKEN,
  SECRET_KEY_PASSWORD: process.env.SECRET_KEY_PASSWORD,

  BUILD_MODE: process.env.BUILD_MODE
}

export default env
