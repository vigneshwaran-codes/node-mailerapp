import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserRouter from './routes/routes.js'
import cookieParser from 'cookie-parser'
// config env
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
// Middleware
app.use(express.json())
app.use(cookieParser())
// Mongo Connection
export const mongoConnection = async () => {
  const MONGO_URL = process.env.MONGO_URI
  try {
    await mongoose.connect(MONGO_URL)
    console.log('MongoDB is Connected')
  } catch (err) {
    console.log(err)
  }
}
mongoConnection()
// user Router
app.use('/', UserRouter)
// Homepage
app.get('/', (req, res) => {
  res.send('welcome to nodemailer app')
})

app.listen(PORT, () => console.log('Server is running in', PORT))
