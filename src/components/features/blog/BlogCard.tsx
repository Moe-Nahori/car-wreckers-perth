import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    image?: string
    category: string
    createdAt: Date
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <CardHeader className="space-y-2 p-4">
          {post.image && (
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {formatDate(post.createdAt)}
            </span>
            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
              {post.category}
            </span>
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  )
}