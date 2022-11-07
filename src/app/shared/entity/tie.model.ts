export interface ITie {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    category?: string;
    quantity?: number;
}
export class Tie implements ITie {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public price?: number,
        public image?: string,
        public category?: string,
        public quantity?: number,
    ) {}
}
