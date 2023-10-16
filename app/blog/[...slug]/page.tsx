import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components/blog/MDx'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { absoluteUrl, cn, formatDate } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find(post => post.slug === slug)

  if (!post) return null
  return post
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) return {}

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', post.title)
  ogUrl.searchParams.set('type', 'Blog Post')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      type: 'article',
      authors: ['roody'],
      url: absoluteUrl(post.slug),
      images: [
        {
          // url: ogUrl.toString(),
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      // images: [ogUrl.toString()]
      images: [post.image]
    }
  }
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return allPosts.map(post => ({
    slug: post.slug.split('/')
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time dateTime={post.date} className="block text-sm text-muted-foreground">
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl font-bold leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }))}>
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}
