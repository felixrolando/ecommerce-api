import 'reflect-metadata'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import express, { Application } from 'express'
import routersV1 from './routes/Api/V1/index'
const app: Application = express()

const NODE_ENV = process.env.NODE_ENV === undefined ? 'development' : process.env.NODE_ENV

dotenv.config({ path: `.env.${NODE_ENV}` })

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/admin/v1/', routersV1)

connect(`${process.env.MONGO_URI}`)
  .then(res => console.log('database'))

export default app
