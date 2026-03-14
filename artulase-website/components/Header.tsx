'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center text-white font-bold text-sm">A</div>
            <span className="text-xl md:text-2xl font-bold text-gray-900">PT ARTULASE</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            <li>
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#profile" className="text-gray-700 hover:text-gray-900 transition-colors">
                Profile
              </a>
            </li>
            <li>
              <a href="#layanan" className="text-gray-700 hover:text-gray-900 transition-colors">
                Layanan Kami
              </a>
            </li>
            <li>
              <a href="#galeri" className="text-gray-700 hover:text-gray-900 transition-colors">
                Galeri
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Kontak Kami
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#home" className="block text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#profile" className="block text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Profile
                </a>
              </li>
              <li>
                <a href="#layanan" className="block text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Layanan Kami
                </a>
              </li>
              <li>
                <a href="#galeri" className="block text-gray-700 hover:text-gray-900 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Galeri
                </a>
              </li>
              <li>
                <a href="#kontak" className="block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
