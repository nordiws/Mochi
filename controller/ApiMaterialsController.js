import ApiMaterialsConnection from "./ApiMaterialsConnections.js";

// Importando os dados dos produtos
const materialsData = async () => {
  try {
    const response = await ApiMaterialsConnection.getAllMaterials();
    return response;
  } catch (err) {
    console.log(err);
  }
}

// Selecionando os produtos pelos codigos
const selectedMaterialsData = async (selection) => {
  try {
    const response = await ApiMaterialsConnection.getAllMaterials();
    const filteredMaterials = response.filter(material => material.Codigo.includes(selection));
    return filteredMaterials;
  } catch (err) {
    console.log(err);
  }
}

export default { materialsData, selectedMaterialsData };
