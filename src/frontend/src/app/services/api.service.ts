import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFilters, ITodoList, ITodo } from '../model';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  // Persistent state
  _todoList: ITodoList;

  // Client state
  filterChoices = ['created_at', 'modified_at', 'title'];
  filters: IFilters = { ordering: this.filterChoices[0] }; // Not retrieving filter choice from url if there is

  constructor(private http: HttpClient) {
  }

  get todos(): ITodo[] {
    if (this._todoList)
      return this._todoList.results;
  }

  findTodo(id: number): Observable<ITodo> {
    const params = new HttpParams().set("ordering", this.filters.ordering);
    return this.http.get<ITodo>(`api/todolist/${id}`, { params: params });
  }

  changeTodoStatus(todo: ITodo, newStatus: boolean) {
    todo.done = newStatus;
    this.http.put(`api/todolist/${todo.id}/`, todo)
      .catch(err => { todo.done = !newStatus; throw err; })
      .subscribe(); // TheBadFix
  }

  changeFilters(filters: IFilters): void {
    this.filters = filters;
    this.refetch();
  }

  private refetch(): void {
    const params = new HttpParams().set("ordering", this.filters.ordering);
    this.http.get<ITodoList>(`api/todolist/`, { params: params })
      .subscribe(t => this._todoList = t);
  }

}
