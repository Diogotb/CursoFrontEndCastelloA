// Galeria de Imagens Dinâmicas -> DOM

//elements com DOM
let inputUpload = document.getElementById("upload");
let btnAddImagem = document.getElementById("addImagem");
let divGaleria = document.getElementById("galeria");
let divCarrossel = document.getElementById("carrossel");

//vetor para receber as imagens
let imagensUrl = [];

//ouvinte para o btnAddImagem
btnAddImagem.addEventListener("click", ()=>{
    let imagemURL = inputUpload.value.trim();
    if(imagemURL ==="") return;
    imagensUrl.push(imagemURL);
    atualizarGaleria(); //função para atualizar as imagens da galeria
    atualizarCarrossel(); //função para atualizar as imagens do carrossel
    inputUpload.value = "";
});

//atualizarGaleria
function atualizarGaleria(){
    divGaleria.innerHTML = "";
    imagensUrl.forEach((imagem,index)=>{
        //criar Card para colocar as imagens
        const divCard = document.createElement("div");
        divCard.classList.add("card");//adicionando a classe card ao div
        //criar Imagem para receber a url
        const imgCard = document.createElement("img");
        imgCard.src = imagem;
        //criar um bottão -> remover image
        const btnRemove = document.createElement("button");
        btnRemove.innerText = "X";
        btnRemove.classList.add("remove");
        btnRemove.addEventListener("click", ()=>{ //remover a imagem da galeria
            imagensUrl.splice(index, 1); //remover a imagem pelo index do vetor
            atualizarGaleria(); //recursão
            atualizarCarrossel();
        });
        divCard.appendChild(imgCard);
        divCard.appendChild(btnRemove);
        divGaleria.appendChild(divCard);
    });
}

//função atualizar carrossel
function atualizarCarrossel(){
    divCarrossel.innerHTML = ""; //limpa o carrossel

    imagensUrl.forEach(imagem => {
        let img = document.createElement("img"); //criando uma tag<html> img
        img.src = imagem; //atribuindo o endereço da imagem -(net)/local
        img.style.width = "100%"; //garante o ajuste de 100% da imagem
        divCarrossel.appendChild(img); //img -> div
    });

    //ajuste do carrossel -> movimetação
    divCarrossel.style.width = `${imagensUrl.length*100}%`//ajusta a largura do carrossel
    //iniciar o carrossel
    inciarCarrossel();
}
//função para inciar carrossel
function inciarCarrossel(){
    let index = 0;

    setInterval(()=>{
        index = (index+1)%imagensUrl.length;
        divCarrossel.style.transition = `transform ${(1+imagensUrl.length)/imagensUrl.length}s ease-in-out`;//troca as imagens
        divCarrossel.style.transform = `translateX(-${index*(100/imagensUrl.length)}%)`//move corretamente
    },2000);
}