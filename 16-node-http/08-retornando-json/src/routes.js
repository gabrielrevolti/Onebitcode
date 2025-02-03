const express = require('express')
const gamesController = require('../controllers/game-controller')

const router = express.Router()

router.get('/', (req, res) => {
	res.json({ message: 'Hello, world!' })
})

router.get('/games', gamesController.index)
router.get('/games/:id', gamesController.show)
router.post('/games', gamesController.save)
router.post('/games/:id/genres', gamesController.addGenre)
router.put('/games/:id', gamesController.update)
router.delete('/games/:id', gamesController.delete)
router.delete('/games/:id/genres/:genre', gamesController.deleteGenre)

module.exports = router