class Task {
  constructor(id, description, priority = 'Medium', dueDate = null) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.priority = priority
    this.dueDate = dueDate;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.taskId = 1;
  }

  // This now also includes a pririty and due date for each task
  addTask(description, priority = 'Medium', dueDate = null) {
    const task = new Task(this.taskId++, description, priority, dueDate);
    this.tasks.push(task);
  }

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

  // Present tasks sorted by priority and due date
  // 1. Sorts tasks by priority, high medium, then low
  // 2. If priorities are equal, sorts by due date (soonest first)
  // 3. Displays each task with all its properties
  presentTasks() {
    // Define the order of priorities for sorting
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

    // Create a sorted copy of the tasks array
    const sorted = this.tasks.slice().sort(function(a, b) {
      // Compare priorities first
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      // If priorities are equal, compare due dates
      if (a.dueDate && b.dueDate) {
        // Convert dueDate strings to Date objects and compare
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      // If only one has a due date, that one comes first
      if (a.dueDate) return -1;
      if (b.dueDate) return 1;
      // If neither has a due date, keep original order
      return 0;
    });

    // Loop through sorted tasks and display their details
    for (let i = 0; i < sorted.length; i++) {
      const task = sorted[i];
      // Print task info: id, description, priority, due date, completion status
      console.log(
        `Task ${task.id}: ${task.description}\n  Priority: ${task.priority}\n  Due: ${task.dueDate ? task.dueDate : 'None'}\n  Completed: ${task.completed ? '✔' : ' '}`
      );
    }
  }
}

// Example usage:
const taskManager = new TaskManager();
taskManager.addTask('Run 1,000,000 kilometers', 'High', '2025-08-10');
taskManager.addTask('Swim 500,000 miles', 'Medium', '2025-08-15');
taskManager.addTask('Fly to the moon 12 times', 'Low');
taskManager.addTask('Climb Mount Everest 37 times', 'High', '2025-08-05');
taskManager.completeTask(3);

console.log('-- Presented Tasks (sorted by priority and due date):');
taskManager.presentTasks();