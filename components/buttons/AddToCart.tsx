"use client"
import { Product } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/store"
import { cn } from "@/lib/utils"

export const AddToCart = ({ product }: { product: Product }) => {


  const addItem = useCartStore(state => state.addItem)
  const items = useCartStore(state => state.items)
  const currentItem = items.find((item) => product.id === item.id)

  const updateCart = () => {
    addItem({ id: product.id, name: product.name, image: product.image, price: product.price, quantity: 1 })
  }
  return (
    <Button
      variant="outline"
      onClick={updateCart}
      className={cn("bg-[#d9eaff] w-full  text-[#1d3966]",
        currentItem ? currentItem?.quantity > 0 ? "bg-[#f5f3c4]" : "" : "")}>
      {typeof (currentItem?.quantity) === "number" ?
        (
          <p>{currentItem.quantity}{" "} {currentItem.quantity === 1 ? "unit" : "units"} Added to Cart</p>
        )
        : (
          <p>Add to cart</p>
        )}
    </Button>
  )
}
