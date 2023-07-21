const inputBox = document.getElementById('input-box');
const tasksContainer = document.getElementById('tasks-container');


// Função para adicionar uma tarefa a lista

function addTask(){
    if(inputBox.value === ''){
        alert("Você precisa adicionar uma tarefa!")
    }
    else{
        //Criando um elemento do tipo "Li" dentro da class "tasksContainer" com o que foi inserido no inputBox.

        let li = document.createElement('Li');
        li.innerHTML = inputBox.value;
        tasksContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveList();

}


// Função de tarefa concluída e tarefa excluída
tasksContainer.addEventListener('click', function(e){
    // Riscando a tarefa concluída
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveList();
    }
    // Removendo uma tarefa "li" da lista
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
}, false);


// Salvando as tasks no Local Storage 
function saveList(){
    localStorage.setItem("list", tasksContainer.innerHTML);
}

function showList(){
    tasksContainer.innerHTML = localStorage.getItem("list");
}

showList();