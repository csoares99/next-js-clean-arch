import { Product } from "../entities/product";

export interface ProductGateway {
    find(id: number): Promise<Product>;
    list(): Promise<Product[]>;
}