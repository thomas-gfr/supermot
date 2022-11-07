export interface IArticles {
    id?: number;
    nom?: string;
    description?: string;
    couleur?: string;
    prix?: number;
    type?: string;
    image?: string;
    groupe?: number;
}
export class Articles implements IArticles {
    constructor(
        public id?: number,
        public nom?: string,
        public description?: string,
        public couleur?: string,
        public prix?: number,
        public type?: string,
        public image?: string,
        public groupe?: number
    ) {}
}
