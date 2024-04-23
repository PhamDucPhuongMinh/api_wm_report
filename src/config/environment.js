import 'dotenv/config'

const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME_MONGODB: process.env.DATABASE_NAME_MONGODB,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,

  BUILD_MODE: process.env.BUILD_MODE
}

export default env
