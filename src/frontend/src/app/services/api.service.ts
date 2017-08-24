import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFilters, ITodoList, ITodo } from '../model';

@Injectable()
export class ApiService {
  // Persistent state
  _todoList: ITodoList;

  // Client state
  filterChoices = ['created_at', 'modified_at', 'title'];
  filters: IFilters = { ordering: this.filterChoices[0] }; // Not retrieving filter choice from url if there is

  constructor(private http: HttpClient) {
    this.refetch();
  }

  get todos(): ITodo[] {
    if (this._todoList)
      return this._todoList.results;
  }

  findTodo(id: number): Observable<ITodo> {
    const params = new HttpParams().set("ordering", this.filters.ordering);
    return this.http.get<ITodo>(`api/todolist/${id}`, { params: params });
  }

  changeTodoStatus(todoId: number, newStatus: boolean) {
    const todo = this._todoList.results.find(t => t.id === todoId);
    todo.done = newStatus;
    this.http.put(`api/todolist/${todoId}/`, todo).subscribe(); // optimistic update
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
