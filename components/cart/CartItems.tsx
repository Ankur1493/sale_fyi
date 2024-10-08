"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useStore from "@/store/useStore";
import { useCartStore, CartStore } from "@/store/cartStore";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const CartItems = () => {
  const cartStore = useStore<CartStore, CartStore>(
    useCartStore,
    (state: any) => state
  );
  if (!cartStore) return (<div></div>)
  const { items, addItem, decreaseQty, orderPlaced } = cartStore;

  return items.length === 0 ? (
    <div className="flex flex-col justify-center items-center w-full h-[500px] text-3xl text-main font-semibold">
      <p>Nothing here yet</p>
      <Link href={"/"}>
        <Image src={"/emptyCart.webp"} alt="Empty Cart" height={300} width={300} />
      </Link>
    </div>
  ) : (
    <Table>
      <TableCaption>Your Cart Items</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="w-[400px]">Quantity</TableHead>
          <TableHead>Amount per peice</TableHead>
          <TableHead className="text-right">Total Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Image
                src={item.image}
                alt={`${item.name} image`}
                height={100}
                width={100}
                className="h-[50px] w-[50px]"
              />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                onClick={() => decreaseQty(item.id)}
                className="ml-1 md:ml-0 mr-1 sm:mr-2 px-1 py-1 text-sm sm:px-3 sm:py-2 sm:text-base"
              >
                -
              </Button>
              {item.quantity}
              <Button
                variant="outline"
                onClick={() =>
                  addItem({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    quantity: 1,
                  })
                }
                className="ml-1 sm:ml-2 px-1 py-1 text-sm sm:px-3 sm:py-2 sm:text-base"
              >
                +
              </Button>
            </TableCell>
            <TableCell >
              ${item.price}
            </TableCell>
            <TableCell className="text-right">
              ${item.price * item.quantity}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

