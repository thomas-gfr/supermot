export interface IPayments {
    id?: number;
    id_utilisateur?: number;
    id_stock?: number;
    cout?: number;   
}
export class Payments implements IPayments {
    constructor(
        public id?: number,
        public id_utilisateur?: number,
        public id_stock?: number,
        public cout?: number
    ) {}
}
