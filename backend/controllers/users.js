const userDao = require('../dao/userDao.js');
const ManagementClient = require('../auth/managementClient.js');
const auth0Scope = 'create:users create:user_tickets';

const createAuth0User = (data) => {
    let userData = {
        'connection': data.connection,
        'email': data.email,
        'password': data.password,
        'user_metadata': data.user_metadata,
    };

    let auth0Manage = ManagementClient.newManagementClient(auth0Scope);
    return auth0Manage.createUser(userData);
};

const createUser = async (req, res) => {
    try {
        let user = await createAuth0User(req.body);
        await userDao.createUser(user);

        
    } catch (err) {
        if (err.statusCode === 409) {
            res.status(err.statusCode).send({
                message: 'The user already exists'
            });
        } else {
            res.status(500).send({
                message: 'An error has occured'
            });
        }
        throw err;
    }
    
    res.send({
        message: 'User created successfully'
    });
};

const getUsers = async (req, res) => {
    let users = await userDao.getAllUsers();
    res.json(users);
};

module.exports = {
    createUser,
    getUsers,
};