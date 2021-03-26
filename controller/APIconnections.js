import api from '../services/http-apiConnection.js';

const getAllStates = () => {
    const data = api.get('/states').then(response => {
        return response.data.data;
    });
    return data;
}

export default { getAllStates };