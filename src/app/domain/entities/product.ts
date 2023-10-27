export interface ProductProps {
    id: string;
    name: string;
    description: string;
    price: number;
    cover: string;
}

export class Product {
    constructor(public props: ProductProps) {}

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }
}