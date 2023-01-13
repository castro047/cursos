console.log(`trabalhando com condicionais`);
const listaDeDestinos = new Array(`salvador`, `são paulo`, `rio de janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true

console.log("destinos posiveis");
console.log(listaDeDestinos);


//if (idadeComprador >= 18) {
//console.log("Comprador maior de idade");
//listaDeDestionos.splice(1, 1); //removendo item
//else if (estaAcompanhada == true) {
//console.log("Comprador está acompanhado");
//} else {
// console.log("Não é maior de Idade e não posso vender");

//}



if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Boa viagem");
    listaDeDestinos.splice(2, 1); //removedo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log ("Boa viagem");
}else{
    console.log("você não poode embarcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
