// rotas GET e POST

import Tarefa from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";
import { NextResponse } from "next/server";

//get
export async function GET(){
  await connectMongo(); //connecta com o mongoDB
  try {
    const tarefas = await Tarefa.find({}); //retorna as tarefas
    //usando o médoto NextResponse=> fazer a requisições http
    return NextResponse.json({success: true, data: tarefas});
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

//post
export async function POST(tarefa){
    try {
        await connectMongo();
        const data = await tarefa.json(); //transforma os dados em Json para enviar na requisição http
        const body = await Tarefa.create(data); //cria a tarefa no BD
        return NextResponse.json({success: true, data: body});
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}