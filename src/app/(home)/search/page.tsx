import Link from "next/link";
import { getBlogPosts } from "../blog/utils"

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
export default async function SearchPage({ searchParams
}: PageProps) {
  const query = searchParams.q || ''

  const searchPosts = (posts: any[], query: string) => {
    if (!query && query.length > 0) return [];

    const normalizedQuery = query.toLowerCase().trim();

    return posts.filter(post => {
      const titleMatch = post.metadata.title?.toLowerCase().includes(normalizedQuery);
      const slugMatch = post.slug?.toLowerCase().includes(normalizedQuery);

      return titleMatch || slugMatch;
    });
  };

  const posts = searchPosts(getBlogPosts(), query?.toString() || "");

  return (
    <div className="mt-24">
      <div className="flex flex-col gap-2">
        {
          posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>{post.metadata.title}</Link>
          ))
        }
      </div>
    </div>
  )
}

