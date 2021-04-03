import mongoose from 'mongoose';

//Modelagem dos dados no DB
let schema = mongoose.Schema({
    type: String,
    id: String,
    url: String,
    api_url: String,
    income: Number,
    name: String,
    nameToOrder: String,
    slug: String,
    schools_count: Number,
    schools_prova_brasil_count: Number,
    ibge_code: String,
    location: {
        latitude: String,
        longitude: String
    },
    state: {
        id: String,
        slug: String,
        api_url: String,
        name: String,
        acronym: String
    }
})
// Criando o modelo
const schoolsModel = mongoose.model('citie', schema);

export default schoolsModel;