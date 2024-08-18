"use client"

import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import useStore from "@/store/useStore";
import { useCartStore, CartStore } from "@/store/cartStore";
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { createOrder } from "@/actions/createOrder";
import { User } from "next-auth";

export const OrderSummary = ({ user }: { user: User }) => {

  const router = useRouter()

  const cartStore = useStore<CartStore, CartStore>(
    useCartStore,
    (state: any) => state
  );
  if (!cartStore) return <div></div>;
  const { items, orderPlaced } = cartStore;
  const totalPrice = items.reduce((acc, item) => { return acc += item.price * item.quantity }, 0)
  const totalQty = items.reduce((acc, item) => { return acc += item.quantity }, 0)
  const totalAmount = Math.floor(totalPrice - totalPrice * 0.15)

  const placeOrder = async () => {
    if (!user || !user.id) {
      return router.push("/login?redirect=cart");
    }
    try {
      const orderCreated = await createOrder(items, user.id, totalPrice);
      if (orderCreated) {
        router.push("/orders");
        orderPlaced()
      }
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  };

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
          <p>${totalAmount}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={placeOrder} className="w-full text-[#1d3966] bg-[#d9eaff]  hover:bg-[#1d3966] hover:text-white">Place your Order</Button>
      </CardFooter>
    </Card>
  )
}
