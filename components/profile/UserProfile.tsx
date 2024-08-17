"use client"

import { Purchase } from "@prisma/client"

export const UserProfile = ({ purchases }: { purchases: Purchase[] }) => {

  return (
    <div className="w-full h-full pt-5">
      <div>
        <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full bg-[#f92323] text-white">{}</div>
      </div>
    </div>
  )
}
