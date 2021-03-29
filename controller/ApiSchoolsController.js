import APIconnection from "./ApiSchoolsConnections.js";

// Filtra os dados da API de escolas para enviar ao front / Estados
const statesData = () => {
    APIconnection.getAllStates().then((response) => {
        const states = response.map(state => {
            const { id, name } = state;
            return {
                id,
                name
            }
        })
        return states;
    }).catch(err => {
        console.log(err);
    })
}

// Filtra os dados da API de escolas para enviar ao front / Cidades
const citiesData = (state) => {
    APIconnection.getAllCities(state).then((response) => {
        const cities = response.map(city => {
            const { id, name, state } = city;
            return {
                id,
                name,
                stateID: state.id,
            }
        })
        return cities;
    }).catch(err => {
        console.log(err);
    })
}

// Filtra os dados da API de escolas para enviar ao front / Escolas
const schoolsData = (city) => {
    APIconnection.getAllSchools(city).then((response) => {
        const schools = response.map(school => {
            const { id, name, location } = school;
            return {
                id,
                name,
                street: location.street,
                number: location.number,
                cep: location.cep
            }
        })
        console.log(schools);
        return schools;
    }).catch(err => {
        console.log(err);
    })
}

export default { statesData, citiesData, schoolsData };