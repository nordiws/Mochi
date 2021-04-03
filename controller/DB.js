import registration from "../model/registration.js";
import citiesModel from "../model/citiesModel.js";

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
        const fechData = await registration.find({ city_id: city });
        let current = "";
        if (fechData == []) {
            fechData[0] = null;
        } else {
            // Seleciona os valores a utilizar
            const allStudents = fechData.map(student => {
                const { school_name, school_id, city_id } = student;
                return {
                    school_name,
                    school_id,
                    city_id
                }
            });

            allStudents.sort((a, b) => (a.school_id > b.school_id) ? 1 : -1);
            // Conta quantas crinaças por escola existem no registro
            let currentId = "";
            const schoolsId = [];
            allStudents.forEach(student => {
                if (student.school_id != currentId) {
                    currentId = student.school_id;
                    schoolsId.push(currentId)
                } else {
                    return
                }
            })
            const totalStudents = [];
            for (let i = 0; i < schoolsId.length; i++) {
                let count = 0;
                allStudents.forEach(student => (student.school_id == schoolsId[i] && count++))
                const obj = {};
                obj['school_id'] = schoolsId[i];
                obj['total_std'] = count;
                totalStudents.push(obj);
            }
            // Filtra um aluno por escola
            const selectedStudents = [];
            allStudents.forEach(student => {
                if (student.school_id != current) {
                    current = student.school_id;
                    selectedStudents.push(student);
                } else {
                    return;
                }
            })
            //console.log(selectedStudents);
            return [selectedStudents, totalStudents];
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllStudentsBySchools = async (school) => {
    try {
        var select_fields = { "_id": 1, "std_name": 1, "std_nickname": 1, "std_grade": 1, "school_name": 1, "products_list": 1 }
        return await registration.find({ "school_id": school }, select_fields);
    } catch (error) {
        console.log(error);
    }
}


const getStudentById = async (id) => {
    try {
        const fechData = await registration.findById({ _id: id });
        return fechData;
    } catch (e) {
        console.log(e);
    }
}

const getTotalCities = async () => {
    try {
        const fetchData = await citiesModel.find();
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
