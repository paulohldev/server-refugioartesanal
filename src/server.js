const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
const bodyParser = require('body-parser');
// Configurar a rota para servir as imagens estáticas
app.use(
  '/uploads/images',
  express.static(path.join(__dirname, '..', 'uploads/images')),
);

// Inicia o banco de dados
require('./database/index');

// Configurar o limite do tamanho do corpo da solicitação
app.use(bodyParser.json({ limit: '10mb' })); // Aumente o limite de acordo com suas necessidades
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// middlewares
app.use(express.static(resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Importação das rotas e inicializaçao com o meto app.use()
const usuarioRoutes = require('./routes/usuarioRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

const produtosRoutes = require('./routes/ProdutosRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');

app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/produtos', produtosRoutes);
app.use('/pedidos', pedidosRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado: http://localhost:3000 👍');
});
