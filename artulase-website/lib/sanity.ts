import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'vsddgaxj',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for faster responses
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
