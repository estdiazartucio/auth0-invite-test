const router = require('express').Router();
const { getAlbums } = require('./controllers/music.js');
const { createUser, getUsers } = require('./controllers/users.js');

router.get('/music/albums', getAlbums);
router.get('/users/', getUsers);
router.post('/users/create', createUser);

module.exports = router;