document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Adicionar item
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      // Botões de ação
      const actions = document.createElement('div');
      actions.className = 'task-actions';
  
      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Concluir';
      toggleButton.className = 'toggle';
      toggleButton.addEventListener('click', () => {
        listItem.classList.toggle('completed');
      });
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
      });
  
      actions.appendChild(toggleButton);
      actions.appendChild(removeButton);
      listItem.appendChild(actions);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    });
  });
  
  document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'welcome.html';
  });