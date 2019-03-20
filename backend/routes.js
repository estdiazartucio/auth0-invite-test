const router = require('express').Router();
const { getAlbums } = require('./controllers/music.js');
const { createUser } = require('./controllers/users.js');

router.get('/music/albums', getAlbums);
router.post('/users/create', createUser);

module.exports = router;