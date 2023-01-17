export interface carinfo {
  name: string;
  color: string;
  id: number;
}
export interface CreateCarinfo {
  name: string;
  color: string;
}
export interface paginationTypeObj {
  key: string;
  number: number;
}
export interface engineQueryParams {
  id: number;
  status: string;
}
export interface properties {
  id: number;
  color: string;
  name: string;
  time?: number;
  wins?: number;
}
