import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTodoPageRoutingModule } from './update-todo-routing.module';

import { UpdateTodoPage } from './update-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTodoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateTodoPage]
})
export class UpdateTodoPageModule {}
