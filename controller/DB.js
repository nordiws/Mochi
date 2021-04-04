import registration from "../model/registration.js";
import citiesModel from "../model/citiesModel.js";
import ApiSchools from "./ApiSchools.js"


// Salvando os dados do Form na base de dados
const saveForm = async (formData) => {
    try {
        const registryDB = new registration(formData); // ajustar com os identificadores dos campos do Form
        await registryDB.save(function(err){
            return true;
        });
        return false;
    } catch (err) {
        return false;
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

            // Obtem os IDs das escolas no DB
            allStudents.sort((a, b) => (a.school_id > b.school_id) ? 1 : -1);
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

            // Conta quantas crinaças por escola existem no registro
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
            return [selectedStudents, totalStudents];
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllStudentsBySchools = async (schoolId, city_id) => {
    try {
        var select_fields = { "_id": 1, "std_name": 1, "std_nickname": 1, "std_grade": 1, "school_name": 1, "products_list": 1 }
        const studentsData = await registration.find({ "school_id": schoolId }, select_fields);
        const fetchData = await ApiSchools.schoolsData(city_id);
        const schoolData = fetchData.filter(school => {
            if (school.id === schoolId) {
                return school;
            }
        })
        return [studentsData, schoolData];
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

const getRandomSchools = async () => {
    try {
        // Verifica a quantidade de escolas com alunos cadastrados e salva os IDs
        const allStudents = await registration.find();
        allStudents.sort((a, b) => (a.school_id > b.school_id) ? 1 : -1);
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
        // Puxa os dados de cada escola obtida no codigo anterior
        const selectedSchools = [];
        for (let id of schoolsId) {
            try {
                const stdData = await registration.find({ school_id: id }, null, { limit: 1 });
                const mapedStudents = stdData.map(student => {
                    const { school_name, school_id, city, city_id, state } = student;
                    return {
                        school_name,
                        school_id,
                        city,
                        city_id,
                        state
                    }
                })
                selectedSchools.push(...mapedStudents);
            } catch (error) {
                console.log(error);
            }
        }
        // Conta quantas crinaças por escola existem no registro
        const totalSchools = [];
        for (let i = 0; i < schoolsId.length; i++) {
            let count = 0;
            allStudents.forEach(student => (student.school_id == schoolsId[i] && count++))
            const obj = {};
            obj['school_id'] = schoolsId[i];
            obj['total_std'] = count;
            totalSchools.push(obj);
        }
        return [selectedSchools, totalSchools];
    } catch (error) {
        console.log(error);
    }
}

export default { saveForm, getAllStudentsBySchools, getStudentById, getTotalCities, getCitiesWithStudents, getRandomSchools };
