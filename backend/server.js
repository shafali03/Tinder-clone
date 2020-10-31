import express from 'express'
import mongoose from 'mongoose'
const connection_url = `mongodb+srv://shaf1234:alisakina110614@cluster0.gh4fh.mongodb.net/tinderdb?retryWrites=true&w=majority`


// App Config
const app = express()
const port = process.env.PORT || 8001

// Middleware

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('TESTING'))

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))