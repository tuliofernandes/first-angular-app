import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.length > 0) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  delTask(task: string) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
