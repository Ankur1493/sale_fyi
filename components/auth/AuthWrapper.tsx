"use client"

import { ReactNode } from "react"
import Link from "next/link";
import { signIn } from "next-auth/react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Chrome, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})


interface AuthWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const AuthWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref }
  : AuthWrapperProps) => {

  return (
    <Card className="w-[400px] shadow-md bg-fuchsia-100 flex flex-col ">
      <CardHeader>
        <h1 className={cn("text-3xl font-semibold text-center", font.className)}>
          {headerLabel}
        </h1>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <Link href={backButtonHref} className="flex w-full text-gray-700 gap-2 justify-center items-center">
          {backButtonLabel}
          <ArrowUpRight color="gray" />
        </Link>
      </CardFooter>
    </Card>
  )
}
