// Actions
import { getLatestProducts } from "@/lib/actions/product.actions";
// NextUI

// Components
import { Home } from "../../components/ui/Home/Home";
import { ProductCard } from "../../components/ui/Product/ProductCard";
import { Product } from "@/types";

export default async function App() {
  // Latest Products
  const latestProducts = await getLatestProducts({
    limit: 4,
  });

  return (
    <>
      <Home />
      <div className="container flex flex-col mt-10 gap-6">
        <h2 className="text-3xl font-bold">New at Marín’s!</h2>
        <div className="grid gap-2 grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {latestProducts?.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
