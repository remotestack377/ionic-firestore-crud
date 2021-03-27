import { Component, OnInit } from '@angular/core';

import { CrudService } from './../services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})

export class CreateTodoPage implements OnInit {

  todoForm: FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.crudService.create(this.todoForm.value)
      .then(() => {
        this.todoForm.reset();
        this.router.navigate(['/todo-list']);
      }).catch((err) => {
        console.log(err)
      });
    }
  }

}
