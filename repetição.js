let entrada = require ('prompt-sync')();

let idade = entrada('Digite sua idade: ');

if (idade < 18) {
    console.log('Menor');
} else if (idade == 18){
    console.log('Tem 18');
} else {
    console.log('Maior');
}