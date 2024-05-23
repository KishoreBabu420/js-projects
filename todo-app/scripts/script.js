'use strict';

//HTML Elements
const todoInputEl = document.getElementById('todo-title');

const todoFrom = document.getElementById('todo-form');
const btnSubmit = document.getElementById('btn-submit');

const todoListContainer = document.getElementById('todo-list-container');

//Global variables
let tasks = [];
let isEditing = false;
let editItem;

//functions
const addTodo = (task) => {
  const { id, title } = task;
  const todoListItem = document.createElement('li');
  todoListItem.classList.add('todo-item');
  todoListItem.innerHTML = `
  <span class="todo-item-title">${title}</span>
  <div class="todo-item-actions">
    <button class='btn-edit-todo' onclick='editTask(${id})'>
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class='btn-delete-todo' onclick='deleteTask(${id})'>
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>
  `;
  todoListContainer.appendChild(todoListItem);
};

const updateDom = (tasks) => {
  todoListContainer.innerHTML = null;
  tasks.forEach((task) => {
    addTodo(task);
  });
};

const editTask = (id) => {
  isEditing = true;
  btnSubmit.innerText = 'Edit';
  editItem = tasks.find((task) => {
    return task.id === id;
  });

  todoInputEl.value = editItem.title;
};

const deleteTask = (id) => {
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });

  updateDom(tasks);
};
//Event listeners
todoFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoTitle = todoInputEl.value;
  if (todoTitle) {
    if (isEditing) {
      //get the new dat
      //replace new data with the exisiting data
      tasks = tasks.map((task) => {
        if (task.id === editItem.id) {
          //modify the text
          return { id: editItem.id, title: todoTitle };
        } else {
          return task;
        }
      });

      updateDom(tasks);
      //reset defaults
      isEditing = false;
      btnSubmit.innerText = 'Add';
      editItem = null;
    } else {
      //adding
      const newTask = {
        id: Date.now(),
        title: todoTitle,
      };
      tasks.push(newTask);
      updateDom(tasks);
    }
    //clear inputs
    todoInputEl.value = '';
  } else {
    alert('Please enter a todo title');
  }
});

//initial settings
