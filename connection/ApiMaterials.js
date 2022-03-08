import api from '../services/http-ApiConnection.js';


class MaterialsAPI {
  constructor() { }

  /*  async initialize() {
     this.materialsData = await api.api_materials.get('/').then(response => {
           return response.data;
     });
   } */

  getAllMaterials() {
    return this.materialsData;
  }
}

const API = new MaterialsAPI();
//await API.initialize();
export default API;
