import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';
import connectBancoDados from './config/dbConnect.js';

const conexao = await connectBancoDados();

conexao.on('error', (error) => {
  console.log("❌ Erro ao conectar no banco de dados", error);
});

conexao.once('open', () => {
  console.log("✅ - Conectado ao banco de dados");
});

const app = express();

app.use(cors()); // Permite que qualquer origem acesse a API

// Configuração das rotas
routes(app);

export default app;
