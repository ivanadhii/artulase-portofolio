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

// Services
export async function getServices(): Promise<Service[]> {
  return client.fetch(`*[_type == "service"] | order(order asc)`)
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug })
}

// Products
export async function getProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"]`)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product" && featured == true]`)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug })
}

// Portfolio
export async function getPortfolios(): Promise<Portfolio[]> {
  return client.fetch(`*[_type == "portfolio"] | order(completionDate desc)`)
}

export async function getFeaturedPortfolios(): Promise<Portfolio[]> {
  return client.fetch(`*[_type == "portfolio" && featured == true] | order(completionDate desc)`)
}

export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
  return client.fetch(
    `*[_type == "portfolio" && slug.current == $slug][0]{
      ...,
      services[]->
    }`,
    { slug }
  )
}

// About
export async function getAbout(): Promise<About | null> {
  return client.fetch(`*[_type == "about"][0]`)
}

// Team
export async function getTeam(): Promise<Team[]> {
  return client.fetch(`*[_type == "team"] | order(order asc)`)
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(`*[_type == "testimonial"]`)
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return client.fetch(`*[_type == "testimonial" && featured == true]`)
}

// Contact
export async function getContact(): Promise<Contact | null> {
  return client.fetch(`*[_type == "contact"][0]`)
}

// Hero
export async function getHero(): Promise<Hero | null> {
  return client.fetch(`*[_type == "hero"][0]`)
}
