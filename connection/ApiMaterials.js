import api from '../services/http-ApiConnection.js';

// Captura dos dados da API de produtos
const getAllMaterials = () => {
    const data = api.api_materials.get('/').then(response => {
        return response.data;
    });
    return data;
}

const getSpecificMaterials = (ids) => {
    const data = api.api_materials.post('/getProducts/', ids).then(response => {
        return response.data;
    });
    return data;
}

export default { getAllMaterials, getSpecificMaterials };
