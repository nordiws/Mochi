import APIconnection from "./APIconnections.js";

// Importa o JSON dos estados
const statesData = () => {
    APIconnection.getAllStates().then((response) => {
        //console.log(response); // logica de tratamento dos dados
    }).catch(err => {
        console.log(err);
    })
}


export default { statesData };