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

run().catch(err => console.log(err))

// connect database
async function run (): Promise<void> {
  await connect(`${process.env.MONGO_URI}`)
}

export default app
