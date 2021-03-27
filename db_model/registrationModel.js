import mongoose from 'mongoose';

//Modelagem dos dados no DB
let schema = mongoose.Schema({
    guardian_name: {
        type: String,
        require: true,
    },
    guardian_lastname: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    phone_number: {
        type: String,
        require: true,
    },
    lastModified: {
        type: Date,
        default: Date.now,
    },
    donation: {
        type: Boolean,
        default: false,
    },
    cep: {
        type: String,
        require: true,
    },
    street: {
        type: String,
        require: true,
    },
    number: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    city_id: {
        type: Number,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    chld_name: {
        type: String,
        require: true,
    },
    chld_nickname: {
        type: String,
        require: false,
    },
    chld_age: {
        type: Number,
        require: false,
    },
    chld_grade: {
        type: String,
        require: false,
    },
    school_name: {
        type: String,
        require: true,
    },
    school_address: {
        type: String,
        require: false,
    },
    school_add_number: {
        type: String,
        require: false,
    },
    school_cep: {
        type: String,
        require: false,
    }
});

const registrationModel = mongoose.model('mochi', schema, 'mochi');

export default registrationModel;
