import Axios from 'axios';
//import constants from '../../constants.js';

//const axiosInstance = Axios.create({ baseUrl: 'http://localhost:8000/api'/*constants.axios.baseUrl*/, headers: {Pragma: 'no-cache'}});

const getAlbumsList = async () => {
    return Axios
        .get('http://localhost:8000/api/music/albums');
}

export default {
    getAlbumsList,
}