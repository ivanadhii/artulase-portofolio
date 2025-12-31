import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPortfolioBySlug, getPortfolios } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { PortableText } from 'next-sanity'

export async function generateStaticParams() {
  const portfolios = await getPortfolios()
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug.current,
  }))
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const portfolio = await getPortfolioBySlug(slug)

  if (!portfolio) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/portfolio"
            className="text-gray-300 hover:text-white mb-4 inline-block"
          >
            ← Back to Portfolio
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{portfolio.title}</h1>
              {portfolio.client && (
                <p className="text-xl text-gray-300">Client: {portfolio.client}</p>
              )}
            </div>
            {portfolio.category && (
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium">
                {portfolio.category}
              </span>
            )}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {portfolio.images && portfolio.images.length > 0 && (
          <div className="mb-12">
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden mb-4">
              <Image
                src={urlFor(portfolio.images[0]).width(1200).height(800).url()}
                alt={portfolio.title}
                fill
                className="object-cover"
              />
            </div>

            {portfolio.images.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {portfolio.images.slice(1).map((image: any, index: number) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(image).width(400).height(300).url()}
                      alt={`${portfolio.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Description</h2>
            {portfolio.description ? (
              <div className="prose max-w-none text-gray-600">
                <PortableText value={portfolio.description} />
              </div>
            ) : (
              <p className="text-gray-600">No description available</p>
            )}
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>

              <dl className="space-y-4">
                {portfolio.client && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Client</dt>
                    <dd className="text-gray-900">{portfolio.client}</dd>
                  </div>
                )}

                {portfolio.category && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Category</dt>
                    <dd className="text-gray-900">{portfolio.category}</dd>
                  </div>
                )}

                {portfolio.completionDate && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Completion Date</dt>
                    <dd className="text-gray-900">
                      {new Date(portfolio.completionDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </dd>
                  </div>
                )}

                {portfolio.services && portfolio.services.length > 0 && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-2">Services Used</dt>
                    <dd className="space-y-2">
                      {portfolio.services.map((service) => (
                        <Link
                          key={service._id}
                          href={`/services/${service.slug.current}`}
                          className="block text-blue-600 hover:underline"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
