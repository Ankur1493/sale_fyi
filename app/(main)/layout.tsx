import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="md:w-[75%] w-[95%] mx-auto">
        <Navbar />
      </div>
      <div className="md:w-[75%] w-[95%] mx-auto" >
        {children}
      </div>
    </div>
  )
}
