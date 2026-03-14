import type { SanityImageSource } from '@sanity/image-url'
import type { PortableTextBlock } from '@portabletext/types'

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: {
    current: string
  }
  description?: string
  image?: SanityImageSource
  icon?: SanityImageSource
  features?: string[]
  priceRange?: string
  order?: number
}

export interface Product {
  _id: string
  _type: 'product'
  title: string
  slug: {
    current: string
  }
  category?: string
  description?: PortableTextBlock[]
  images?: SanityImageSource[]
  specifications?: Array<{
    label: string
    value: string
  }>
  price?: string
  featured?: boolean
}

export interface Portfolio {
  _id: string
  _type: 'portfolio'
  title: string
  slug: {
    current: string
  }
  client?: string
  category?: string
  description?: PortableTextBlock[]
  images: SanityImageSource[]
  completionDate?: string
  services?: Service[]
  featured?: boolean
}

export interface About {
  _id: string
  _type: 'about'
  title?: string
  tagline?: string
  description?: PortableTextBlock[]
  image?: SanityImageSource
  yearEstablished?: number
  mission?: string
  vision?: string
  values?: Array<{
    title: string
    description: string
  }>
  stats?: Array<{
    number: string
    label: string
  }>
}

export interface Team {
  _id: string
  _type: 'team'
  name: string
  position: string
  photo?: SanityImageSource
  bio?: string
  email?: string
  phone?: string
  social?: {
    linkedin?: string
    instagram?: string
    facebook?: string
  }
  order?: number
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  clientName: string
  company?: string
  position?: string
  photo?: any
  testimonial: string
  rating: number
  project?: Portfolio
  featured?: boolean
}

export interface Contact {
  _id: string
  _type: 'contact'
  title?: string
  email: string
  phone: string
  whatsapp?: string
  address?: {
    street: string
    city: string
    province: string
    postalCode: string
    country: string
  }
  mapUrl?: string
  workingHours?: Array<{
    day: string
    hours: string
  }>
  social?: {
    instagram?: string
    facebook?: string
    linkedin?: string
    twitter?: string
    youtube?: string
  }
}

export interface Hero {
  _id: string
  _type: 'hero'
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: any
  ctaButtons?: Array<{
    text: string
    url: string
    style: 'primary' | 'secondary' | 'outline'
  }>
}
