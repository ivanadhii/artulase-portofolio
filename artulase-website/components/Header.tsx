'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900">
            Artulase
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
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
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
