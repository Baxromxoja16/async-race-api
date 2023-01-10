export default interface carinfo {
    map(arg0: (el: carinfo) => HTMLDivElement): unknown;
    name: string,
    color: string,
    id: number
}