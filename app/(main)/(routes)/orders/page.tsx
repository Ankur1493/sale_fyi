import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Orders } from "@/components/orders/Orders"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function OrdersPage() {

  const session = await auth()
  const user = session?.user?.id

  if (!user) {
    redirect("/")
  }

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
            <BreadcrumbPage>Orders</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Orders userId={user} />
    </div>
  )
}
