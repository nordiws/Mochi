import APIconnection from "./APIconectionsRoutes.js";


const statesData = async () => {
    APIconnection.getAllStates.then({ data })
}


export default { statesData };