//componente para criar o formulário para inserir uma nova tarefa
//import do css
import "./ToDoForm.css"

import { useState } from "react"

const ToDoForm = ({addTarefa}) =>{
    //estado para armazenar o valor do input (campo para inserir a tarefa)
    const [tarefa, setTarefa] = useState("");
    //definir o useState => usa a memoria local do navegador para armazenar as mudanças de estado
    //[primeiro campo o armazenamento, segundo campo a função de mudança de estado]

    //função para atualizar o estado com o valor do input
    const handleSubmit = (e) =>{
        //impedir o comportamento padrão do formulário
        e.preventDefault();
        //verificar se o campo não esta vazio
        if(tarefa.trim()!==""){
            //adiciono a tarfea ao array de tarefas
            addTarefa(tarefa);
            //limpo o campo do input
            setTarefa("");
        } 
    };
    return(
        //retorna o formulário (o view)
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Insira uma Nova Tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}/>
            <button className="btn_enviar" type="submit">Adicionar</button>
        </form>
    );

};

export default ToDoForm;
//componente para criar um formulário para inserir uma nova tarefa
//pode ser reutilizado em outros componentes (export)