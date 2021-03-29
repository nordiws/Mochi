import schoolAPI from '../services/http-ApiConnection.js';


// Captura dos dados da API

// Captura dos dados dos estados
const getAllStates = () => {
    const data = schoolAPI.api.get('/states?limit=10000').then(response => {
        return response.data.data;
    });
    return data;
}

// Captura dos dados das cidades
const getAllCities = (state) => {
    const data = schoolAPI.api.get(`/states/${state}/cities?limit=10000`).then(response => {
        return response.data.data;
    });
    return data;
}

// Caputra dos dados das escolas
const getAllSchools = (city) => {
    const data = schoolAPI.api.get(`/cities/${city}/schools?limit=200&count=1`).then(response => {
        return response.data.data;
    });
    return data;
}


export default { getAllStates, getAllCities, getAllSchools };
