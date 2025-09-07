import React from 'react'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content Side */}
            <div className="flex flex-col gap-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start">
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                  🚀 #1 URL Shortener
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Best URL Shortener</span> in the Market
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We are the most straightforward URL shortener in the world. No tracking, no signup required, no personal details needed. Just pure simplicity and privacy.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="/shorten"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Try Now - Its Free
                </a>
                <a 
                  href="https://github.com/ChiragVasava/Bitlinks.git"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  No Registration Required
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Privacy Focused
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Lightning Fast
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
              </div>
              
              {/* Main Visual */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-md w-full mx-4">
                <div className="space-y-6">
                  {/* Mock Browser Bar */}
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-4 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500 flex-1">
                      bitlinks.com
                    </div>
                  </div>
                  
                  {/* URL Transformation Visual */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-2">Long URL</div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <div className="text-xs text-red-700 break-all font-mono">
                          https://example.com/very/long/url/with/many/parameters?utm_source=social&utm_medium=post&utm_campaign=2024
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="bg-purple-100 rounded-full p-2">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-2">Short URL</div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="text-sm text-green-700 font-mono">
                          bitlinks.com/abc123
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-xs text-gray-500">Shorter</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">0.1s</div>
                      <div className="text-xs text-gray-500">Generation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BitLinks?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We Have built the most user-friendly URL shortener with privacy and simplicity at its core
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Private</h3>
              <p className="text-gray-600">No tracking, no analytics, no data collection. Your privacy is our priority.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Generate short URLs in milliseconds with our optimized infrastructure.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom URLs</h3>
              <p className="text-gray-600">Create memorable, branded short links that represent your content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Shorten Your URLs?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust BitLinks for their URL shortening needs. No signup required!
          </p>
          <a 
            href="/shorten"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-purple-700 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl group"
          >
            <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Shortening Now
          </a>
        </div>
      </section>
    </main>
  )
}