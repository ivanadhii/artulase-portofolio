import { client } from './sanity'
import type {
  Service,
  Product,
  Portfolio,
  About,
  Team,
  Testimonial,
  Contact,
  Hero,
} from '@/types/sanity'

const revalidate = { next: { revalidate: 3600, tags: ['sanity'] } }

// Services
export async function getServices(): Promise<Service[]> {
  return client.fetch(`*[_type == "service"] | order(order asc)`, {}, revalidate)
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug }, revalidate)
}

// Products
export async function getProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"]`, {}, revalidate)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product" && featured == true]`, {}, revalidate)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug }, revalidate)
}

// Portfolio
export async function getPortfolios(): Promise<Portfolio[]> {
  return client.fetch(`*[_type == "portfolio"] | order(completionDate desc)`, {}, revalidate)
}

export async function getFeaturedPortfolios(): Promise<Portfolio[]> {
  return client.fetch(`*[_type == "portfolio" && featured == true] | order(completionDate desc)`, {}, revalidate)
}

export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
  return client.fetch(
    `*[_type == "portfolio" && slug.current == $slug][0]{
      ...,
      services[]->
    }`,
    { slug },
    revalidate
  )
}

// About
export async function getAbout(): Promise<About | null> {
  return client.fetch(`*[_type == "about"][0]`, {}, revalidate)
}

// Team
export async function getTeam(): Promise<Team[]> {
  return client.fetch(`*[_type == "team"] | order(order asc)`, {}, revalidate)
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(`*[_type == "testimonial"]`, {}, revalidate)
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return client.fetch(`*[_type == "testimonial" && featured == true]`, {}, revalidate)
}

// Contact
export async function getContact(): Promise<Contact | null> {
  return client.fetch(`*[_type == "contact"][0]`, {}, revalidate)
}

// Hero
export async function getHero(): Promise<Hero | null> {
  return client.fetch(`*[_type == "hero"][0]`, {}, revalidate)
}
