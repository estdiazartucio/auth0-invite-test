const { constants } = require('.././constants.js');
const ManagementClient = require('auth0').ManagementClient;

const newManagementClient = (scopes) => {
    return new ManagementClient({
        domain: constants.auth0.domain.replace('https://', '').slice(0, -1),
        clientId: constants.auth0.nonInteractiveClient.id,
        clientSecret: constants.auth0.nonInteractiveClient.secret,
        scope: scopes,
    });
};

module.exports = {
    //creates a new instance of auth0's Management Client with the given scopes
    newManagementClient,
};
