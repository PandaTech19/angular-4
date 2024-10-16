import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

// we use @input to receive data 
// we use @Output to send data 

export class Task_Component {
  @Input() Txt!: string;
  @Output() taskDelete = new EventEmitter<void>();

  OnDelteClick() {
    this.taskDelete.emit()
  }
}
