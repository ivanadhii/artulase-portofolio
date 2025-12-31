import Link from 'next/link'
import Image from 'next/image'
import { getPortfolios } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

export default async function PortfolioPage() {
  const portfolios = await getPortfolios()

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-300">
            Showcasing our best work and success stories
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {portfolios.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <p className="text-yellow-800 text-lg">No portfolio items available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio) => (
              <Link
                key={portfolio._id}
                href={`/portfolio/${portfolio.slug.current}`}
                className="group"
              >
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {portfolio.images && portfolio.images[0] && (
                    <div className="relative h-64 bg-gray-100">
                      <Image
                        src={urlFor(portfolio.images[0]).width(600).height(400).url()}
                        alt={portfolio.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {portfolio.featured && (
                        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      {portfolio.category && (
                        <span className="text-sm text-gray-500 uppercase tracking-wide">
                          {portfolio.category}
                        </span>
                      )}
                      {portfolio.completionDate && (
                        <span className="text-sm text-gray-400">
                          {new Date(portfolio.completionDate).getFullYear()}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {portfolio.title}
                    </h2>

                    {portfolio.client && (
                      <p className="text-gray-600 mb-4">Client: {portfolio.client}</p>
                    )}

                    <div className="text-blue-600 font-medium group-hover:underline">
                      View Project →
                    </div>
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
