const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { constants } = require('.././constants.js');
const userDao = require('../dao/userDao.js');

// middleware to check login token with auth0
//https://auth0.com/docs/quickstart/backend/nodejs/01-authorization

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: constants.auth0.domain + '.well-known/jwks.json',
    }),
    audience: constants.auth0.audience,
    issuer: constants.auth0.domain,
    algorithms: ['RS256'],
});

const authUserDatabase = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    // req.user is already set here
    let auth0Id = req.user.sub.split('|')[1];
    userDao.getUserByAuth0Id(auth0Id)
        .then(response => {
            req.user = Object.assign(req.user, { dbUser: response });
            next();
        });
};

module.exports = {
    // this checks with auth0 authentication
    authCheck,
    // this gets our user id in our database
    authUserDatabase,
};