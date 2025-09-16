import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose
    .connect(DATABASE_URL)
    .then("Conectado com Mongo")
    .catch((err) => console.error(err));
};

export default connectMongo;
