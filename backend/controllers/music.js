const { constants } = require('.././constants.js');
const LastFM = require('last-fm');
const lastFMInstance = new LastFM(constants.lastFM.key);

const getAlbums = async (req, res) => {
    let albums = await new Promise((resolve, reject) => {
        lastFMInstance.tagTopAlbums({tag: 'Rock'}, (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    });
    res.json(albums);
}

module.exports = {
    getAlbums,
}