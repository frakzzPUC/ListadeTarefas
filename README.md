 <title>Lista de Tarefas</title>
  </head>
  <body>
    <h1>Lista de Tarefas</h1>
    <p>Este é um simples projeto de lista de tarefas em TypeScript, HTML e CSS. O objetivo deste projeto é demonstrar como criar uma aplicação web básica utilizando essas tecnologias.</p>

<h2>Como funciona</h2>
<p>A lista de tarefas possui as seguintes funcionalidades:</p>
<ul>
  <li>Adicionar uma nova tarefa</li>
  <li>Marcar uma tarefa como concluída</li>
  <li>Remover uma tarefa</li>
  <li>Remover todas as tarefas</li>
</ul>

<p>As tarefas são armazenadas em um array de objetos Task, que possui as seguintes propriedades:</p>
<ul>
  <li>id (string): identificador único da tarefa</li>
  <li>description (string): descrição da tarefa</li>
  <li>status (TaskStatus): estado da tarefa (pendente ou concluída)</li>
</ul>

<p>As tarefas são exibidas em uma lista ordenada (<code>&lt;ul&gt;</code>), onde cada item da lista (<code>&lt;li&gt;</code>) contém uma caixa de seleção (<code>&lt;input type="checkbox"&gt;</code>) para marcar a tarefa como concluída e um botão (<code>&lt;button&gt;</code>) para remover a tarefa da lista.</p>

<p>Ao adicionar uma nova tarefa, o formulário (<code>&lt;form&gt;</code>) é enviado (<code>&lt;button type="submit"&gt;</code>) e a tarefa é adicionada ao array de tarefas.</p>

<p>Ao marcar uma tarefa como concluída, o estado da tarefa é atualizado para TaskStatus.Completed e a classe <code>completed</code> é adicionada ao item da lista correspondente (<code>&lt;li&gt;</code>).</p>

<p>Ao remover uma tarefa, a tarefa é removida do array de tarefas e o item da lista correspondente é removido do DOM.</p>

<p>Ao remover todas as tarefas, o array de tarefas é esvaziado e todos os itens da lista são removidos do DOM.</p>

<h2>Como executar</h2>
<p>Para executar a aplicação, basta abrir o arquivo index.html em um navegador web. O TypeScript é compilado automaticamente para JavaScript pelo navegador.</p>

<h2>Considerações finais</h2>
<p>Este é um projeto simples, destinado a fins educacionais. Para um projeto real, seria necessário adicionar outras funcionalidades, como salvar as tarefas em um banco de dados, permitir a edição de tarefas existentes, etc. No entanto, este projeto serve como uma base sólida para a criação de aplicações web mais complexas.</p>
