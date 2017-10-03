import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'app/services/store.service';
import { ITodo } from '../../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: ITodo;

  constructor(private store: StoreService) { }

  toggle(): void {
    this.store.toggleTodoStatus(this.todo, !this.todo.done).subscribe(t => this.todo = t);
  }
}
