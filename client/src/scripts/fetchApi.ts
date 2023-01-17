import { paginationTypeObj, CreateCarinfo, carinfo } from "./interfaces";
export const baseUrl = "http://localhost:3000";
export const path = {
  garage: "/garage",
  engine: "/engine",
  winners: "/winners",
};
const generateQueryString = (queryParams: paginationTypeObj[] = []) =>
  queryParams.length
    ? `?${queryParams.map((x) => `${x.key}=${x.number}`).join("&")}`
    : "";
export const getGarage = async (
  baseUrl: string,
  path: string,
  queryParams?: paginationTypeObj[]
): Promise<carinfo[]> => {
  const response = await fetch(
    `${baseUrl}${path}${generateQueryString(queryParams)}`
  );
  const data: carinfo[] = await response.json();
  return data;
};
export const engineStart = async (
  baseUrl: string,
  path: string,
  idx: number,
  query: string
) => {
  const response = await fetch(`${baseUrl}${path}?id=${idx}&status=${query}`, {
    method: "PATCH",
  });
  const data = await response.json();
  return data;
};
export const engineDrive = async (
  baseUrl: string,
  path: string,
  idx: number,
  query: string
) => {
  const response = await fetch(`${baseUrl}${path}?id=${idx}&status=${query}`, {
    method: "PATCH",
  });
  return response.status;
};
export const CreateCars = async (body: object) => {
  const response = await fetch(`${baseUrl}${path.garage}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
};
export const UpdateCar = async (id: number, body: CreateCarinfo) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
};
export const DeleteCar = async (id: number) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: "DELETE",
  });
  const car = await response.json();
  return car;
};
