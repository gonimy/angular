import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class Todo {
  id: number
  title: string
  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
}




export class TodoServiceService {

  private todos: Todo[] = []
  nextId: number

  //get the list 
  public todo(): Todo[] {
    return this.todos
  }


  //add task 
  public addTask(title: string): void {
    let todo = new Todo(this.nextId, title)
    this.todos.push(todo)
  }

  //remove task 
  public removeTask(id: number): void {
    this.todos.splice(id, 1)
  }




  constructor() { }
}
