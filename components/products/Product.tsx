import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { getProductDetails } from "@/data/product"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "../ui/button"
import { AddToCart } from "../buttons/AddToCart"



export const Product = async ({ productId }: { productId: string }) => {

  const product = await getProductDetails(productId)
  if (!product) {
    redirect("/")
  }

  return (
    <div>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className=" overflow-y-hidden h-full w-full px-4 xl:px-0 pt-12 flex flex-col xl:flex-row justify-center gap-4 items-center xl:items-start">

        <div className="flex w-full md:w-1/2 items-center justify-center rounded-xl border border-gray-200">
          <Image
            className="h-[400px] w-[400px]"
            src={product?.image}
            alt={product?.name}
            width={500}
            height={500}
          />
        </div>
        <div className="w-full xl:w-1/2 pt-5 ">
          <div className="flex flex-col gap-3 pt-2">
            <div className="text-6xl font-medium text-main">
              {product.name}
            </div>
            <div className="w-full text-gray-900 text-sm">
              {product.desc}
            </div>
            <div className=" xl:pt-6 pt-3">
              <p className="text-xs text-cyan-700">Special Price</p>
              <div className="flex gap-3">
                <p className="text-3xl">
                  ${product.price}
                </p>
                <p className="line-through">
                  ${product.price + Math.floor(Math.random() * 30)}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <AddToCart product={product} />
              <Button className="w-full">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
