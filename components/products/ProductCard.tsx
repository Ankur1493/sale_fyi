import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@prisma/client"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full px-6 h-full">
      <CardHeader>
        <CardTitle className="min-h-16">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            className="w-[130px] h-[130px] md:w-[200px] md:h-[200px]"
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col xl:flex-row gap-3 justify-between">
        <Button variant="outline" className="bg-[#d9eaff] w-full  text-[#1d3966]">Add to Cart</Button>
        <Button className="bg-[#1d3966] w-full">Buy Now</Button>
      </CardFooter>
    </Card>
  )
}
