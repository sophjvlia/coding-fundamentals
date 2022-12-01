// This is my best attempt on the to-do app assignment.
// There is a slight bug when choosing number 6 to quit the app.

const prompt = require('prompt-sync')({sigint:true});

var taskList = [];

class Task {
    constructor(task) {
        this.task = task;
    }

    viewTask() {
        for (var i = 0; i < taskList.length; i++) {
            if (taskList === []) {
                console.log('You have 0 tasks!');
            } else {
                console.log(`#${i} - ${taskList[i]}`);
            }
        };
    }

    addTask() {
        taskList.splice(taskList.length, 0, this.task);
    }
}

function displayTodoApp() {
  console.log(`
  --------- TO-DO APP ----------
  What would you like to do?
  1. View my to-do list.
  2. Add a new task.
  3. Edit a task.
  4. Complete a task.
  5. Delete a task.
  6. Quit app.
  `)

  var userInput = prompt('Enter (1/2/3/4/5/6): ');

  switch(userInput) {
      case '1':
        for (var i = 0; i < taskList.length; i++) {
          if (taskList === []) {
              console.log('You have 0 tasks!');
          } else {
              console.log(`#${i} - ${taskList[i]}`);
          }
        };
        displayTodoApp();
      case '2':
          let addTask = prompt('Enter your task: ');
          let uncompletedTask = new Task(addTask);
          uncompletedTask.addTask();
          console.log(taskList);
          displayTodoApp();
      case '3':
          let editTask = prompt('Enter the task number you would like to edit: ');
          let newTask = prompt('Change the task to: ');
          taskList.splice(Number(editTask - 1), 1, newTask);
          displayTodoApp();
      case '4': 
          let completeTask = prompt('Enter the task number you want to mark as complete: ');
          let completedTask = taskList[Number(completeTask) - 1];
          taskList.splice(Number(completeTask - 1), 1, completedTask + ' ✔️');
          console.log(taskList);
          displayTodoApp();
      case '5': 
          let deleteTask = prompt('Enter the task number you want to delete: ');
          taskList.splice(Number(deleteTask - 1), 1);
          displayTodoApp();
      case '6':
          break;
  }
}

displayTodoApp();