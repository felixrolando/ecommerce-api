import 'reflect-metadata'
import express, { Application } from 'express'
import routersV1 from './routes/Api/V1/index'
const app: Application = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/admin/v1/', routersV1)

export default app
