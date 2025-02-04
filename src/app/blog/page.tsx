import { Metadata } from "next"
import BlogCard from "@/components/features/blog/BlogCard"
import { db } from "@/lib/db"

export const metadata: Metadata = {
  title: "Blog | iCar Wreckers Perth",
  description: "Latest articles about car selling, recycling, and automotive tips in Perth"
}

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string | undefined
  category: string
  createdAt: Date
}

export default async function BlogPage() {
  const posts = await db.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 9
  })

  // Convert the posts to match the BlogCard component's expected type
  const formattedPosts: BlogPost[] = posts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image || undefined,
    category: post.category,
    createdAt: post.createdAt
  }))

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Latest articles about car selling, recycling, and automotive tips in Perth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {formattedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}