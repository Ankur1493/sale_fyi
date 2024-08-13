"use client"
import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/store/store"
import Link from "next/link"

export const CartButton = () => {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link href={"/cart"} className="flex backdrop-blur-md items-center min-w-[100px] justify-center gap-1 text-sm font-medium group whitespace-nowrap ring-offset-background transition-colors 
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
     disabled:opacity-50 text-[#1d3966] bg-[#d9eaff] w-max rounded-full hover:bg-[#1d3966] hover:text-white h-10 px-6 py-2">
      <ShoppingCart size={20} />
      {items.length === 0 ? <p>{" "}</p> : <p>{totalItems}</p>}
    </Link>
  )
}
