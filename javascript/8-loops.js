console.log(`\n trabalhando com condicionais`);
const listaDeDestinos = new Array(`salvador`, `são paulo`, `rio de janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "salvador";

console.log("\n destinos posiveis");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true)

let contador = 0;
destinoExiste = false;
while(contador<3){
   if(listaDeDestinos[contador] == destino){
     destinoExiste = true;  
       break;  
   }
  contador +=1;
};

console.log("destino existe: ", destinoExiste);
 
if(podeComprar && destinoExiste){
    console.log("boa viagem");
}else[
    console.log("desculpe tivemos um erro!")
]

for(let cont = 0 ;cont < 3 ; cont---++){
   if(listaDeDestinos[contador] == destino){
     destinoExiste = true;  
   }
};