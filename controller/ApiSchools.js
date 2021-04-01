import APIconnection from "../connection/ApiSchools.js";

// Filtra os dados da API de escolas para enviar ao front / Estados
const statesData = () => {
    const data = APIconnection.getAllStates().then((response) => {
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
    return data;
}

// Filtra os dados da API de escolas para enviar ao front / Cidades
const citiesData = (state) => {
    const data = APIconnection.getAllCities(state).then((response) => {
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
    return data;
}

// Filtra os dados da API de escolas para enviar ao front / Escolas
const schoolsData = (city) => {
    const data = APIconnection.getAllSchools(city).then((response) => {
        const schools = response.map(school => {
            const { id, name } = school;
            return {
                id,
                name
            }
        })
        return schools;
    }).catch(err => {
        console.log(err);
    })
    return data;
}

export default { statesData, citiesData, schoolsData };
