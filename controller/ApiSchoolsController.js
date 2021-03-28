import APIconnection from "./ApiSchoolsConnections.js";

// Importa o JSON dos estados
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

// Importa o JSON das cidades
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

// Importa o JSON das escolas
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