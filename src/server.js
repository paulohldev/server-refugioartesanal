const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importação das rotas e inicializaçao com o metodo app.use()
const homeRoutes = require('./routes/homeRoutes');
app.use('/', homeRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado: http://localhost:3000 👍');
});
