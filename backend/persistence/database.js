const { constants } = require('../constants.js');
const { Pool } = require('pg');

let pool;

const getClient = () => {
    if (!pool) {
        pool = new Pool({
            user: constants.db.user,
            host: constants.db.host,
            database: constants.db.name,
            password: constants.db.password,
            port: constants.db.port,
            idleTimeoutMillis: 20000,
        });
    }

    return pool;
};

const executeQuery = async (query, valueParameters) => {
    let client = await getClient().connect();
    try {
        let response = await client.query(query, valueParameters);
        return response;
    }
    catch(e) {
        throw new Error(`Query that failed: ${query}; original message: ${e.message}, original stack: ${e.stack}`);
    }
    finally {
        client.release();
    }
}

const query = async (query, valueParameters, mapper) => {
    let response = await executeQuery(query, valueParameters);
    let returnResponse = /*mapper ? response.rows.map(r => mapper(r)) :*/ response.rows;
    return returnResponse;
}

/*async function queryRaw(queryTemplate, valueParameters) {
    let response = await executeQuery(queryTemplate, valueParameters);
    let returnResponse = response.rows[0][response.fields[0].name];
    return returnResponse;
}*/

exports.queryDb = query;