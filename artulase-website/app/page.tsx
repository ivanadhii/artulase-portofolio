import Link from 'next/link'
import Image from 'next/image'
import { getServices, getHero, getFeaturedPortfolios, getAbout } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

export default async function Home() {
  const [services, hero, portfolios, about] = await Promise.all([
    getServices(),
    getHero(),
    getFeaturedPortfolios(),
    getAbout(),
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              {hero?.title || 'Artulase'}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 md:mb-6">
              {hero?.subtitle || 'Packaging Solution and Printing'}
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed">
              {hero?.description || 'Dengan lebih dari 20 tahun pengalaman menyediakan produk kemasan untuk UKM, usaha rintisan bisnis, dan perusahaan multinasional.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/services"
                className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Lihat Layanan Kami
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {about?.stats && about.stats.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {about.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <main className="container mx-auto px-4">
        {/* Services Section */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Layanan Kami</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Solusi lengkap untuk kebutuhan packaging dan printing bisnis Anda
            </p>
          </div>

          {services.length === 0 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <p className="text-yellow-800 text-lg">Belum ada layanan tersedia.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service._id}
                  href={`/services/${service.slug.current}`}
                  className="border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all hover:border-gray-300 group"
                >
                  {service.icon && (
                    <div className="relative h-16 w-16 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(service.icon).width(100).height(100).url()}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description || 'Layanan berkualitas untuk kebutuhan bisnis Anda'}
                  </p>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Pelajari Lebih Lanjut →
                  </span>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Lihat Semua Layanan
            </Link>
          </div>
        </section>

        {/* Featured Portfolio */}
        {portfolios.length > 0 && (
          <section className="py-16 bg-gray-50 -mx-4 px-4 md:mx-0 md:px-0 md:rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Unggulan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kepercayaan klien adalah kebanggaan kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolios.map((portfolio) => (
                <Link
                  key={portfolio._id}
                  href={`/portfolio/${portfolio.slug.current}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    {portfolio.images && portfolio.images[0] && (
                      <div className="relative h-64 bg-gray-100">
                        <Image
                          src={urlFor(portfolio.images[0]).width(600).height(400).url()}
                          alt={portfolio.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {portfolio.client && (
                        <p className="text-sm text-gray-500 mb-2">{portfolio.client}</p>
                      )}
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {portfolio.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Lihat Semua Portfolio
              </Link>
            </div>
          </section>
        )}

        {/* Values Section */}
        {about?.values && about.values.length > 0 && (
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {about.values.map((value, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Siap Mewujudkan Kemasan Impian Anda?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
              Konsultasikan kebutuhan printing dan packaging Anda bersama tim profesional kami
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami Sekarang
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
