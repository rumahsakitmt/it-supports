"use client";

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import SearchBar from "./searchbar"
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full bg-background z-50">
      <div className="w-full border border-dashed ">
        <div className="max-w-7xl mx-auto border-x border-dashed p-4 flex items-center justify-between gap-6">
          <Link href="/" className="text-md md:text-xl font-bold">RSUDMT-<span className="font-normal text-sm italic">IT supports</span></Link>
          {
            pathname === "/search" && <div className="w-2xl">
              <SearchBar />
            </div>
          }
          <Button variant="outline" className="border-dashed">
            Feedback
          </Button>
        </div>
      </div>
    </nav>
  )
}

