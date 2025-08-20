import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Layout() {
  const location = useLocation()
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isHomePage = location.pathname === '/'
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-remix-dark to-remix-darker text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-remix-dark/60 backdrop-blur-md z-50 border-b border-remix-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-black text-xl sm:text-2xl bg-gradient-to-r from-remix-blue to-purple-400 bg-clip-text text-transparent">
              AI Plans
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-remix-gray-800 transition-colors"
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
            
            {/* Desktop navigation */}
            <div className="hidden md:flex gap-8 text-sm font-medium items-center">
              {isHomePage ? (
                <>
                  <a href="#what" className="text-gray-300 hover:text-remix-blue transition-all duration-200 hover:scale-105">What</a>
                  <a href="#format" className="text-gray-300 hover:text-remix-blue transition-all duration-200 hover:scale-105">Format</a>
                  <a href="#example" className="text-gray-300 hover:text-remix-blue transition-all duration-200 hover:scale-105">Example</a>
                  <a href="#getting-started" className="text-gray-300 hover:text-remix-blue transition-all duration-200 hover:scale-105">Get Started</a>
                </>
              ) : (
                <Link to="/" className="text-gray-300 hover:text-remix-blue transition-all duration-200 hover:scale-105">Home</Link>
              )}
              
              {/* Tools Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setToolsMenuOpen(!toolsMenuOpen)}
                  onBlur={() => setTimeout(() => setToolsMenuOpen(false), 200)}
                  className="flex items-center gap-2 text-gray-300 hover:text-remix-blue transition-all duration-200 hover:scale-105"
                >
                  Tools
                  <svg className={`w-4 h-4 transition-transform ${toolsMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {toolsMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-remix-gray-900 rounded-lg border border-remix-gray-800 shadow-xl overflow-hidden">
                    <Link
                      to="/claude-code"
                      className="block px-4 py-3 text-gray-300 hover:bg-remix-gray-800 hover:text-remix-blue transition-colors"
                      onClick={() => setToolsMenuOpen(false)}
                    >
                      Claude Code
                    </Link>
                    <Link
                      to="/cursor"
                      className="block px-4 py-3 text-gray-300 hover:bg-remix-gray-800 hover:text-purple-400 transition-colors"
                      onClick={() => setToolsMenuOpen(false)}
                    >
                      Cursor
                    </Link>
                    <Link
                      to="/github-copilot"
                      className="block px-4 py-3 text-gray-300 hover:bg-remix-gray-800 hover:text-green-400 transition-colors"
                      onClick={() => setToolsMenuOpen(false)}
                    >
                      GitHub Copilot
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed w-full bg-gray-900 md:hidden z-50" style={{top: '73px', height: 'calc(100vh - 73px)'}}>
            <div className="h-full overflow-y-auto px-4 py-6 space-y-3">
              {isHomePage ? (
                <>
                  <a 
                    href="#what" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg text-white hover:text-remix-blue bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                  >
                    What
                  </a>
                  <a 
                    href="#format" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg text-white hover:text-remix-blue bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                  >
                    Format
                  </a>
                  <a 
                    href="#example" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg text-white hover:text-remix-blue bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                  >
                    Example
                  </a>
                  <a 
                    href="#getting-started" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg text-white hover:text-remix-blue bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                  >
                    Get Started
                  </a>
                </>
              ) : (
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-lg text-gray-200 hover:text-remix-blue bg-remix-gray-800 hover:bg-remix-gray-700 rounded-lg transition-all border border-remix-gray-700"
                >
                  Home
                </Link>
              )}
              
              <div className="border-t border-gray-600 pt-4">
                <p className="px-4 py-2 text-sm text-gray-400 font-semibold uppercase tracking-wide mb-2">Tools</p>
                <div className="space-y-2">
                  <Link
                    to="/claude-code"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg text-white hover:text-remix-blue bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                  >
                    Claude Code
                  </Link>
                  <Link
                    to="/cursor"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg text-white hover:text-purple-400 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                  >
                    Cursor
                  </Link>
                  <Link
                    to="/github-copilot"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg text-white hover:text-green-400 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                  >
                    GitHub Copilot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="border-t border-remix-gray-800 px-4 sm:px-6 py-12 sm:py-16 bg-remix-darker">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-lg font-medium">
            AI Plans - A pattern for documenting AI-assisted development
          </p>
          <p className="text-gray-600 mt-3">
            Created with AI assistance and documented in{' '}
            <a href="/plans/2025-01-19-ai-plans-website.md" className="text-remix-blue hover:text-remix-yellow transition-colors hover:underline">
              its own AI Plan
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout