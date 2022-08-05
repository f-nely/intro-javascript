const cidades = ['Salvador', 'São Paulo', 'Rio de Janeiro'];

const idadeComprador = 25;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salvador';

console.log('Destinos possíveis:');
console.log(cidades);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < cidades.length) {
    if (cidades[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador++;
}

console.log('Destino existe: ', destinoExiste);

if (podeComprar && destinoExiste) {
    console.log('Boa Viagem!!');
} else {
    console.log('Desculpe tivemos um erro.');
}