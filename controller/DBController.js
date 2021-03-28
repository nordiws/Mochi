import registrationModel from "../db_model/registrationModel.js";

// Salvando os dados do Form na base de dados
const saveForm = async (formData) => {
    try {
        const registryDB = new registrationModel(formData); // ajustar com os identificadores dos campos do Form
        await registryDB.save();
        console.log("Cadastro inserido");
    } catch (err) {
        console.log("Falha ao inserir o cadastro. " + err);
    }
}

// Importando dados da base de dados
const getAllKidsByCity = async (city) => {
    try {
        const fechData = await registrationModel.find({ city_id: city });
        const allKids = fechData.map(kid => {
            const { _id, chld_name, chld_nickname, chld_grade } = kid;
            return {
                _id,
                chld_name,
                chld_nickname,
                chld_grade
            }
        });
        console.log(allKids);
        return allKids;
    } catch (e) {
        console.log(e);
    }
}

export default { saveForm, getAllKidsByCity };