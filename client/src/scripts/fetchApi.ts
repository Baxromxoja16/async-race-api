import { paginationTypeObj, CreateCarinfo, carinfo, engineQueryParams } from './interfaces'


export const baseUrl = 'http://localhost:3000';
export const path = {
    garage: '/garage',
    engine: '/engine',
    winners: '/winners'
};

const generateQueryString = (queryParams: paginationTypeObj[] = []) => queryParams.length
    ? `?${queryParams.map((x) => `${x.key}=${x.number}`).join('&')}`
    : '';

export const getGarage = async (baseUrl: string, path: string, queryParams?: paginationTypeObj[]): Promise<carinfo[]> => {
    const response = await fetch(`${baseUrl}${path}${generateQueryString(queryParams)}`);
    const data: carinfo[] = await response.json();
    // console.log(queryParams[0].number);
    return data;
};
export const engineStart = async (baseUrl: string, path: string, idx: number, query: string ): Promise<carinfo[]> => {
    const response = await fetch(`${baseUrl}${path}?id=${1}&status=${'started'}`);
    const data: carinfo[] = await response.json();
    return data;
};
// http://localhost:3000/engine?id=1&status=started

export const CreateCars = async (body: object) => {
    const response = await fetch(`${baseUrl}${path.garage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const car = await response.json();

    return car;
};

export const UpdateCar = async (id: number, body: CreateCarinfo) => {
    const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const car = await response.json();

    return car;
};

export const DeleteCar = async (id: number) => {
    const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
        method: 'DELETE',
    });
    const car = await response.json();

    return car;
};

// const main = async () => {
//     const garage = await CreateCars({
//         name: 'Change IT carT',
//         color: '#444'
//     })
// }
// main()