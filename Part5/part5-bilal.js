// Part5 Bilal Karowna
// First I create a task class to represent individual tasks
class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }
}

// Then I create a TaskManager class to manage the tasks
// It will handle adding, listing, completing, deleting, and filtering tasks
class TaskManager {
  constructor() {
    this.tasks = [];
    this.taskId = 1;
  }

  // Method to add a new task, it increments the task ID
  // Creates a new Task instance with the given description
  addTask(description) {
    const task = new Task(this.taskId++, description);
    this.tasks.push(task);
  }

  // Method to list all tasks, showing their completion status
  // It iterates over the tasks array and logs each task's details
  // I used copilot to help with the logging format of the task and its completion status
  listTasks() {
    this.tasks.forEach(task => {
      console.log(`[${task.completed ? '✔' : ' '}] ${task.id}: ${task.description}`);
    });
  }

  // Method to mark a task as completed
  // This block of code sets the completed property of the task to true, which indicates that the task has been finished
  completeTask(id) {
    let foundTask = null;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        foundTask = this.tasks[i];
        break;
      }
    }
    if (foundTask) {
      foundTask.completed = true;
    }
  }

  // Method to delete a task by ID
  // It deletes the task with the given ID from the tasks array
  deleteTask(id) {
    let newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id !== id) {
        newTasks.push(this.tasks[i]);
      }
    }
    this.tasks = newTasks;
  }

  // Method to filter tasks by completion status and log each filtered task
  filterTasks(completed) {
    let filtered = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed === completed) {
        console.log(`Filtered Task: [${this.tasks[i].completed ? '✔' : ' '}] ${this.tasks[i].id}: ${this.tasks[i].description}`);
        filtered.push(this.tasks[i]);
      }
    }
    return filtered;
  }
}

// Example usage
const taskManager = new TaskManager();
taskManager.addTask('Run 1,000,000 kilometers');
taskManager.addTask('Swim 500,000 miles');
console.log('-- Tasks after adding:');
taskManager.listTasks(); // List all tasks
taskManager.completeTask(1);
console.log('-- Tasks after completing task 1:');
taskManager.listTasks();
taskManager.deleteTask(2);
console.log('-- Tasks after deleting task 2:');
taskManager.listTasks();
taskManager.addTask('Fly to the moon 12 times');
taskManager.addTask('Climb Mount Everest 37 times');
taskManager.completeTask(3);

console.log('-- Completed Tasks:');
taskManager.filterTasks(true); // This will log each completed task
