import registration from "../model/registration.js";

// Salvando os dados do Form na base de dados
const saveForm = async (formData) => {
    try {
        const registryDB = new registration(formData); // ajustar com os identificadores dos campos do Form
        await registryDB.save();
        console.log("Cadastro inserido");
    } catch (err) {
        console.log("Falha ao inserir o cadastro. " + err);
    }
}

// Importando dados da base de dados
const getAllStudentsByCity = async (city) => {
    try {
        const fechData = await registration.find({ city_id: city });
        const allStudents = fechData.map(kid => {
            const { _id, std_name, std_nickname, std_grade } = kid;
            return {
                _id,
                std_name,
                std_nickname,
                std_grade
            }
        });
        console.log(allStudents);
        return allStudents;
    } catch (e) {
        console.log(e);
    }
}

const getStudentById = async (id) => {
    try {
        const fechData = await registration.findById({ _id: id });
        console.log(fechData);
        return fechData;
    } catch (e) {
        console.log(e);
    }
}

export default { saveForm, getAllStudentsByCity, getStudentById };
