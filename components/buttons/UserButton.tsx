"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

export const UserButton = () => {
  const session = useSession()
  const user = session.data?.user
  return (
    <Link href="/profile">
      <button className="flex justify-center items-center text-main bg-white hover:bg-[#d9eaff66] 
      rounded-full text-sm h-10 px-2 sm:px-4 py-2 font-medium" type='submit'>
        {user?.name}
      </button>
    </Link>
  )
}
