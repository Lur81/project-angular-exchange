export interface IRate {
    [currency:string]:number;
}
export interface ICurrencyList {
    base: string;
    quantity: number;
    rates: IRate;
}