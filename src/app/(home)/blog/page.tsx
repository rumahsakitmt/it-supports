import { BlogPosts } from '@/components/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
