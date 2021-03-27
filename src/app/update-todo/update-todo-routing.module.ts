import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTodoPage } from './update-todo.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTodoPageRoutingModule {}
