const router = require('express').Router();
const { getAlbums } = require('./controllers/music.js');

router.get('/music/albums', getAlbums);

module.exports = router;