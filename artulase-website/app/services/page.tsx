import Link from 'next/link'
import Image from 'next/image'
import { getServices } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">
            Professional printing solutions for your business
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {services.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <p className="text-yellow-800 text-lg">No services available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service._id}
                href={`/services/${service.slug.current}`}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {service.icon && (
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={urlFor(service.icon).width(400).height(300).url()}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description || 'No description available'}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <ul className="mb-4 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-500 flex items-start">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.priceRange && (
                    <p className="text-sm font-medium text-blue-600">{service.priceRange}</p>
                  )}

                  <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
