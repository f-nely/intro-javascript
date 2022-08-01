console.log('Trabalhando com Condicionais: ');

const cidades = ['Salvador', 'São Paulo', 'Rio de Janeiro'];

const idadeComprador = 15;

console.log('Destinos possíveis:');

if (idadeComprador >= 18) {
    console.log('Comprado maior de idade');
    cidades.splice(1, 1);
} else {
    console.log('Não é maior de idade e não posso vender');
}
console.log(cidades);