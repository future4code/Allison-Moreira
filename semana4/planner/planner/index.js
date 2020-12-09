
        function criarTarefa() {
            
            const input = document.getElementById("tarefa")
            const inputValue = input.value
            document.getElementById("tarefa").value = "" // remover ao terminar de adicionar
            
            const select = document.getElementById("dias-semana")
            const selectValue = select.value

            const div = document.getElementById(selectValue)
            div.innerHTML += `<p class='container-item' id='remove'>${inputValue}</p>`
            

         //riscando tarefas

            const containerSection = document.getElementById('container')
            containerSection.addEventListener('click',  riscarItem)

            function riscarItem(e) {
                console.log(e.target)
                if (e.target.classList.contains('container-item')) {
                    e.target.classList.toggle('risco-item')
                }
            }
        }
    
    // function limparTarefas() {
    //     document.getElementsById('remove').innerHTML += ""
    // }
