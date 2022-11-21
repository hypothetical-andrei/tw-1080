const express = require('express')

const app = express()

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

// get /books?sortField=title&sortOrder=1
app.get('/books', (req, res) => {
	let results = app.locals.books
	const { sortField, sortOrder } = req.query
	if (req.query.genre) {
		results = app.locals.books.filter(e => e.genre.match(req.query.genre))
	}
	if (req.query.title) {
		results = results.filter(e => e.title.match(req.query.title))
	}
	if (req.query.author) {
		results = results.filter(e => e.author.match(req.query.author))
	}
	if (sortField && sortOrder) {
		const sortedResults = results.sort((a, b) => {
			if (a[sortField] === b[sortField]) {
				return 0
			} else {
				if (a[sortField] > b[sortField]) {
					return 1 * parseInt(sortOrder)
				} else {
					return -1 * parseInt(sortOrder)
				}
			}
		})
		res.status(200).json(sortedResults)
	} else {
		res.status(200).json(results)
	}
})

app.listen(8080)