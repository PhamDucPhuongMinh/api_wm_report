import express from 'express'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import 'dotenv/config'
import env from '~/config/environment'

const START_SERVER = () => {
  const app = express()

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.send('Hello World!')
  })

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
