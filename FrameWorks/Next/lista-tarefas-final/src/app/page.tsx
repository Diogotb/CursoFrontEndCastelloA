//indicação que quem vai usar a tela
"use client"

import { Itarefa } from "@/models/Tarefa"
import { METHODS } from "http";
import { ChangeEvent, FormEvent, useEffect, useState } from "react"


export default function Home(){
  //elementos do eReact UseState e UseEffect
  //useState => armazenamento LocalStorage 
  //armazenar as tarefas em um vetor 
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  //armazenar o texto do input (campo de texto da página)
  const [newTarefa, setNewTarefa] = useState<string>("");

  //useEffect => permite atualizaç~eos da Tela (sem o recarrecamento da tela)
  useEffect(()=>{
    buscarTarefas();//carregar todas as tarefas do BD
  }, []);

  //carregar tarefas
  const buscarTarefas = async() =>{
    try {
      const resposta = await fetch("/api/tarefas"); // realizar conexão http com o backend
      const data =  await resposta.json();
      if(data.success){
        setTarefas(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //adicionar Tarefa
  const addTarefa = async(e:FormEvent) => {
    e.preventDefault(); //evita o carregamento da tela , medida padrãoao apertar botões submit
    if(!newTarefa.trim()) return; //evita enviar tarefa vazia
    try {
      const resultado = await fetch("/api/tarefas",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({titulo:newTarefa})
      });
      const data = await resultado.json();
      if(data.success){
        //atualizar a lista de tarefas
        //cliente-side
        setTarefas([...tarefas, data.data]);//adiciona uma nova tarefa no vator
        //server-side
        setNewTarefa("");
        //buscarTarefas();
      }
    } catch (error) {
      console.error(error)
    }
  }

  //metodo atualizar tarefa
  const atualizarTarefa = async(id:string, status:boolean) =>{
    try {
      const resposta = await fetch(`/api/tarefas/${id}`,
        {
          method: "PATCH",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({concluida: !status})
        }
      );
      const data = await resposta.json();
      if(data.success){
        buscarTarefas();
      }
    } catch (error) {
      console.error(error);
    }
  }

  //metodo deletar tarefa
  const delTarefa = async(id:string)=>{
    try {
      const resposta = await fetch(`/api/tarefas/${id}`,
        {method: "DELETE"}
      );
      const data = await resposta.json();
      if(data.success){
        buscarTarefas();//serve-side
      }
    } catch (error) {
      console.error(error);
    }
  }

  //fazer a construção do html
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTarefa}>
        <input type="text"
        value={newTarefa}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>setNewTarefa(e.target.value)}
        placeholder="Adicionar Tarefa" />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa)=>(
          <li key={tarefa._id.toString()}>
            <input type="checkbox" 
            checked={tarefa.concluida}
            onChange={()=>atualizarTarefa(tarefa._id.toString(),tarefa.concluida)}/>
            {tarefa.titulo}
            <button onClick={()=>delTarefa(tarefa._id.toString())}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );

}