import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ITodo } from '../../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: ITodo;

  constructor(private api: ApiService) { }

  onTodoChange(newStatus: boolean): void {
    this.api.changeTodoStatus(this.todo.id, newStatus);
  }
}
