import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ITodo } from '../../model';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  todo: ITodo;

  constructor(public api: ApiService, private route: ActivatedRoute) {
    route.params.mergeMap(p => this.api.findTodo(+p['id'])).subscribe(t => this.todo = t);
  }

  onTodoChange(newStatus: boolean): void {
    this.api.changeTodoStatus(this.todo, newStatus);
  }
}
