import axios from "axios";

//Define a URL base da origem para consumo das APIs

export default axios.create({
    baseURL: 'https://www.qedu.org.br/api/',
    headers: {
        'Content-type': 'application/json',
    },
});