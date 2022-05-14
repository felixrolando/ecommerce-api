import express from 'express'
import routersV1 from './routes/Api/V1/index'
const app = express()

app.use(express.json())
const PORT = 3000

app.get('/ping', (req, res) => {
  console.log('hola')
  res.send('asdsad')
})

app.use('/api/admin/v1/', routersV1)

app.listen(PORT, () => {
  console.log('server listen')
})
