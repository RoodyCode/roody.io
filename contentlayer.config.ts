import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: {
      type: 'string'
    },
    date: {
      type: 'date',
      required: true
    },
    published: {
      type: 'boolean',
      default: true
    },
    image: {
      type: 'string',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath
    },
    url: { type: 'string', resolve: post => `/blog/${post._raw.flattenedPath}` }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark'
        }
      ]
    ]
  }
})
