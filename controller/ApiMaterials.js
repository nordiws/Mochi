import ApiMaterialsConnection from "../connection/ApiMaterials.js";

// Importando os dados dos produtos
const materialsData = async () => {
  try {
    const response = await ApiMaterialsConnection.getAllMaterials();
    return response;
  } catch (err) {
    console.log(err);
  }
}

// Filtrando os produtos pelos codigos
const selectedMaterialsData = async (students) => {
  try {
    var listMaterialsByStudentID = [];
    for(const item of students){
      const response = await ApiMaterialsConnection.getSpecificMaterials({products_list : item.products_list});
      listMaterialsByStudentID.push({id: item._id,  products_list: response });
    }
    return listMaterialsByStudentID;
  } catch (err) {
    console.log(err);
  }
}

export default { materialsData, selectedMaterialsData };
