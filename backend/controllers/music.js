const { constants } = require('.././constants.js');
const LastFM = require('last-fm');
const lastFMInstance = new LastFM(constants.lastFM.key);
const albumDao = require('.././dao/albumDao.js');

const getAlbums = async (req, res) => {
    let topAlbumsPromise = new Promise((resolve, reject) => {
        lastFMInstance.tagTopAlbums({tag: 'post-hardcore', limit: 70}, (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    });

    let [topAlbums, userPickedAlbums] = await Promise.all([
        topAlbumsPromise,
        albumDao.getUsersAlbums(),
    ]);

    res.json({topAlbums, userPickedAlbums});
}

const addAlbum = async (req, res) => {
    let albumData = req.body;
    try {
        let requestedAlbum = await new Promise((resolve, reject) => {
            lastFMInstance.albumInfo({
                artistName: albumData.artist,
                name: albumData.albumName,
            }, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            })
        });

        albumDao.addAlbum(requestedAlbum);
    }
    catch(e) {
        res.status(500).send({
            message: 'An error has occured'
        });
    }
    res.send('Album added successfully');
}

module.exports = {
    getAlbums,
    addAlbum,
}