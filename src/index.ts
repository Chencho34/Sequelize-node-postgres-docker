import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { Error } from 'sequelize'
import sequelize from './config/db'
import User from './models/product.user'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
const PORT = process.env.PORT || 3000


app.get('/api', (_, res) => {
  res.send('Hello world!')
})


app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
})

app.get('/users', async (_req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})


// sequelize.authenticate()
//   .then(() => {
//     console.log('Database Connected')
//   })
//   .then(() => {
//     const PORT = process.env.PORT || 3000
//     app.listen(PORT, () => {
//       console.log(`Server is running on port https://localhost:${PORT}`)
//     })
//   })
//   .catch((err: Error) => {
//     console.error('Unable to connect to the database:', err)
//   })

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto', PORT)
  })
})
