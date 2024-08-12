import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

export default async function Navbar() {

  const session = true
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
          !session ?
            (
              <Link href={"/auth/login"}>
                <Button className="bg-black text-white">Sign Out</Button>
              </Link>
            ) : (
              <Link href="/login" className="flex justify-center items-center text-main bg-white hover:bg-[#d9eaff66] 
              rounded-full text-sm h-10 px-2 sm:px-4 py-2 font-medium ">
                Login
              </Link>
            )
        }
        <Link href={"https://github.com/ankur1493/encrypto"} target="_blank">
          <Button className="flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
            disabled:opacity-50 text-[#1d3966] bg-[#d9eaff] w-max rounded-full hover:bg-[#1d3966] hover:text-white h-10 px-4 py-2"> Claim your Profile</Button>
        </Link>
      </div>
    </div >
  )
}
