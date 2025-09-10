import mongoose from "mongoose";

// Define o esquema para o modelo Todo
const TarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "O título da tarefa é obrigatório."], // Adicionado mensagem de erro personalizada
    trim: true, // Remove espaços em branco do início e fim
    maxlength: [100, "O título da tarefa não pode ter mais de 100 caracteres."], // Limite de caracteres
  },
  concluida: {
    type: Boolean,
    default: false, // O padrão é que a tarefa não está concluída
  },
  criadaEm: {
    type: Date,
    default: Date.now, // Registra automaticamente a data de criação
  },
});

// Exporta o modelo. Se o modelo já existe (em caso de hot-reload), ele o reutiliza.
// Caso contrário, cria um novo modelo 'Todo'.
const Tarefa =  mongoose.models.Tarefa || mongoose.model("Tarefa", TarefaSchema);

export default Tarefa;
