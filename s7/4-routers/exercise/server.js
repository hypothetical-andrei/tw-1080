const express = require('express')
const bookRouter = require('./book-router')
const statusRouter = require('./status-router')

const app = express()

app.use(express.json())

app.locals.books = [{
	id: 1,
	title: 'a book',
	genre: 'sf',
	author: 'someone'
}, {
	id: 2,
	title: 'book',
	genre: 'fantasy',
	author: 'another'
}]

app.use('/book-api', bookRouter)
app.use('/status-api', statusRouter)

app.listen(8080)