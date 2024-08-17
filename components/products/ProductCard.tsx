import * as React from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@prisma/client"
import Link from "next/link"
import { AddToCart } from "../buttons/AddToCart"

export function ProductCard({ product }: { product: Product }) {

  return (
    <Card className="w-full  px-6 py-3 h-full bg-gray-50">
      <CardContent className="bg-white">
        <Link href={`/product/${product.id}`} className="w-full h-full  flex items-center justify-center">
          <Image
            className="w-[130px] h-[130px] lg:w-[200px] lg:h-[200px]"
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </Link>
      </CardContent>
      <CardHeader className="h-[130px] lg:h-[100px]">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription>${product.price}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col xl:flex-row gap-3 justify-between">
        <AddToCart product={product} />
      </CardFooter>
    </Card >
  )
}
