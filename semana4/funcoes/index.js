// -----------------------------------EXEMPLOS----------------------------------- //

// Exemplo 1 - Função nomeada
// function dizOi(){
//     console.log("Oi!")
// }

// for(let i = 5; i !== 0; i--){
//     dizOi()
// }

// Exemplo 2 - Função nomeada com argumentos
// function somaDoisNumeros(num1, num2){
//     const soma = num1 + num2
//     console.log(soma)
// }

// const primeiroNum = Number(prompt("Insira o primeiro numero"))
// const segundoNum = Number(prompt("Insira o segundo numero"))

// somaDoisNumeros(primeiroNum, segundoNum)


// Exemplo 3 - Função nomeada com argumentos e retorno
// function somaDoisNumeros(num1, num2){
//     const soma = num1 + num2
//     return soma
// }

// const resultado = somaDoisNumeros(12,3)
// console.log(resultado*3)


// Exemplo 4 - Função não-nomeada com argumentos e retorno
// let somaDoisNumeros = function (num1, num2){
//     const soma = num1 + num2
//     return soma
// }

// const resultado = somaDoisNumeros(12, 4)
// console.log(resultado)


// Exemplo 5 - Função não-nomeada do tipo arrow function com argumentos e retorno
// let somaDoisNumeros = (num1, num2) => {
//     return num1 + num2
// }

// const resultado = somaDoisNumeros(2, 4)
// console.log(resultado)

// Exemplo 6 - Ordem das declarações
// Hoisting

// dizOi()
// dizTudoBem()
// dizTchau()

// function dizOi(){
//     console.log("Oi")
// }

// const dizTudoBem = function(){
//     console.log("Tudo bem?")
// }

// let dizTchau = () => {
//     console.log("Tchau")
// }


// ----------------------------------EXERCÍCIOS---------------------------------- //

// Exercício 1
// function manipulaArray(meuArray){
//     for(item of meuArray){
//         console.log(item)
//     }
//     return meuArray.length
//     console.log("oi") // Esse código nunca é executado
// }

// const numeros = [1, 2, 3, 4, 5, 6]
// const tamanhoNumeros = manipulaArray(numeros)
// console.log("Tamanho: ", tamanhoNumeros)

// const palavras = ["Letícia", "Alves", "Chijo"]
// const tamanhoPalavras = manipulaArray(palavras)
// console.log("Tamanho palavras: ", tamanhoPalavras)


// Exercício 2
// const manipulaArray = (meuArray) => {
//     for(let i = 0; i < meuArray.length; i++){
//         console.log(meuArray[i])
//     }
//     return meuArray.length
// }

// const imprimeMensagem = (mensagem) => {
//     console.log(mensagem)
// }

// const numeros = [1, 2, 3, 4, 5, 6]
// const numeros2 = [12, 13, 14]
// const tamanhoNumeros = manipulaArray(numeros)
// console.log("Tamanho: ", tamanhoNumeros)

// const palavras = ["Letícia", "Alves", "Chijo"]
// const tamanhoPalavras = manipulaArray(palavras)
// console.log("Tamanho palavras: ", tamanhoPalavras)

// imprimeMensagem(numeros)