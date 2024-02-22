let entrada = require ('prompt-sync')();

/*let idade = entrada('Digite sua idade: ');

let idadeInt = parseInt(idade);

if (idade < 18) {
    console.log('Menor');
} else if (idade === 18){
    console.log('Tem 18');
} else {
    console.log('Maior');
}

console.log(`Sua idade é ${idade}`);*/

/* O prompt-sync ele permite que possamos usar o comando 'entrada =',
um pacote npm através do 'require()'.

== ou Ele ignora o "tipo" da variavel, já o === ele
considera até mesmo o tipo da variavel. Como o 18 não 
está entre aspas ele é number e não String como está na
resposta da condicional.

O let idadeInt = parseInt(idade); --> Nada mais é que
transformar a variavel 'idade' em Inteiro, possibilitando
que ele seja Number ao inves de String.

parseFloat ele transformará para decimais.

*/


let num = parseInt (entrada('Digite um número para visualizar a tabuada!'))

let cont = 1;

/*
while(cont <= 10){
    let calc = num * cont;
    console.log(`${num} X ${cont} = ${calc}`);
    cont++;
}
*/

for (let cont =1; cont<=10; cont++){
    let calc = num * cont;
    console.log(`${num} X ${cont} = ${calc}`);
}
