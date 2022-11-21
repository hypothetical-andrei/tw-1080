const checkIds = (req, res, next) => {
	let isIdInvalid = false
	for (const id in req.params) {
		if (isNaN(parseInt(req.params[id]))) {
			isIdInvalid = true
			break
		}
	}
	if (isIdInvalid) {
		res.status(400).json({ message: 'invalid id' })
	} else {
		next()
	}
}

const logger = (req, res, next) => {
	console.log(`${req.method} -> ${req.url}`)
	next()
}

module.exports = {
  checkIds,
	logger
}