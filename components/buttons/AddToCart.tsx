"use client"
import { Product } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/store"

export const AddToCart = ({ product }: { product: Product }) => {


  const addItem = useCartStore(state => state.addItem)
  const items = useCartStore(state => state.items)
  const currentItem = items.find((item) => product.id === item.id)

  const updateCart = () => {
    addItem({ id: product.id, name: product.name, image: product.image, quantity: 1 })
  }

  return (
    <Button
      variant="outline"
      onClick={updateCart}
      className="bg-[#d9eaff] w-full  text-[#1d3966]">
      {typeof (currentItem?.quantity) === "number" ?
        (
          <p>{currentItem.quantity}</p>
        )
        : (
          <p>Add to cart</p>
        )}
    </Button>
  )
}
