import ApiMaterialsConnection from "./ApiMaterialsConnections.js";

// Importa o JSON dos estados
const materialsData = async () => {
  try {
    const response = await ApiMaterialsConnection.getAllMaterials();
    return response;
  } catch (err) {
    console.log(err);
  }
}


export default { materialsData };
