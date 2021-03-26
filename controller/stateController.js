import APIconnection from "./APIconnection.js";


const statesData = async () => {
    APIconnection.getAllStates.then({ data })
}


export default { statesData };