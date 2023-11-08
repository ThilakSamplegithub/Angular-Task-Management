// task.service.ts
import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  // Method to add a new task
  // task.service.ts
addTask(task: Task): void {
  // Generate a unique ID for the new task
  task.id = this.generateUniqueId();

  // Push the new task to the tasks array
  this.tasks.push(task);
}

private generateUniqueId(): number {
  // Implement your logic to generate a unique ID for the task.
  // This can be done by finding the maximum ID in the existing tasks and adding 1.
  // For simplicity, you can use a counter in this example.
  const maxId = this.tasks.reduce((max, task) => (task.id > max ? task.id : max), 0);
  return maxId + 1;
}


  // Method to retrieve a list of tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Method to delete a task by ID
 // task.service.ts
deleteTask(id: number): void {
  const taskIndex = this.tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    this.tasks.splice(taskIndex, 1);
  }
}
getTaskById(id: number): Task | null {
  return this.tasks.find((task) => task.id === id) || null;
}
}
