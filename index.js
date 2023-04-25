// Selecionando elementos do DOM
var form = document.querySelector('#new-task-form');
var input = document.querySelector('#new-task-input');
var taskList = document.querySelector('#task-list');
var statusElement = document.querySelector('#status');
// Inicializando o contador de tarefas concluídas como 0
var completedTasks = 0;
// Função para atualizar o status
function updateStatus() {
    var totalTasks = taskList.children.length;
    var percentCompleted = Math.floor((completedTasks / totalTasks) * 100);
    statusElement.innerText = "Voc\u00EA completou ".concat(percentCompleted, "% das suas tarefas!");
}
// Função para adicionar uma nova tarefa
function addTask(text) {
    // Criando o elemento li e o botão para marcar como concluído
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Adicionando o evento de click para marcar como concluído
    checkbox.addEventListener('click', function () {
        if (checkbox.checked) {
            li.classList.add('completed');
            completedTasks++;
        }
        else {
            li.classList.remove('completed');
            completedTasks--;
        }
        updateStatus();
    });
    // Criando o elemento span com o texto da tarefa
    var span = document.createElement('span');
    span.innerText = text;
    // Adicionando os elementos criados à li e a ul
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
    // Resetando o valor do input e focando nele
    input.value = '';
    input.focus();
}
// Adicionando o evento de submit do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var text = input.value.trim();
    if (text !== '') {
        addTask(text);
    }
});
// Chamando a função updateStatus para atualizar o status inicialmente
updateStatus();
