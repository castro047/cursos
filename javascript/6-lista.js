console.log(`trabalhando com listas`);
// const salvador = `salvador`;
// const saoPaulo = `são paulo`;
// const rioDeJeneiro = `rio de janeiro`;

const listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `rio de janeiro`
);

listaDeDestinos.push (`curitiba`) //adicionando um item na lista
console.log("destinos posiveis")
//console.log(salvado)r,saoPaulo,rioDeJeneiro)
console.log (listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log (listaDeDestinos);

console.log (listaDeDestinos[1]), console.log (listaDeDestinos[0]);