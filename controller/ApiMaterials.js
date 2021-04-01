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
    const response = await ApiMaterialsConnection.getAllMaterials();
    var materialsLists = [];
     students.forEach((student) => {
      materialsLists.push({id: student._id,  products_list: getListByStudent(response, student["products_list"]) });
    });
    return materialsLists;
  } catch (err) {
    console.log(err);
  }
}

function getListByStudent(response, list){
  var filteredMaterials = [];
  response.forEach((item, i) => {
     if (list.includes(item.Codigo)) {
       filteredMaterials.push(item);
     }
  });
  return filteredMaterials;
}

export default { materialsData, selectedMaterialsData };
