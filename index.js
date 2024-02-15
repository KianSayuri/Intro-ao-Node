//Variavel String
console.log("Hello World");
let nome = 'Sayuri';
console.log(nome);

//Variavel Numerica
let idade = 23;
let altura = 1.75;

//Concatenizar ou o mesmo que trocar o tipo da variavel
console.log('Nome: ' + nome + ' - Idade: ' + idade + ' anos');
console.log(`Nome: ${nome} - Idade: ${idade} anos`);

//Variavel Booleana
let trabalha = true;
console.log(trabalha);

//Ambos fazem o mesmo resultado
console.log('Trabalha: ' + (trabalha === true ? 'Sim' : 'Não'));
if (trabalha === true){
    console.log('Trabalha: Sim');
}else{
    console.log('Trabalha: Não');
}

// Atalho do Comentario do JS = CTRL + ;
console.log(
    'vNome: ' + typeof(nome) + '\n' +
    'vIdade: ' + typeof(idade) + '\n' +
    'vAltura: ' + typeof(altura) + '\n' +
    'vTrabalha: ' + typeof(trabalha) + '\n' +
    'vEndereco: ' + typeof(endereco) + '\n' +
    'vFrutas: ' + typeof(frutas)
 );

 let endereco = (
    'rua' : 'Brasil',
    'num' : 311,
    'bairro' : 'centro',
    'cidade' : 'bastos',
    'uf' : 'SP',
    'mora' : true
 );

 let frutas = ['banana', 'maçã', ' mamão'];

 let velha = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
 ];
 console.log(velha [2][2]);