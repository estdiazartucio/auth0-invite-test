const router = require('express').Router();
const { getAlbums, addAlbum } = require('./controllers/music.js');
const { createUser, getUsers } = require('./controllers/users.js');

router.get('/music/albums', getAlbums);
router.post('/music/addAlbum', addAlbum);
router.get('/users/', getUsers);
router.post('/users/create', createUser);

module.exports = router;