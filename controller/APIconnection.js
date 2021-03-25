import http from '../routes/http-apiConnection.js';

const getAllStates = () => {
    return http.get('/states');
}

export default { getAllStates };