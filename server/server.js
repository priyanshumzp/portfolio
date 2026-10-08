import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()
app.use(cors())
app.use(express.json())

const client = new MongoClient("mongodb://localhost:27017/")
await client.connect()
const userCollection = client.db("portfolio").collection("query")
console.log("mongodb connected")

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message)
    return res.status(400).json({ error: 'All fields are required' })

  await userCollection.insertOne({ name, email, message, date: new Date() })
  res.json({ success: true })
})

app.listen(5000, () => console.log('Server running on port 5000'))
