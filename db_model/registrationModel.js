import mongoose from 'mongoose';

//Modelagem dos dados no DB
const registrationSquema = mongoose.Schema({
    guardian_name: {
        type: String,
        require: true,
    },
    guardian_lastname: {
        type: String,
        require: true,
    },
    cpf: {
        type: Number,
        require: true,
    },
    phone_number: {
        type: Number,
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
    city: {
        type: String,
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
        type: Number,
        require: false,
    },
    school_name: {
        type: String,
        require: true,
    },
    school_city: {
        type: String,
        require: true,
    },
    school_state: {
        type: String,
        require: true,
    },
    school_adress: {
        type: String,
        require: false,
    },
    school_cep: {
        type: Number,
        require: false,
    }
});

const registrationModel = mongoose.model('registration', registrationSquema, 'registration');

export default { registrationModel };
