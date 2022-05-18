import dotenv from 'dotenv'
import app from './app'

const NODE_ENV = process.env.NODE_ENV || 'development'

dotenv.config({ path: `.env.${NODE_ENV}` })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`${process.env.HOST}`)
})
