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

//Variavel que recebe um valor Booleano
let trabalha = true;
console.log(trabalha);

//Ambos fazem o mesmo resultado. Aqui trabalhamos com condicionais e concatenação//
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
    'vTrabalha: ' + typeof(trabalha)
 );

 //Variavel do tipo Objeto
 let endereco = {
    'rua' : 'Brasil',
    'num' : 311,
    'bairro' : 'centro',
    'cidade' : 'bastos',
    'uf' : 'SP',
    'mora ': true
 };

 console.log(endereco);
 console.log(typeof(endereco));

 //Variavel do tipo Array/Lista
 let frutas = ['banana', 'maçã', ' mamão'];
 console.log(frutas[0]);

 //Variavel do tipo Array/Lista em Duas dimensões
 let velha = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
 ];
 console.log(velha [2][2]);
 console.log(typeof(velha));

 //Array.isArray ele expressa uma resposta booleana [..]
 console.log(Array.isArray(velha));

 /*[..] Quando há uma condicional escrita em String ele 
 devolverá em String ao invés de Booleana*/
 console.log((Array.isArray(velha)) ? 'Array' : 'Não é array');
 console.log((Array.isArray(endereco)) ? 'Array' : 'Não é array');