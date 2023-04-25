// Selecionando elementos do DOM
const form = document.querySelector('#new-task-form') as HTMLFormElement;
const input = document.querySelector('#new-task-input') as HTMLInputElement;
const taskList = document.querySelector('#task-list') as HTMLUListElement;
const statusElement = document.querySelector('#status') as HTMLParagraphElement;

// Inicializando o contador de tarefas concluídas como 0
let completedTasks = 0;

// Função para atualizar o status
function updateStatus() {
  const totalTasks = taskList.children.length;
  const percentCompleted = Math.floor((completedTasks / totalTasks) * 100);
  statusElement.innerText = `Você completou ${percentCompleted}% das suas tarefas!`;
}

// Função para adicionar uma nova tarefa
function addTask(text: string) {
  // Criando o elemento li e o botão para marcar como concluído
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Adicionando o evento de click para marcar como concluído
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      li.classList.add('completed');
      completedTasks++;
    } else {
      li.classList.remove('completed');
      completedTasks--;
    }
    updateStatus();
  });

  // Criando o elemento span com o texto da tarefa
  const span = document.createElement('span');
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
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTask(text);
  }
});

// Chamando a função updateStatus para atualizar o status inicialmente
updateStatus();
