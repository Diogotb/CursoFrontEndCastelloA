import mongoose from "mongoose";

// Cache para armazenar a conexão MongoDB.
// Isso evita que o Next.js crie novas conexões a cada hot-reload em desenvolvimento.
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  if (cached.conn) {
    // Se já houver uma conexão cacheada, retorna-a.
    return cached.conn;
  }

  if (!cached.promise) {
    // Se não houver uma promise de conexão, cria uma nova.
    const opts = {
      bufferCommands: false, // Desabilita o buffer de comandos do Mongoose.
      // Adicione outras opções de conexão conforme necessário para sua configuração.
      // useNewUrlParser: true, // Já é padrão no Mongoose 6+
      // useUnifiedTopology: true, // Já é padrão no Mongoose 6+
    };

    cached.promise = mongoose
      .connect(process.env.DATABASE_URL, opts)
      .then((mongoose) => {
        console.log("Conectado ao MongoDB com sucesso!");
        return mongoose;
      })
      .catch((err) => {
        console.error("Erro ao conectar ao MongoDB", err);
        // É importante resetar a promise em caso de erro para tentar novamente em futuras chamadas.
        cached.promise = null;
        throw err; // Rejeita a promise para que o erro seja tratado por quem chamou.
      });
  }

  // Aguarda a promise de conexão e armazena a conexão.
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;
