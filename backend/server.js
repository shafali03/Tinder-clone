import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './Model/dbCards.js'



// App Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = MONGO_URI


// Middleware 
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('TESTING'))

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body

  // Creating new card
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

// find the card
app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))