document.querySelector('#push').onclick = function()
{
    if(document.querySelector('#novaTarefa input').value.length == 0)
    {
        alert("Digite uma tarefa...");  
    } 
    else
      {
        document.querySelector('#tarefas').innerHTML +=
        `
            <div class="tarefas">
                <span id ="nomeTarefa">
                    ${document.querySelector('#novaTarefa input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var atualtarefa = document.querySelectorAll(".delete");
        for(var i=0; i<atualtarefa.length; i++){
            atualtarefa[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tarefas = document.querySelectorAll(".tarefas");
       for(var i =0; i<tarefas.length; i++){
            tarefas[i].onclick = function (){
                this.classList.toggle('completa');
            }

       }

       document.querySelector("#novaTarefa input"). value = " ";

    }
}