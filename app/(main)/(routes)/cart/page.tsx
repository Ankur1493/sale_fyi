import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CartItems } from "@/components/cart/CartItems"
import { OrderSummary } from "@/components/cart/OrderSummary"
import { auth } from "@/auth"

export default async function CartPage() {

  const session = await auth()
  const user = session?.user

  return (
    <div className="w-full h-full">
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full flex xl:flex-row gap-4 flex-col justify-between">
        <CartItems />
        {/*@ts-ignore*/}
        <OrderSummary user={user} />
      </div>
    </div>
  )
}
