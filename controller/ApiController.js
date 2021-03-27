import APIconnection from "./APIconnections.js";

// Importa o JSON dos estados
const statesData = () => {
    APIconnection.getAllStates().then((response) => {
        //console.log(response); // logica de tratamento dos dados
    }).catch(err => {
        console.log(err);
    })
}

// Importa o JSON das cidades
const citiesData = () => {
    APIconnection.getAllCities().then((response) => {
        //console.log(response); // logica de tratamento dos dados
    }).catch(err => {
        console.log(err);
    })
}

// Importa o JSON das escolas
const schoolsData = () => {
    APIconnection.getAllSchools().then((response) => {
        //console.log(response); // logica de tratamento dos dados
    }).catch(err => {
        console.log(err);
    })
}

export default { statesData, citiesData, schoolsData };