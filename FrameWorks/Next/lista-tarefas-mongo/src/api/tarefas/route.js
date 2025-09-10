// rotas GET e POST

import Tarefa from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";
import { NextResponse } from "next/server";

//get
export async function GET(){
    try {
        await connectMongo(); //connecta com o mongoDB
        const tarefas = await Tarefa.find({}); //retorna as tarefas
        //usando o médoto NextResponse=> fazer a requisições http
        return NextResponse.json(tarefas, {status: 200});
    } catch (error) {
        return NextResponse.json(
            {error: "Erro ao buscar as tarefas"},
            {status: 500}
        );
    }
}

//post
export async function POST(tarefa){
    try {
        await connectMongo();
        const data = await tarefa.json(); //transforma os dados em Json para enviar na requisição http
        const body = await Tarefa.create(data); //cria a tarefa no BD
        return NextResponse.json(body, {status:201});
    } catch (error) {
        return NextResponse.json(
          { error: "Erro ao criar as tarefas" },
          { status: 500 }
        );
    }
}