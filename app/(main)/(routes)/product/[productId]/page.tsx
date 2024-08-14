import { Product } from "@/components/products/Product";

export default function ProductPage({ params }: { params: { productId: string } }) {
  return (
    <div className="w-full h-full"> <Product productId={params.productId} /> </div>
  )
}
