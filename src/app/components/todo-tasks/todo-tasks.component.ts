import { TodoServiceService, Todo } from './../../services/todo-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {


  @Input()
  todo: Todo
  todoTitle: string
  tasks
  constructor(private service: TodoServiceService) { }

  ngOnInit(): void {
    this.tasks = this.service.todo()
  }

  removeTask(i: number) {
    this.service.removeTask(i)
  }

}
