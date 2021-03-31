import registration from "../model/registration.js";
import schoolsModel from "../model/schoolsModel.js";

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
        console.log(fetchData);
        //if (fechData)
        const allStudents = fechData.map(kid => {
            const { _id, std_name, std_nickname, std_grade } = kid;
            return {
                _id,
                std_name,
                std_nickname,
                std_grade
            }
        });
        return allStudents;
    } catch (error) {
        console.log(error);
    }
}


const getAllStudentsOfSchool = async (school) => {
    try {
        const fechData = await registration.find({ school_id: school });
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
    } catch (error) {
        console.log(error);
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

const getTotalCities = async () => {
    try {
        const fetchData = await schoolsModel.find();
        const allCities = fetchData.map(city => {
            const { id, name, state } = city;
            return {
                id,
                name: name + " - " + state.acronym,
                city: name
            }
        })
        return allCities;
    } catch (error) {
        console.log(error);
    }
}

export default { saveForm, getAllStudentsOfSchool, getStudentById, getTotalCities };
