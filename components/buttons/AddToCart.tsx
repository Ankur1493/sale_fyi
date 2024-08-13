"use client"
import { Product } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/store"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export const AddToCart = ({ product }: { product: Product }) => {

  const session = useSession();
  const user = session.data?.user
  const router = useRouter()

  const addItem = useCartStore(state => state.addItem)
  const items = useCartStore(state => state.items)
  const currentItem = items.find((item) => product.id === item.id)

  const updateCart = () => {
    if (session.data === null) window.location.reload()
    if (!session.data) return router.push("/login")
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
