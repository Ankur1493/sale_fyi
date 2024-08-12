import { Products } from "@/components/products/Products";
import { getAllProducts } from "@/data/product"

export default async function Home() {

  const allProducts = await getAllProducts()
  if (!allProducts || allProducts === null) {
    return (
      <div>
        Sorry not able to fetch products as of now
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center py-6 justify-between ">
      <Products products={allProducts} />
    </div>
  );
}
