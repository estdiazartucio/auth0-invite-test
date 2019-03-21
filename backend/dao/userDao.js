const { queryDb } = require('../persistence/database.js');

const createUser = async userData => {
    let auth0Id = userData.identities[0].user_id;
    let { email, username } = userData;

    let query = 'insert into users (username, email, auth0_id) values ($1, $2, $3) returning id';
    let response = await queryDb(query, [username, email, auth0Id]);
    return response[0];
};

const getAllUsers = async () => {
    let response = await queryDb('select id, username, email from users', []);
    return response[0];
};

const getUserByAuth0Id = async auth0Id => {
    let response = await queryDb('select id, username, email from users where auth0_id = $1', [auth0Id]);
    return response[0];
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByAuth0Id
}