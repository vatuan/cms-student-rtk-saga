import { type } from "os";

export interface PaginationParams {
  _limit: number;
  _pageLimit: number;
  _total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _limit: number;
  _page: number;
  _sort: string;
  _order: "asc" | "desc";
  [key: string]: any;
}