//3.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    // a) Imprima na tela o array completo

            let array = [1, 2, 3, 4, 5]
            console.log(array)

    // b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
    //    seguida por cada uma das comidas, **uma embaixo da outra**.

            let comidas = ["macarrao", "feijao", "arroz", "feijoao tropeiro", "escondidinho"]
            console.log("Essas são as minhas comidas preferidas:", comidas[0],",", comidas[1],",", comidas[2],",", comidas[3],",", comidas[4] )

    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    //    Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista


            let qualComida = prompt("Digite uma nova comida preferida:")
            comidas[1] = qualComida
            console.log("Essas são as suas novas comidas preferidas:", comidas[0],",", comidas[1],",", comidas[2],",", comidas[3],",", comidas[4] )
            

