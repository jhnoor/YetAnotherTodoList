import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ITodoList, ITodo, IFilters } from 'app/model';
import { ApiService } from 'app/services/api.service';

@Injectable()
export class StoreService {
  private _todoList$ = new BehaviorSubject<ITodoList>(null);

  constructor(private api: ApiService, private router: Router) { }

  /* Actions */
  getTodoListAction(filters) {
    this.api.getTodoList(filters).subscribe(todoList => {
      this._todoList$.next(todoList)
    });
  }

  getTodoAction(todoId: number) {
    return this.api.getTodo(todoId);
  }

  toggleTodoStatus(todo: ITodo, status: boolean) {
    return this.api.toggleTodoStatus(todo, status);
  }

  // Consumer kan ikke kalle .next() fordi asObservable returnerer en Observable, og ikke selve Subject
  get todoList$(): Observable<ITodoList> {
    return this._todoList$.asObservable();
  }
}
