import Link from "next/link"
import { auth } from "@/auth"
import { getUserPurchases } from "@/data/purchase"

import { UserProfile } from "@/components/profile/UserProfile"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { redirect } from "next/navigation"


export default async function ProfilePage() {

  const session = await auth()
  const user = session?.user

  if (!user || !user.id) {
    redirect("/login")
  }

  const userPurchases = await getUserPurchases(user.id) || []
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
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <UserProfile purchases={userPurchases} />
    </div>
  )
}

