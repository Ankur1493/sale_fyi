"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useCartStore } from "@/store/store"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export const OrderSummary = () => {

  const router = useRouter()
  const session = useSession()
  const user = session.data?.user

  const items = useCartStore(state => state.items)
  const totalPrice = items.reduce((acc, item) => { return acc += item.price * item.quantity }, 0)
  const totalQty = items.reduce((acc, item) => { return acc += item.quantity }, 0)
  const totalAmount = Math.floor(totalPrice - totalPrice * 0.15)

  const placeOrder = () => {
    if (!user) {
      router.push("/login?redirect=cart")
    }
    console.log("order placed")
  }

  return (
    <Card className={cn("xl:w-2/6 w-full", items.length === 0 ? "hidden" : "")}>
      <CardHeader>
        <CardTitle className="text-main">Order Summary</CardTitle>
        <CardDescription>Ready to purchase these items</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p>Price</p>
          <p>${totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Items</p>
          <p>{totalQty}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>${Math.floor(totalPrice * 0.05)}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>15%</p>
        </div>
        <div className="flex justify-between text-lg font-bold text-main">
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={placeOrder} className="w-full text-[#1d3966] bg-[#d9eaff]  hover:bg-[#1d3966] hover:text-white">Place your Order</Button>
      </CardFooter>
    </Card>
  )
}
