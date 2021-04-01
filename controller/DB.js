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
const getCitiesWithStudents = async (city) => {
    try {
        const fechData = await registration.find({ city_id: city }, null, { limit: 1 });
        if (fechData == []) {
            fechData[0] = null;
        } else {
            const allStudents = fechData.map(student => {
                const { school_name, school_id, city_id } = student;
                return {
                    school_name,
                    school_id,
                    city_id
                }
            });
            return allStudents;
        }
    } catch (error) {
        console.log(error);
    }
}


const getAllStudentsBySchools = async (school) => {
    try {
        var select_fields = {"_id": 1, "std_name": 1, "std_nickname":1, "std_grade": 1, "school_name": 1}
        return await registration.find({ "school_id" : school }, select_fields);
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

export default { saveForm, getAllStudentsBySchools, getStudentById, getTotalCities, getCitiesWithStudents };
