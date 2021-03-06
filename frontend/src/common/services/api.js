import Axios from 'axios';
//import constants from '../../constants.js';

//const axiosInstance = Axios.create({ baseUrl: 'http://localhost:8000/api'/*constants.axios.baseUrl*/, headers: {Pragma: 'no-cache'}});

const getAlbumsList = async () => {
    return Axios
        .get('http://localhost:8000/api/music/albums');
}

const getAllUsers = async () => {
    return Axios
        .get('http://localhost:8000/api/users');
}

const inviteUser = async userData => {
    return Axios
        .post('http://localhost:8000/api/users/create', userData);
}; 

const addAlbum = async albumData => {
    return Axios.post('http://localhost:8000/api/music/addAlbum', albumData);
}

export default {
    getAlbumsList,
    getAllUsers,
    inviteUser,
    addAlbum
}