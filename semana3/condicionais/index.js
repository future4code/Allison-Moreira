// Leia o código abaixo

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

        // Ele realiza o teste do resto da divisão.
        // Numeros que passou no teste são aqueles que o resto da divisão é igual a 0
        // Numeros que não passou no teste são aqueles que o resto da divisão é igual a !



// ========================================================================
// ========================================================================


// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //     //   // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    //  console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


        // a. Para que serve o código acima?

                // Serve para fazer a verificação caso solicite 
                // determinada fruta predefinida possa mostrar o valor
                // e em caso não tenha nenhuma das frutas predefinidas 
                // irá mostrar um valor fixo de 5 reais

        // b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

                // O preço da fruta  Maçã  é  R$  2.25

        // C. Considere que um usuário queira comprar uma Pêra, qual seria
        //  a mensagem impressa no console se retirássemos o break que está logo acima do default 
        // (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

                // O preço da fruta  Pêra  é  R$  5.5

                
// ========================================================================
// ========================================================================

// 1. 
// Leia o código abaixo:

    // const numero = Number(prompt("Digite o primeiro número."))

    // if(numero > 0) {
    // console.log("Esse número passou no teste")
    //     let mensagem = "Essa mensagem é secreta!!!"
    // }

    // console.log(mensagem)


        // a. O que a primeira linha está fazendo?

            // identificando o numero que o usuario irá digitar

        // b. Considere um usuário digitou o número 10. 
        // Qual será a mensagem do terminal? E se fosse o número -10?

            // Esse número passou no teste
            // E que a variavel mensagem não foi definida.

            // Caso fosse -10, Não irá retornar nada que está dentro do bloco IF, 
            // e continuaria dando erro pois a variavel mensagem não foi definida. 

        // c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

            // Sim, pois não foi definido a varável 'mensagem' no Escopo global
            // e no bloco de IF foi definido, porém a utilização dessa variavel é apenas no seu prórpio bloco
            // então a chamar no console.log ná ultima linha, irá apresentar o erro.

                        
// ========================================================================
// ========================================================================


// // Exercícios de escrita de código

// Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    // 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    // 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    // 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    // Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

            // let idade = Number(prompt("Qual é a sua idade?"))   
            
            // if ( idade >= 18 ) {
            //     console.log("Você pode dirigir")
            // } else {
            //     console.log("Você não pode dirigir")
            // }


                    
// ========================================================================
// ========================================================================



// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else


        //FORMATO UM RESOLVIDO

        // let turno = prompt("Qual o turno que você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno).")

        // if (turno == 'm' || turno == 'M') {
        //     console.log("Bom dia!")
        // }
        
        // if (turno == 'v' || turno == 'V') {
        //     console.log("Boa tarde!")
        // }

        // if (turno == 'N' || turno == 'n') {
        //     console.log("Boa noite!")
        // }

        //FORMATO DOIS RESOLVIDO

        // let turno = prompt("Qual o turno que você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno).")

        // if (turno == 'm' || turno == 'M') {
        //     console.log("Bom dia!")
        // } else if (turno == 'v' || turno == 'V') {
        //     console.log("Boa tarde!")
        // } else if (turno == 'N' || turno == 'n') {
        //     console.log("Boa noite!")
        // } else {
        //     console.log("Digite corretamente o que foi solicitado")
        //     console.log("digite M (matutino) ou V (Vespertino) ou N (Noturno).")
        // }


                 
// ========================================================================
// ========================================================================



        // Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

        // let turno = prompt("Qual o turno que você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno).")

        // switch ( turno) {
            
        //     case 'M':
        //         console.log("Bom dia")
        //         break;
        //     case 'V':
        //         console.log("Boa tarde")
        //         break;
        //     case 'N':
        //         console.log("Boa Noite")
        //         break;
        //     default:
        //         console.log("Digite corretamente o que foi solicitado")
        //         console.log("digite M (matutino) ou V (Vespertino) ou N (Noturno).")
        // }



                 
// ========================================================================
// ========================================================================


// Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela 
// só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
// vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!",
// caso contrário, imprima "Escolha outro filme :("

        // let ingressoValor = 15
        // let genero = 'fantasia'

        // let assistirGenero = prompt("qual o gênero de filme que vão assistir?")
        // let precoIngresso = Number(prompt("Qual o preço do Ingresso?"))

        // if ( assistirGenero == genero && precoIngresso == ingressoValor) {
        //     console.log("Bom filme!")
        // } else {
        //     console.log("Escolha outro filme :(")
        // } 
