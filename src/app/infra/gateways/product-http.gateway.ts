import { Product } from "@/app/core/domain/entities/product";
import { ProductGateway } from "@/app/core/domain/gateways/product.gateway";

export class ProductHttpGateway implements ProductGateway {
    async find(id: number): Promise<Product> {
        const res = await fetch(`http://localhost:8000/products${id}`);
        return res.json();
    }

    async list(): Promise<Product[]> {
        const res = await fetch(`http://localhost:8000/products`);
        return res.json();
    }
}