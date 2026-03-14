import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getServices, getHero, getFeaturedPortfolios, getAbout, getContact } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import BodyScrollSnap from '@/components/BodyScrollSnap'

export default async function Home() {
  const [services, hero, portfolios, about, contact] = await Promise.all([
    getServices(),
    getHero(),
    getFeaturedPortfolios(),
    getAbout(),
    getContact(),
  ])

  const bgImageUrl = hero?.backgroundImage
    ? urlFor(hero.backgroundImage).width(1920).height(1080).url()
    : null

  const aboutImageUrl = about?.image
    ? urlFor(about.image).width(800).height(600).url()
    : null

  return (
    <>
      <BodyScrollSnap />

      {/* ── HOME ── */}
      <section
        id="home"
        className="h-screen snap-start relative flex items-center"
      >
        {bgImageUrl ? (
          <Image src={bgImageUrl} alt="Hero background" fill className="object-cover" priority />
        ) : null}
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative z-10 container mx-auto px-8 pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {hero?.title || 'PT ARTULASE'}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-4">
            {hero?.subtitle || 'Packaging Solution and Printing'}
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            {hero?.description || 'Dengan lebih dari 20 tahun pengalaman menyediakan produk kemasan untuk UKM, usaha rintisan bisnis, dan perusahaan multinasional.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#layanan" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Layanan Kami
            </a>
            <a href="#kontak" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* ── PROFILE ── */}
      <section id="profile" className="h-screen snap-start flex items-center bg-white">
        <div className="container mx-auto px-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {about?.title || 'Tentang Kami'}
              </h2>
              {about?.tagline && (
                <p className="text-lg text-gray-500 mb-4">{about.tagline}</p>
              )}
              {about?.description ? (
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {(about.description as any)?.[0]?.children?.[0]?.text || ''}
                </p>
              ) : (
                <p className="text-gray-600 leading-relaxed mb-6">
                  Artulase adalah perusahaan printing profesional yang berdedikasi memberikan layanan printing berkualitas tinggi untuk bisnis dari semua skala.
                </p>
              )}
              {about?.stats && about.stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
                  {about.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {aboutImageUrl ? (
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image src={aboutImageUrl} alt="Tentang Artulase" fill className="object-cover" />
              </div>
            ) : (
              <div className="hidden lg:flex h-96 bg-gray-100 rounded-xl items-center justify-center">
                <span className="text-gray-400 text-6xl font-bold">A</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── LAYANAN KAMI ── */}
      <section id="layanan" className="h-screen snap-start flex items-center bg-gray-50">
        <div className="container mx-auto px-8 pt-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 text-center">Layanan Kami</h2>
          <p className="text-gray-500 text-center mb-6">Solusi lengkap untuk kebutuhan packaging dan printing bisnis Anda</p>
          {services.length === 0 ? (
            <p className="text-center text-gray-400">Belum ada layanan tersedia.</p>
          ) : (
            <div className="overflow-hidden">
              <div className="animate-marquee" style={{'--marquee-duration': `${services.length * 3}s`} as React.CSSProperties}>
                {[...services, ...services].map((service, i) => (
                  <Link
                    key={`${service._id}-${i}`}
                    href={`/services/${service.slug.current}`}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex-shrink-0 w-64 mx-3"
                  >
                    <div className="relative w-full aspect-square bg-gray-100">
                      {service.image ? (
                        <Image
                          src={urlFor(service.image).width(400).height(400).url()}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : service.icon ? (
                        <Image src={urlFor(service.icon).width(256).height(256).url()} alt={service.title} fill className="object-contain p-4" />
                      ) : (
                        <span className="w-full h-full flex items-center justify-center text-gray-300 text-4xl font-bold">A</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {service.description || 'Layanan berkualitas untuk kebutuhan bisnis Anda'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── GALERI ── */}
      <section id="galeri" className="h-screen snap-start flex items-center bg-white text-gray-900">
        <div className="pt-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-center">Galeri</h2>
          <p className="text-gray-500 text-center mb-6">Kepercayaan klien adalah kebanggaan kami</p>
          {portfolios.length === 0 ? (
            <p className="text-center text-gray-400">Belum ada portfolio tersedia.</p>
          ) : (
            <div className="overflow-hidden">
              <div className="animate-marquee-reverse" style={{'--marquee-duration': `${portfolios.length * 3}s`} as React.CSSProperties}>
                {[...portfolios, ...portfolios].map((portfolio, i) => (
                  <Link key={`${portfolio._id}-${i}`} href={`/portfolio/${portfolio.slug.current}`} className="group flex-shrink-0 w-64 mx-3">
                    <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      {portfolio.images && portfolio.images[0] && (
                        <Image
                          src={urlFor(portfolio.images[0]).width(400).height(400).url()}
                          alt={portfolio.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                        <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {portfolio.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── KONTAK KAMI ── */}
      <section id="kontak" className="h-screen snap-start flex items-center bg-gray-900 text-white">
        <div className="container mx-auto px-8 pt-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Kontak Kami</h2>
          <p className="text-gray-400 text-center mb-6">Hubungi kami untuk kebutuhan printing dan packaging Anda</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Info + Map kiri-kanan */}
            <div className="grid grid-cols-2 gap-4 content-start">
            {contact?.email && (
              <a href={`mailto:${contact.email}`} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-white font-medium text-sm break-all">{contact.email}</p>
              </a>
            )}
            {contact?.phone && (
              <a href={`tel:${contact.phone}`} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400 mb-1">Telepon</p>
                <p className="text-white font-medium text-sm">{contact.phone}</p>
              </a>
            )}
            {contact?.whatsapp && (
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                <p className="text-white font-medium text-sm">Chat Sekarang</p>
              </a>
            )}
            {contact?.address && (
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400 mb-1">Alamat</p>
                <p className="text-white font-medium text-sm">{contact.address.city}, {contact.address.province}</p>
              </div>
            )}
            </div>

            {/* Peta */}
            <div className="rounded-xl overflow-hidden h-64 lg:h-full min-h-48">
              {contact?.mapUrl ? (
                <div className="relative h-full">
                  <iframe
                    src={contact.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Artulase"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    className="h-full w-full"
                  />
                  {process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL && (
                    <a
                      href={process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 bg-white text-gray-900 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Buka di Google Maps
                    </a>
                  )}
                </div>
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Peta belum tersedia</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
