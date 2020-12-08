
//         // let valor = 0
//         // for(let i = 0; i < 5; i++) {
//         //     valor += i
//         // }
//         // console.log(valor)

//             // O que o código abaixo está fazendo? Qual o resultado impresso no console?

//                 // Código está em cada Loop I é imcrementado +1.
//                 // até que i seja menor que 5 
//                 // e a cada Loop é somado com a variavel Valor, onde é armazenado
//                 // Valor (0) = Valor (0) + i (1)
//                 // 0 = 0 + 1
//                 // e a Cada Loop, é Valor = valor + i 

//                 // Resultado final é 10


// //  ============================================
// //  ============================================
        

//         //const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//         // for (let numero of lista) {
//         // if (numero > 18) {
//         //         console.log(numero)
//         //     }
//         // }


//         // a. O que vai ser impresso no console?

//                 // 19, 21, 23, 25, 27, 30

//         // b. Se eu quisesse acessar o índice de cada elemento dessa lista, 
//         // o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

//             // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//             // for (let num of lista) {
//             //     console.log(num)
//             // }


// //  ============================================
// //  ============================================
        


//             // Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 


//                 // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//                 // let quantidadeAtual = 0
//                 // while(quantidadeAtual < quantidadeTotal){
//                 // let linha = ""
//                 // for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//                 //     linha += "0"
//                 // }
//                 // console.log(linha)
//                 // quantidadeAtual++
//                 // }

//                         // 0
//                         // 00
//                         // 000
//                         // 0000
        

// //  ============================================
// //  ============================================
        
//         // EXERCÍCIO 3

//         // Nas perguntas abaixo, considere que você tenha acesso a um array  
//         // (chamado de 'array original') que seja composto somente de números. 
//         // Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.
                    
//          let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//         // A. 
         
//             // for ( let num of array ) {
//             //     console.log(num)
//             // }
         
//         // B.   
        
//             // for ( let num of array ) {
//             //     result = num/10
//             //     console.log(result)
//             // }

//         // C.

//             // const arrayNovo = [];
//             // for (let num of array) {
//             //     if(num % 2 === 0) {
//             //         arrayNovo.push(num)
//             //     }
//             // }

//             // console.log("Numeros pares: ", arrayNovo)

//         // d.

//             // const arrayStrings = []
//             // for (let i = 0; i < array.length; i++) {
//             //     const strings = "O elemento do Index " + i + " é: " + array[i]
//             //     arrayStrings.push(strings)
//             // }

//             // console.log(arrayStrings)
        
//         // e.

//             // let valorMaximo = array[0]
//             // let valorMinimo = array[0]

//             // for (let i =0; i < array.length; i++) {
//             //     if( array[i] > valorMaximo) {
//             //         valorMaximo = array[i]
//             //     } else if( array[i] < valorMinimo) {
//             //         valorMinimo = array[i]
//             //     }
//             // }

//             // console.log("O maior número é", valorMaximo, "e o menor é ", valorMinimo)