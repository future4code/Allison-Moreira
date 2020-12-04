   //  const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   //  console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   //  console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)



    // 1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".
    
         alert("Bem vindo ao jogo de Blackjack!")

   //  2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".

         if(confirm("Quer iniciar uma nova rodada?")) {
            // o que fazer se o usuário clicar "ok"
            const carta = comprarCarta()
            const user1 = comprarCarta()
            const user2 = comprarCarta()
            const pc1 = comprarCarta()
            const pc2 = comprarCarta()

            const somaUser = user1.valor + user2.valor
            const somaPc = pc1.valor + pc2.valor

            console.log("User: ", user1.texto, user2.texto, "Pontuação: ", somaUser)
            console.log("Pc: ", pc1.texto, pc2.texto, "Pontuação: ", somaPc)

            if ( somaUser >= 17 && somaUser <= 21 && somaPc < 17) {
               alert("Usuario Vencedor!")
            } else if ( somaPc >= 17 && somaPc <= 21 && somaUser < 17) {
               alert("PC vencedor")
            } else if ( somaPc === somaUser) {
               alert("EMPATE!")
            } else {
               alert("AMBOS NÃO CHEGARAM AO 21")
            }


         } else {
            // o que fazer se o usuário clicar "cancelar"
            console.log("O jogo acabou")
         }

