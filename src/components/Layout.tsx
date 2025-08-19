import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Layout() {
  const location = useLocation()
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false)
  
  const isHomePage = location.pathname === '/'
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-remix-dark to-remix-darker text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-remix-dark/60 backdrop-blur-md z-50 border-b border-remix-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-black text-2xl bg-gradient-to-r from-remix-blue to-purple-400 bg-clip-text text-transparent">
              AI Plans
            </Link>
            <div className="flex gap-8 text-sm font-medium items-center">
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
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="border-t border-remix-gray-800 px-6 py-16 bg-remix-darker">
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