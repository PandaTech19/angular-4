import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task_Component, } from "./components/task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Task_Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks: string[] = ['task1', 'task2', 'task3'];

  deleteTask(task: string) {
    this.tasks = this.tasks.filter((t=> t !== task))
  }
}