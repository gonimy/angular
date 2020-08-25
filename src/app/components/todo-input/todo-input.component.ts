import { TodoServiceService } from './../../services/todo-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public taskTitle: string
  inputForm: FormGroup

  constructor(private todoeService: TodoServiceService) { }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'taskTitle': new FormControl(null, [Validators.required, this.CheckEmpty])
    })
  }







  addTask(): void {
    if (this.inputForm.valid) {

      this.todoeService.addTask(this.taskTitle);
      this.taskTitle = ''
      this.inputForm.reset()
    }
  }


  CheckEmpty(control: FormControl): { [s: string]: true } {
    if (control.value === ' ') {
      return { 'empty': true }
    }
    return null
  }


}
