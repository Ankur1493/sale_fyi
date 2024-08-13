"use client"

import { signOut } from "next-auth/react"

export const SignOutButton = () => {
  return (
    <button onClick={() => signOut()} className="flex justify-center items-center text-main bg-white hover:bg-[#d9eaff66] 
      rounded-full text-sm h-10 px-2 sm:px-4 py-2 font-medium" type='submit'>
      Sign Out
    </button>
  )
}
