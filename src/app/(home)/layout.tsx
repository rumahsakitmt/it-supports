import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-mono">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 border border-dashed">
        {children}
      </div>
      <Footer />
    </div>
  )
}

