import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { auth, signOut } from "@/auth"
import { ShoppingCart } from "lucide-react"
import { CartButton } from "./CartButton"

export default async function Navbar() {
  const session = await auth()
  return (
    <div className="h-16 w-full z-30 bg-[#ffffff80] backdrop-blur-md  sticky top-0 flex justify-between items-center border-b border-b-[#1d3966] border-dashed">
      <div className="text-2xl font-medium">
        <Link href={"/"} className="flex">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={30}
            height={60}
          />
          <p className="text-main pl-1">sales</p>
        </Link>
      </div>
      <div className="flex gap-1 sm:gap-4 items-center justify-center">
        {
          session ?
            (
              <form action={async () => {
                "use server"
                await signOut()
              }}>
                <button className="flex justify-center items-center text-main bg-white hover:bg-[#d9eaff66] 
              rounded-full text-sm h-10 px-2 sm:px-4 py-2 font-medium" type='submit'>Sign Out</button>
              </form>
            ) : (
              <Link href="/login" className="flex justify-center items-center text-main bg-white hover:bg-[#d9eaff66] 
              rounded-full text-sm h-10 px-2 sm:px-4 py-2 font-medium">
                Login
              </Link>
            )
        }
        <CartButton />
      </div>
    </div >
  )
}
