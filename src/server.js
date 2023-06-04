const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importação das rotas e inicializaçao com o metodo app.use()
const usuarioRoutes = require('./routes/usuarioRoutes');
// const vendedorRoutes = require('./routes/vendedorRoutes');
// const compraRoutes = require('./routes/compraRoutes');
// const AdmRoutes = require('./routes/AdmRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

const produtosRoutes=require('./routes/produtosRoutes');
const pedidosRoutes=require('./routes/pedidosRoutes');

app.use('/usuarios', usuarioRoutes);
// app.use('/compras', compraRoutes);
app.use('/categorias', categoriaRoutes);

app.use('/produtos',produtosRoutes);

app.use('/pedidos',pedidosRoutes);
// app.use('/artesao', vendedorRoutes);
// app.use('/administracao', AdmRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado: http://localhost:3000 👍');
});
