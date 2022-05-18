import app from './app'

const PORT = process.env.PORT === undefined ? 3000 : process.env.PORT

app.listen(PORT, () => {
  console.log(`${process.env.HOST}`)
})
