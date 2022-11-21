import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static('public'))

app.use(express.json())

app.locals.data = [{
  id: 1,
  content: 'some content'
}]

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
})

app.get('/items', (req, res) => {
  res.status(200).json(app.locals.data)
})

app.post('/items', (req, res) => {
  app.locals.data.push(req.body)
  res.status(201).json(req.body)
})

app.listen(8080)