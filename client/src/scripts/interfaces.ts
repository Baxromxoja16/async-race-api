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
  number: number | string;
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
export interface winnerType {
  id: number;
  time: number;
  wins: number;
}
