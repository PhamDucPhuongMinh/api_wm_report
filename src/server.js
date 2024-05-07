import express from 'express'
import exitHook from 'async-exit-hook'
import 'dotenv/config'
import cors from 'cors'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import env from '~/config/environment'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
import { corsOptions } from '~/config/cors'
import { APIs_v1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  app.use(cors(corsOptions))

  // Enable req.body json data
  app.use(express.json())

  // Middleware handle concentration error
  app.use(errorHandlingMiddleware)

  // Use APIs V1
  app.use('/v1', APIs_v1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Example app listening on port ${env.APP_PORT}`)
  })

  exitHook(() => {
    console.log('Disconnected to Mongodb Cloud Atlas!')
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => console.log('Connected to Mongodb Cloud Atlas!'))
  .then(() => START_SERVER())
  .catch((err) => {
    console.log(err)
    process.exit(0)
  })
