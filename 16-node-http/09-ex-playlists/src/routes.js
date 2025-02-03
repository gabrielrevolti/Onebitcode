const express = require('express')
const playlistController = require("../controllers/playlist-controller")

const router = express.Router()

router.get('/', (req, res) => {
	res.json({ message: 'Hello, world!' })
})

router.get('/playlists', playlistController.index)
router.get('/playlists/:id', playlistController.show)
router.post('/playlists', playlistController.create)
router.put('/playlists/:id', playlistController.updatePlay)
router.delete('/playlists/:id', playlistController.deletePlay)
router.post('/playlists/:id/addMusic', playlistController.addMusic)
router.delete('/playlists/:id/deleteMusic', playlistController.deleteMusic)

module.exports = router