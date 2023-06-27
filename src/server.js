const express = require("express");
const app = express();

// Inicia o banco de dados
require("./database/index");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importação das rotas e inicializaçao com o meto app.use()
const usuarioRoutes = require("./routes/usuarioRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");

const produtosRoutes = require("./routes/ProdutosRoutes");
const pedidosRoutes = require("./routes/pedidosRoutes");

app.use("/usuarios", usuarioRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtosRoutes);
app.use("/pedidos", pedidosRoutes);


// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor iniciado: http://localhost:3000 👍");
});