import Link from 'next/link'
import { getContact } from '@/lib/queries'

export default async function Footer() {
  const contact = await getContact()

  return (
    <footer className="bg-gray-900 text-white mt-12 md:mt-16">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Artulase</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Professional printing services for all your business needs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              {contact?.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact?.phone && (
                <li>
                  <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact?.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Follow Us</h4>
            <div className="flex gap-4 text-sm md:text-base">
              {contact?.social?.instagram && (
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              )}
              {contact?.social?.facebook && (
                <a
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Artulase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
