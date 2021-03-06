const { queryDb } = require('../persistence/database.js');

const addAlbum = async albumData => {
    let query = 'insert into albums (name, image_url, artist) values ($1, $2, $3) returning id';
    let response = await queryDb(query, [albumData.name, albumData.img, albumData.artistName]);
    return response[0];
};

const getUsersAlbums = async () => {
    let response = await queryDb('select id, name, image_url as image, artist from albums', []);
    return response;
};

module.exports = {
    addAlbum,
    getUsersAlbums
}