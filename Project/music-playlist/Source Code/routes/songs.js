const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

// Route to add a song
router.post('/', songController.addSong);

// Route to get all songs
router.get('/', songController.getSongs);

// Route to delete a song by ID
router.delete('/:id', songController.deleteSong);

module.exports = router;
