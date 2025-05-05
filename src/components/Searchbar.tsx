"use client";

import { Suspense } from "react";
import Search from "./search";

export default function SearchBar() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Search />
    </Suspense>
  )
}

