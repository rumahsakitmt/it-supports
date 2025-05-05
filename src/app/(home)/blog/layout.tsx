import React from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased md:px-10 mt-24">
      {children}
    </div>
  )
}

