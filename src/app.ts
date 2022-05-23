import 'reflect-metadata'
import dotenv from 'dotenv'
// import { connect } from 'mongoose'
import { AppDataSource } from './data-source'

import express, { Application } from 'express'
import routersV1 from './routes/Api/V1/index'

const NODE_ENV = process.env.NODE_ENV === undefined ? 'development' : process.env.NODE_ENV
dotenv.config({ path: `.env.${NODE_ENV}` })

const app: Application = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/admin/v1/', routersV1)

// connect database
/* run().then(() => console.log('Database connected!')).catch(err => console.log(err))
async function run (): Promise<void> {
  await connect(`${process.env.MONGO_URI}`)
} */

AppDataSource.initialize().then(async () => {
  console.log('Database connected!')
}).catch(error => console.log(error))

export default app
