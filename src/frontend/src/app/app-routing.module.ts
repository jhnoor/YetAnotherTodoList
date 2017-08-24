import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  { path: 'todos', component: TodolistComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: 'todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
