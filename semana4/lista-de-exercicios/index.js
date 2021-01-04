// # Lista de Exercícios:

// Exercícios de interpretação de código

    // 1.
    // o exercício tem uma função para converter a moeda do dólar
    // solicita que o usúario digite o valor da cotação do Dólar atual
    // e a função retorna o calculo já montado
    // E depois armazenou este return dentro de uma variavel chamada meuDinheiro, e inseriu um valor
    // de 100, para cotação. E deu um console.log para imprimir o resultado, com o valor inserido.


    // 2.
    // o exercício tem uma função que tem 2 parametros um, com o tipo de investimento e o valor que será multiplicado
    // e seguida declara uma variavel para ser o resultado, utiliza switch para identificar qual tipo de investimento será usado
    // fazendo as devidas multiplicações na qual é retornado na variavel ValorAposIvestimento e é retornado.
    // Depois chama-se as funções com os valores pré fixados, e imprime na tela.
    // Onde o primeiro valor é impresso 156, e no segundo valor é impresso "TIPO DE INVESTIMENTO INFORMADO INCORRETO"

    // 3.
    // O exercício inicia com três variaveis apontado para arrays, onde obtém valores dentro e os demais estão vazios.
    // Em seguida pecorre o array da variavel "numeros", e verifica quais numeros que o resto da divisão é igual a 0, e armazena esses resultados
    // na array1, que estava vazia, e os numeros que no resto da divisão é igual a 1, é armazenado na array2.

    // 4.
    // O exercício inicialmente declara uma variavel com um array,
    // declara uma segunda variavel numero1, com uma palavra reservada, na qual
    // o seu valor é maior que qualquqer numero.
    // e a terceira variavel igual a zero.
    // Em seguida, pecorre a array numero e faz duas verificações.
    // a Primeira: qual é o numero menor do array.
    // e a segunda é: qual maior numero da array.
    // e depos é impresso no console, os dois resultados.


// ================================================================== // ============================================================


    
    // Exercicios de logica de Programação

    // 1.
    // Três maneiras de percorrer um Array, é Filter, map e ForEach

        // const bonecos = [
        //     {nome: "Primeiro", life: 0, lifemax: 1000},
        //     {nome: "Segundo", life: 0, lifemax: 1000},
        //     {nome: "Terceiro", life: 0, lifemax: 1000}
        // ]

        // bonecos.forEach((boneco) => {
        //     boneco.life = boneco.lifemax
        // })
        
        // console.log(bonecos)

    // 2.
    
    // a) `booleano1 && booleano2 && !booleano4`
            // false
    // b) `(booleano1 && booleano2) || !booleano3`
            // false
    // c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
            // true
    // d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
            // true
    // e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
            // true

    // 3.

    //Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares 
    //(por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4, 6 e 8).  

            // let i = 0
            // let result = 0
            // const quantidadeDeNumerosPares = Number(prompt("Quantidade de vezes que deve aparecer os numeros pares: "))

            // while (i < quantidadeDeNumerosPares) {
            //     i++
            //     console.log(result)
            //     result = result + 1
            //     result++
            // }
    
    
    // 4.

        // let trigonometria = () => {

        //     let a = Number(prompt("Digite o valor do triângulo, Lado A:"))
        //     let b = Number(prompt("Digite o valor do triângulo, Lado B:"))
        //     let c = Number(prompt("Digite o valor do triângulo, Lado C:"))

        //     if ( a === c && b === c) {
        //         console.log("Equilátero")
        //     } else if ( a != b && b != c && c != a) {
        //         console.log("Escaleno")
        //     } else {
        //         console.log("Isósceles")
        //     }

        // }

        // trigonometria()



    // 5.

    let doisNumeros = () => {
        let a = Number(prompt("Digite o primeiro Valor: "))
        let b = Number(prompt("Digite o segundo valor:"))
        
        const array = [a, b]
        
        for( num of array) {
            array = infinity
            console.log("O maior é:", array)

            // if (num = a/b){
            //     console.log("ok")
            // } else {
            //     console.log("nao é")
            // }
        }

}

doisNumeros()