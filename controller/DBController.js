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

export default { saveForm };