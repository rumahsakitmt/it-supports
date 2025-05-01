"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Input value={searchTerm} onChange={(e) => {
      if (pathname == "/") {
        router.push("/search");
      }
      setSearchTerm(e.target.value);
    }} className="placeholder:italic w-full" placeholder="Cari" />
  )
}

