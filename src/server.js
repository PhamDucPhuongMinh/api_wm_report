import express from 'express'
import env from '~/config/environment'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(env.APP_PORT, env.APP_HOST, () => {
  console.log(`Example app listening on port ${env.APP_PORT}`)
})
