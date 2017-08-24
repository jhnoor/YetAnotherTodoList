import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IFilters } from '../../model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  // TheBadFix - URL -> client state
  constructor(public api: ApiService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(p => {
      const filters: IFilters = {ordering: p.ordering || null};
      this.api.changeFilters(filters);
    });
  }

  // TheBadFix - client state -> URL
  onFiltersChange(filters: IFilters) {
    this.api.changeFilters(filters);
    this.router.navigate(['todos', this.createParams(filters)]);
  }
  // TheBadFix
  private createParams(filters: IFilters): Params {
    const p:any = {};
    if (filters.ordering) p.ordering = filters.ordering;
    return p;
  }

}
