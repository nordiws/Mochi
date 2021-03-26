import mongoose from 'mongoose';

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
    chld_name: {
        type: String,
        require: true,
    },
    chld_age: {
        type: Number,
        require: false,
    },
    chld_grade: {
        type: Number,
        require: false,
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
    cep: {
        type: String,
        require: true,
    },
    school_state: {
        type: String,
        require: true,
    },
    school_city: {
        type: String,
        require: true,
    },
    school_name: {
        type: String,
        require: true,
    },
    lastModified: {
        type: Date,
        default: Date.now,
    },
});

const registrationModel = mongoose.model('registration', registrationSquema, 'registration');

export { registrationModel };
