import api from '../services/http-apiConnection.js';


// Captura dos dados da API

// Captura dos dados dos estados
const getAllStates = () => {
    const data = api.get('/states').then(response => {
        return response.data.data;
    });
    return data;
}

// Captura dos dados das cidades
const getAllCities = (state) => {
    const data = api.get(`/states/${state}/cities`).then(response => {
        return response.data.data;
    });
    return data;
}

// Caputra dos dados das escolas
const getAllSchools = (city) => {
    const data = api.get(`/cities/${city}/schools`).then(response => {
        return response.data.data;
    });
    return data;
}

export default { getAllStates, getAllCities, getAllSchools };