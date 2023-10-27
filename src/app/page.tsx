import Link from "next/link";
import { ListProductUseCase } from "./core/application/product/list-product-use-case"
import { ProductHttpGateway } from "./infra/gateways/product-http.gateway";

export default async function Home() {
  const productGateway = new ProductHttpGateway();
  const listProductsUseCase = new ListProductUseCase(productGateway);
  const products = await listProductsUseCase.execute();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <label>Nome:</label> {product.name} |
              <Link href={`/products/${product.id}`}>
                Ver
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
