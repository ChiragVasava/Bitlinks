"use client"

import { useState, React } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="relative bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-white font-bold text-xl tracking-tight hover:text-purple-200 transition-colors duration-200">
                <span className="text-2xl">🔗</span> BitLinks
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-purple-600/50">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-purple-600/50">
                About
              </Link>
              <Link href="/shorten" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-purple-600/50">
                Shorten
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-purple-600/50">
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/generate">
              <button className="bg-white text-purple-700 hover:bg-purple-50 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                Try Now
              </button>
            </Link>
            <Link
              href="https://github.com/ChiragVasava/Bitlinks.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 border border-purple-400">
                GitHub
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-200 hover:bg-purple-600/50 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-purple-800/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-purple-600/30">
          <Link href="/" onClick={closeMenu} className="text-white hover:text-purple-200 hover:bg-purple-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="text-white hover:text-purple-200 hover:bg-purple-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            About
          </Link>
          <Link href="/shorten" onClick={closeMenu} className="text-white hover:text-purple-200 hover:bg-purple-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Shorten
          </Link>
          <Link href="/contact" onClick={closeMenu} className="text-white hover:text-purple-200 hover:bg-purple-600/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            Contact
          </Link>

          {/* Mobile CTA Buttons */}
          <div className="pt-4 pb-2 border-t border-purple-600/30 mt-4">
            <div className="flex flex-col space-y-2 px-3">
              <Link href="/generate" onClick={closeMenu}>
                <button className="w-full bg-white text-purple-700 hover:bg-purple-50 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200">
                  Try Now
                </button>
              </Link>
              <Link href="/github" onClick={closeMenu}>
                <button className="w-full bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 border border-purple-400">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar