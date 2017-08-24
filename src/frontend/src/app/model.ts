export interface ITodo {
  url: string;
  id: number;
  title: string;
  text: string;
  done: boolean;
  created_at: Date;
  modified_at: Date;
}

export interface ITodoList {
  count: number;
  next?: any;
  previous?: any;
  results: ITodo[];
}

export interface IFilters {
  ordering: string;
}
