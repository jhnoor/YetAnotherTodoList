import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFilters, ITodoList, ITodo } from '../model';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  toggleTodoStatus(todo: ITodo, status: boolean): Observable<ITodo> {
    return this.http.put<ITodo>(`api/todolist/${todo.id}/`, {...todo, done: status});
  }

  getTodoList(filters: IFilters): Observable<ITodoList> {
    const params = new HttpParams().set("ordering", filters.ordering);
    return this.http.get<ITodoList>(`api/todolist/`, { params: params });
  }

  getTodo(todoId: number): Observable<ITodo> {
    return this.http.get<ITodo>(`api/todolist/${todoId}/`);
  }

}
