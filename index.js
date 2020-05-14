
console.log('funguju!');


// pole s ukoly
const tasks = ['Umyt nadobi', 'Vynest kos', 'Dojit na nakup'];

// ulozeni do seznamu ukolu
const updateTasks = () => {
  const tasksList = document.querySelector('.todo__tasks');
  tasksList.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    tasksList.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
};

updateTasks();

// pridani dalsi polozky
const addTask = document.querySelector('.btn-add');
addTask.addEventListener('click', () => {
  tasks.push(document.querySelector('.new-task').value);
  updateTasks();
});
