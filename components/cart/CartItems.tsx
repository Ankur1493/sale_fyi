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
import { useCartStore } from "@/store/store";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const CartItems = () => {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const decItems = useCartStore((state) => state.decreaseQty);

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
          <TableHead className="w-[100px]">S.No</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Amount per peice</TableHead>
          <TableHead className="text-right">Total Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
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
                onClick={() => decItems(item.id)}
                className="mr-2"
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
                className="ml-2"
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

