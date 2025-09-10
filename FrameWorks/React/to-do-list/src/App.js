import "./App.css";

import { useState } from "react"
<<<<<<< HEAD
import TodoForm from "./componentes/TodoForms";
import TodoList from "./componentes/TodoList";

//Declaração do Componente
const App = () =>{
  //Controle de Estado
  const [tasks,setTasks] = useState([]);
  // Função para adicionar Tarefa
  const addTask = (task) => {
    //adiciona uma nova tarefa ao vetor de tarefas
    setTasks([...tasks, task]);
  }
  //Função para remover Tarefa
  const removeTask = (index) =>{
    // buscar a tarefa pelo índice e remove
    setTasks(tasks.filter((_,i)=> i !==index));
    // cria um novo vetor sem a tarefa que quero remover
  };

  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTask = {addTask}/>
      <TodoList tasks = {tasks} removeTask = {removeTask}/>
    </div>
  )
};

export default App;
//componente principal da minha aplicação
=======
import ToDoForm from "./componentes/ToDoForm";
import ToDoList from "./componentes/ToDoList";

const App = () =>{
  //lógica do componente
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenamento da lista de tarefas

  const addTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
    //adicionar a nova tarefa ao array de tarefas, ...tarefas => copia todas as tarefas 
    // que já estão adicionads anteriormente
  };

  const removeTarefa = (index) => {
    setTarefas(tarefas.filter((_,i)=> i !== index));
    //filtra o array de tarefas, removendo a tarefa com o índice igual ao index
    //(_,i) mantem o vetor original , com o novo índice)
  };
  //VIEW DO COMPONENTE
  return(
    <div>
      <h1>To-do-List APP</h1>
      <ToDoForm addTarefa={addTarefa}/>
      <ToDoList tarefas={tarefas} removerTarefa={removeTarefa}/>
    </div>
  );
}

export default App;
//componente principal do aplicativo
>>>>>>> 23cb32e74217dfd5f6db3ff72cd6d236b121beb2
