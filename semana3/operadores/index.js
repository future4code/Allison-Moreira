// Exercícios de interpretação de código

// ========================================  // ========================================


// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

//     // -->>> a. false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)

//     // -->>> b. false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

//     // -->>> c. true

// console.log("e. ", typeof resultado)

//     // -->>> e. boolean



// ========================================  // ========================================


// 2. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

        // let array
        // console.log('a. ', array)

        //     //     // -->>> a.  undefined

        // array = null
        // console.log('b. ', array)

        //     //     // -->>> b.  null

        // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        // console.log('c. ', array.length)

        //     //     // -->>> c.  11

        // let i = 0
        // console.log('d. ', array[i])

        //     //     // -->>> d.  3

        // array[i+1] = 19
        // console.log('e. ', array)

        //     //     // -->>> e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        // const valor = array[i+6]
        // console.log('f. ', valor)

        //     //     // -->>> f.  9 


        
// ========================================  // ========================================



// // <!-- **Exercícios de escrita de código**

// // 1. Faça um programa que:

// // a. Pergunte a idade do usuário

//     let idade = prompt("Qual é sua idade? ")
//     console.log(idade)

// // b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//     let idadeMelhorAmigo = prompt("Qual é a idade do seu melhor amiga ou amigo? ")
//     console.log(idadeMelhorAmigo)

// // c. **Imprima na tela** a seguinte mensagem: 
// //"Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

//     resultado1 = idade > idadeMelhorAmigo
//     console.log("Sua idade é maior do que a do seu melhor amigo? ", resultado1)

// // d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo) -->

//     resultado2 = idade - idadeMelhorAmigo
//     console.log("A diferença de idade é de: ", resultado2)


// ========================================  // ========================================


// 2. Faça um programa que:

// // a. Peça ao usuário que insira um número par.

//     let numberPar = prompt("Digite um numero PAR?")

// // b. Imprima na tela o resto da divisão desse número por 2.
//     let resultado = numberPar%2

//     console.log(resultado)
//     console.log(typeof resultado)
// c. Teste o programa com diversos números pares. Você notou um padrão? 
// Escreva em um comentário de código.
    
    // O padrão com os numeros pares foi o 0 em todos os resultados testados.

// d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

    // Caso insira um número Impar, 
    // o resultado é 1,
    // o resto de qualquer dividão de numero Impar

    
// ========================================  // ========================================

// // 3 Faça um programa, seguindo os passos:

// // a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

//     let listaDeTarefas = []

// // b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//     listaDeTarefas.push(prompt("Qual a terafa 1?")) 
//     listaDeTarefas.push(prompt("Qual a terafa 2?")) 
//     listaDeTarefas.push(prompt("Qual a terafa 3?")) 

// // c. Imprima o array na tela

//     console.log(listaDeTarefas)

// // d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

//     let indiceEscolhido = prompt("Escolha, 0, 1 ou 2, a tarefa realizada!")

// // e. Remova da lista o item de índice que o usuário escolheu.

//     let indiceEmNumero = Number(indiceEscolhido)
//     listaDeTarefas.splice(indiceEmNumero, 1)

// // f. Imprima o array na tela

//     console.log(listaDeTarefas)

  
// ========================================  // ========================================

// 4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//    Em seguida, imprima na tela a seguinte mensagem:

//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


//     let user    = prompt("Digite seu User")
//     let email   = prompt("Digite seu Email")

//     alert(`O e-mail ${email} o foi cadastrado com sucesso. Seja bem-vinda(o), ${user}!`)

// // ========================================  // ========================================
