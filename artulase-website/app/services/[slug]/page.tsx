import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getServices } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.slug.current,
  }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="text-gray-300 hover:text-white mb-4 inline-block"
          >
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          {service.priceRange && (
            <p className="text-xl text-gray-300">{service.priceRange}</p>
          )}
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {service.icon && (
              <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                <Image
                  src={urlFor(service.icon).width(800).height(600).url()}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
            <p className="text-gray-600 text-lg mb-8">
              {service.description || 'No description available'}
            </p>

            {service.features && service.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interested in this service?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact us to discuss your project and get a custom quote.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
