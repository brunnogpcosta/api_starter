const express = require('express')
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors')


const app = express();
app.use(express.json()); //fala para aplicação permitir receber json
app.use(cors())

//INCIANDO BANCO DE DADOS
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
requireDir('./src/models/')


//ROTAS
app.use('/api', require('./src/routes'));


app.listen('3001', () => {
    console.log('----------------------------')
    console.log('----------------------------')
    console.log('--- Servidor em Execução ---')
    console.log('----------------------------')
    console.log('----------------------------')
})


