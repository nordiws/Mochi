import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import router from "./routes/router.js"
import mongoose from "mongoose";
import db from "./controller/DB.js"

//Importando a pasta local
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configurando dotenv
dotenv.config();

// Intanciamento da variável global com os dados do autocomplete
global.citiesData = {};
const fetchData = async () => {
    try {
        citiesData = await db.getTotalCities();
    } catch (error) {
        console.log(error);
    }
}

// Declarando o roteador
const app = express();
app.use(cors());
app.use(express.json());

// Declarando e inicializando o view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configurando arquivos estáticos - static
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

// Conexão ao banco de dados
const { DB_CONNECTION } = process.env;
console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
    DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    (err) => {
        if (err) {
            console.error(`Erro na conexão ao MongoDB - ${err}`);
        }
    }
);
const { connection } = mongoose;
connection.once('open', () => console.log('Conectado ao MongoDB')).then(fetchData());
// Levantando o servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});

// Chamada da função para popular os dados do autocomplete
