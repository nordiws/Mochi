import APIconnection from "./APIconnections.js";


const statesData = () => {
    //const data = {};
    APIconnection.getAllStates().then((response) => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
}


export default { statesData };