import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IFilters } from '../../model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  constructor(public api: ApiService) { }

  onFiltersChange(filters: IFilters) {
    this.api.changeFilters(filters);
  }
}
