import { allPosts } from 'contentlayer/generated'

export default async function sitemap() {
  const blogs = allPosts.map(post => ({
    url: `https://roody.io/blog/${post.slug}`,
    lastModified: post.date
  }))

  const routes = ['', '/blog', '/projects', '/contact'].map(route => ({
    url: `https://roody.io${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...blogs]
}
