import { TodoServiceService } from './../../services/todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public taskTitle: string

  constructor(private todoeService: TodoServiceService) { }

  ngOnInit(): void {
  }


  addTask(): void {
    this.todoeService.addTask(this.taskTitle);
    this.taskTitle = ''
  }


}
