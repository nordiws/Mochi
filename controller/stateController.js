import { getAllStates } from "./APIconnection.js";


const statesData = async () => {
    try {
        const data = await getAllStates;
        return data;
    } catch (err) {
        console.log(err);
    }
}

