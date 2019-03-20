require('dotenv').config();

exports.constants = {
    /*app: {
        domain: process.env.APP_DOMAIN,
        frontendPort: process.env.APP_FRONTEND_PORT,
        port: process.env.APP_PORT,
    },*/
    db: {
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        password: process.env.PG_PASSWORD,
        name: process.env.PG_DATABASE,
        port: process.env.PG_PORT,
        // currently in existing environments owner == user, but might not be always be that case
        owner: process.env.PG_USER,
    },
    lastFM: {
        key: process.env.APP_LASTFM_API_KEY,
    },
    auth0: {
        domain: process.env.AUTH0_DOMAIN,
        audience: process.env.AUTH0_AUDIENCE,
        nonInteractiveClient: {
            id: process.env.AUTH0_NON_INTERACTIVE_CLIENT_ID,
            secret: process.env.AUTH0_NON_INTERACTIVE_CLIENT_SECRET,
        },
    },
};
