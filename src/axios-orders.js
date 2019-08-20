import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguerbuilder-react-app.firebaseio.com/',
});

export default instance;