// Imports
import './style.css';
import Status from './status.js';
import * as task from './task.js';

// variables
const list = new Status();

// Query selectors
const listContainer = document.querySelector('#list_container');

// Functions
function markDone(element) {
  element.classList.add('check');
  list.mark(element.parentElement.id);
  element.nextElementSibling.classList.add('mark');
}

function unmarkDone(element) {
  element.classList.remove('check');
  list.unmark(element.parentElement.id);
  element.nextElementSibling.classList.remove('mark');
}

function createTask(task) {
  const listItem = document.createElement('li');
  const divItem = document.createElement('div');
  const taskcheck = document.createElement('input');
  const taskText = document.createElement('textarea');
  const dragIcon = document.createElement('div');

  divItem.id = task.index;
  divItem.classList.add('flex', 'cell');
  taskcheck.setAttribute('type', 'checkbox');
  taskcheck.classList.add('checkbox');
  taskcheck.checked = task.completed;

  taskText.classList.add('cell_textarea');
  taskText.setAttribute('rows', '1');
  taskText.innerHTML = task.description;

  dragIcon.classList.add('drag_icon');

  if (task.completed) {
    taskcheck.classList.add('check');
    taskText.classList.add('mark');
  }

  listItem.appendChild(divItem);
  divItem.appendChild(taskcheck);
  divItem.appendChild(taskText);
  divItem.appendChild(dragIcon);
  listContainer.appendChild(listItem);

  taskcheck.addEventListener('click', () => (taskcheck.checked ? markDone(taskcheck) : unmarkDone(taskcheck)));
}

// Call functions

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  Object.values(list.list).forEach((value) => createTask(value));
});