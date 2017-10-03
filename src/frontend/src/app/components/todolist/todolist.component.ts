import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { IFilters } from '../../model';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  filterChoices = ['created_at', 'modified_at', 'title'];
  filters: IFilters = { ordering: this.filterChoices[0] };

  // URL -> client state
  constructor(public store: StoreService, private route: ActivatedRoute) {
    route.queryParamMap.take(1).subscribe(p => {
      this.filters = { ordering: p.get('ordering') || this.filters.ordering };
      // this.store.setFilterAction(this.filters);
      this.store.getTodoListAction(this.filters);
    });
  }

  onFiltersChange() {
    // this.store.setFilterAction(this.filters);
    this.store.getTodoListAction(this.filters);
  }
}
