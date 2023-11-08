// task-add.component.ts
import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent {
  task: Task = new Task();

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.task.title.trim() && this.task.description.trim()) {
      this.taskService.addTask(this.task);
      this.task = new Task(); // Clear the form
    }
  }
}
