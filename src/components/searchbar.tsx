"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";


export default function SearchBar() {
  const searchParams = useSearchParams();
  const ref = useRef(null)
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") ?? "")
  const router = useRouter()
  const pathname = usePathname()


  useEffect(() => {
    if (searchTerm) {
      router.push("/search?" + createQueryString("q", searchTerm));
    }
  }, [searchTerm])

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  }, [searchParams])


  return (
    <Input value={searchTerm} onChange={(e) => {
      setSearchTerm(e.target.value);
    }} className="placeholder:italic w-full" placeholder="Cari" />
  )
}

