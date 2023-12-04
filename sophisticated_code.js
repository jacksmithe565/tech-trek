/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated and complex implementation of a task management system.
 * It includes features like creating tasks, assigning them to users, marking them as complete, and generating reports.
 * 
 * Note: This code is for demonstration purposes only and may not be a production-ready solution. It is simplified and excludes some implementation details.
 */

// Define User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

// Define Task class
class Task {
  constructor(id, title, description, assignee) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.completed = false;
  }

  completeTask() {
    this.completed = true;
  }
}

// Initialize users
const user1 = new User("John", "john@example.com");
const user2 = new User("Jane", "jane@example.com");

// Create tasks
const task1 = new Task(1, "Task 1", "Description of task 1", user1);
const task2 = new Task(2, "Task 2", "Description of task 2", user2);
const task3 = new Task(3, "Task 3", "Description of task 3", user2);

// Assign tasks to users
user1.addTask(task1);
user2.addTask(task2);
user2.addTask(task3);

// Complete a task
task1.completeTask();

// Generate task report
function generateTaskReport(user) {
  const tasks = user.getTasks();
  console.log(`User: ${user.name}`);
  console.log("Tasks:");
  tasks.forEach((task) => {
    console.log(`- ${task.title}`);
    console.log(`  ${task.description}`);
    console.log(`  Assigned to: ${task.assignee.name}`);
    console.log(`  Completed: ${task.completed}`);
  });
}

// Output task report for each user
generateTaskReport(user1);
generateTaskReport(user2);

// Other complex features can be added here based on requirements