//Modelo de Criação de Usuário -> Criptografia

import mongoose, { Document, Model, Schema } from "mongoose";

//atributos
export interface IUsuario extends Document{
    _id: string;
    nome: string;
    email: string;
    senha: string;
    funcao: string;
}

//criação do Schema do MongoDB (construtor)
const UsuarioSchema:Schema<IUsuario> = new Schema({
   nome: {type: String, required: true},
   email: {type: String, required: true, unique: true},
   senha: {type: String, required: true},
   funcao: {type: String, enum:["tecnico", "gerente", "admin"], required: true}    
});

//método conversão toMap fromMap
                //from                                      //to
const Usuario: Model<IUsuario> = mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario",UsuarioSchema);

export default Usuario;
//componenete Reutilizável