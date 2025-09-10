import mongoose from 'mongoose';

//arrow function -> conexão
const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //esabelece a conexão com o banco
        .then(()=>console.log("Conectado ao MongoDB"))
        .catch(err => console.error("Erro ao conectar no MongoDB", err));
}

export default connectMongo;