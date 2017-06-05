import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <p>{{hour}}</p>
    <ul>
       <li *ngFor="let task of tasks">{{task.description}}{{task.done}}</li>

    </ul>
    <h1 *ngIf="showing">Behold my cloaking device!</h1>
    <h1 *ngUnless="showing">Behold my cloaking device!</h1>
  </div>
  `
})

export class AppComponent {
  showing: boolean = true;

  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  hour: number = this.currentTime.getHours();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}


export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
