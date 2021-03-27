import ApiMaterialsConnection from "./ApiMaterialsConnections.js";

// Importa o JSON dos estados
const materialsData = () => {
    return ApiMaterialsConnection.getAllMaterials().then((response) => {
      return response;

    }).catch(err => {
        console.log(err);
    })
}


export default { materialsData };
