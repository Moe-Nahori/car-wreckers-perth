import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { db } from "@/lib/db"
import { formatDate } from "@/lib/utils"
import { CalendarDays, User } from "lucide-react"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await db.blogPost.findUnique({
    where: { slug: params.slug }
  })

  if (!post) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist."
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDesc || post.excerpt
  }
}

export default async function BlogPost({ params }: Props) {
  const post = await db.blogPost.findUnique({
    where: { slug: params.slug }
  })

  if (!post || !post.published) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="space-y-8">
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.createdAt.toISOString()}>
                  {formatDate(post.createdAt)}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </header>

          {post.image && (
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-base prose-p:leading-7 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg prose-img:my-8" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </main>
  )
}