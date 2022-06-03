import 'reflect-metadata'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import express, { Application } from 'express'
import { createServer } from 'http'
import routersV1 from './routes/Api/V1/index'
import { WebSocket, WebSocketEvents } from './helpers/WebSocket'
import { IActivityLog } from './interface/IActivityLog'

const NODE_ENV = process.env.NODE_ENV === undefined ? 'development' : process.env.NODE_ENV
dotenv.config({ path: `.env.${NODE_ENV}` })

const app: Application = express()
const httpServer = createServer(app)
const io = WebSocket.getInstance(httpServer)
io.listen(3000)

io.on("connection", (socket) => {
  socket.on(WebSocketEvents.ActivityLog, (activity: IActivityLog) => {
    console.log('actividad', activity)
  })
});

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/V1', routersV1)

// connect database
run().then(() => console.log('Database connected!')).catch(err => console.log(err))
async function run(): Promise<void> {
  await connect(`${process.env.MONGO_URI}`)
}


export default httpServer
