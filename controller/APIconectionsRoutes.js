import http from './http-apiConnection.js';

const getAllStates = async () => {
    return http.get('/states');
}

export default { getAllStates };