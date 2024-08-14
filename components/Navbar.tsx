import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import { CartButton } from "./CartButton"
import { SignOutButton } from "./buttons/SignOutButton"

export default async function Navbar() {
  const session = await auth()
  return (
    <div className="h-16 w-full z-30 bg-[#ffffff80] backdrop-blur-md flex justify-between items-center border-b border-b-[#1d3966] border-dashed">
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
      <div className="flex gap-1 sm:gap-2 items-center justify-center">
        {
          session ?
            (
              <SignOutButton />
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
