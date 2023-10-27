import { Product } from "@/app/core/domain/entities/product";
import { ProductGateway } from "@/app/core/domain/gateways/product.gateway";

export class ListProductUseCase {
    constructor(private productGateway: ProductGateway) {
       
    }

    async execute(): Promise<Product[]> {
        return await this.productGateway.list();
    }
}