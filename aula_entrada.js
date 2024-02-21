/*Executar como node aula_entrada.js no cmd. Ele permitirá que 
que possamos interagir com o node/terminal/prompt*/
let entrada = require ('prompt-sync')();

//Criamos uma variavel e imprimimos
let nome;
nome = entrada('Digite seu nome: ');
console.log(`O nome digitado foi ${nome}`);

entrada('Pressione enter para encerrar!');