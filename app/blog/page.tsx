import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore the world of web technologies, React, Docker, and Raspberry Pis with my tech blog. From beginner-friendly guides to advanced techniques, I provide step-by-step instructions, practical tips, and real-world examples.',
  keywords: [
    'roody',
    'tech',
    'docker',
    'raspberrypi',
    'react',
    'web development',
    'tutorial',
    'guide',
    'web technologies'
  ]
}

export default function Blog() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="scroll-m-20 text-4xl font-bold dark:font-extrabold tracking-tight lg:text-4xl">
        My Blog
      </h1>
      <p className="mb-10 leading-7 [&:not(:first-child)]:mt-6">
        Explore the world of web technologies, React, Docker, and Raspberry Pis with my
        tech blog.
      </p>

      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2 transition-translate duration-300 hover:-translate-y-1"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
              )}
              <Link href={post.url} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
