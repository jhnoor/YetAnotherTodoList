import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'app/services/store.service';
import { ITodo } from '../../model';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  todo: ITodo;

  constructor(public store: StoreService, private route: ActivatedRoute) {
    route.params.take(1).switchMap(p => this.store.getTodoAction(+p['id'])).subscribe(t => this.todo = t);
  }

  onTodoChange(newStatus: boolean): void {
    this.store.toggleTodoStatus(this.todo, newStatus).subscribe(t => this.todo = t);
  }
}
