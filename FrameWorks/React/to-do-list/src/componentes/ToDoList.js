import "./ToDoList.css";

const ToDoList = ({ tarefas , removerTarefa}) =>{
    return(
        <ul>
            {tarefas.map((tarefa,index) =>(
                <li key={index}>
                    {tarefa}
                    <button onClick={()=>removerTarefa(index)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;