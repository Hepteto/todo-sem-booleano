// config inicial
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const todoRoute = require('./routes/todoRoute');

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas da API
app.use('/todo', todoRoute);

// Rota/ Endpoint inicial
app.get('/', (req, res) => {
    res.json({ message: 'Testando API' });
});

// Conectar ao banco de dados e iniciar o servidor
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Conectamos ao mongo DB");
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch((err) => console.error(err));
