export interface ISuit {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    category?: string;
    quantity?: number;
    total?: number;
}
export class Suit implements ISuit {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public price?: number,
        public image?: string,
        public category?: string,
        public quantity?: number,
        public total?: number,
    ) {}
}
