export interface IStock {
    id?: number;
    article_id?: number;
    taille?: string;
    quantite?: number;
}
export class Stock implements IStock {
    constructor(
        public id?: number,
        public article_id?: number,
        public taille?: string,
        public quantite?: number
    ) {}
}
