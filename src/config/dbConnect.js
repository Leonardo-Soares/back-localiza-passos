import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

async function connectBancoDados() {
  try {
    const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=${process.env.MONGODB_DB}`
    console.log("🔌 Conectando ao banco de dados...")
    await mongoose.connect(mongoURI)
    console.log("✅ Conectado ao banco de dados")
    return mongoose.connection
  } catch (error) {
    console.log("❌ Erro ao conectar ao banco de dados")
    console.log(error)
  }
}

export default connectBancoDados
