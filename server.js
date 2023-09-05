const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Configurar o body-parser para lidar com JSON
app.use(bodyParser.json());

// Conectar ao banco de dados (usando Mongoose)
mongoose.connect('mongodb://localhost/minha_base_de_dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão ao banco de dados:'));
db.once('open', () => {
  console.log('Conexão com o banco de dados estabelecida');
});

// Definir rotas
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
