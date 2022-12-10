const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

if (process.env.ENVIRONMENT !== 'production') {
  require('dotenv').config()
}

if (process.env.ENVIRONMENT === 'production') {
  var corsOptions = {
    origin: process.env.APP_URL
  }
}

app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: '500mb' }))

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.get('*', (req, res, next) => {
  console.log('GET ' + req.url)
  next()
})

app.post('*', (req, res, next) => {
  console.log('POST ' + req.url)
  next()
})

app.delete('*', (req, res, next) => {
  console.log('DELETE ' + req.url)
  next()
})

app.get('/', (req, res) => {
  console.log('passe')
  return res.status(200).json({
    message: 'Welcome.'
  })
})

const PORT = process.env.PORT || 5000
if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
