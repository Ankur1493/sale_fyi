import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Link from "next/link";
import { AddToCart } from "../buttons/AddToCart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full px-6 py-3 h-full bg-gray-50 z-0  overflow-hidden">
      <div className="relative w-full h-[200px]">
        <CardContent className="relative bg-white overflow-hidden">
          <Link href={`/product/${product.id}`} className="w-full h-full flex items-center justify-center group">
            <Image
              className="w-[130px] z-0 h-[130px] lg:w-[200px] lg:h-[200px] transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <span className="text-white text-lg">View Details</span>
            </div>
          </Link>
        </CardContent>
      </div>
      <CardHeader className="mt-4">
        <CardTitle className="text-xl truncate">{product.name}</CardTitle>
        <CardDescription className="text-gray-500">${product.price}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-4 flex flex-col xl:flex-row gap-3 justify-between">
        <AddToCart product={product} />
      </CardFooter>
    </Card>
  );
}

