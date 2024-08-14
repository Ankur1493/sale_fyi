import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@prisma/client"
import { AddToCart } from "../buttons/AddToCart"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"

export function ProductCard({ product }: { product: Product }) {

  return (
    <Card className="w-full  px-6 py-3 h-full bg-gray-50">
      <CardContent className="bg-white">
        <div className="w-full h-full  flex items-center justify-center">
          <Image
            className="w-[130px] h-[130px] md:w-[200px] md:h-[200px]"
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription>${product.price}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col xl:flex-row gap-3 justify-between">
        <Button className="bg-[#1d3966] w-full">
          <Link href={`/product/${product.id}`} className="flex items-center justify-around"><p className="text-sm">Checkout</p><MoveUpRight size={15} /></Link>
        </Button>
        <AddToCart product={product} />
      </CardFooter>
    </Card>
  )
}
