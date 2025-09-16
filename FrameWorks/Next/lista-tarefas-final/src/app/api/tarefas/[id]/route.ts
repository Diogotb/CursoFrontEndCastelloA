//PATCH - DELETE // rotas com parametro ID

import { deleteTarefa, updateTarefa } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

interface Parametros {
  id: string;
}

//PATCH
export async function PATCH(req: NextRequest, { params }: { params: Parametros }) {
  try {
    const data = await req.json();
    const { id } = params; //pega o id da Rota
    const tarefaAtualizada = await updateTarefa(id, data);
    if(!tarefaAtualizada){
        return NextResponse.json({success:false,error:"Not Found"})
    }
    return NextResponse.json({ success: true, data: tarefaAtualizada });
  } catch (e) {
    return NextResponse.json({ success: false, error: e });
  }
}

//DELETE
export async function DELETE({ params }: { params: Parametros }) {
  try {
    const { id } = params;
    const resposta = await deleteTarefa(id);
    if (!resposta) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (e) {
    return NextResponse.json({ success: false, error: e });
  }
}
