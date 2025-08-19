function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl">AI Plans</div>
            <div className="flex gap-8 text-sm">
              <a href="#what" className="hover:text-cyan-400 transition-colors">What</a>
              <a href="#format" className="hover:text-cyan-400 transition-colors">Format</a>
              <a href="#example" className="hover:text-cyan-400 transition-colors">Example</a>
              <a href="#getting-started" className="hover:text-cyan-400 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI Plans
              </span>
            </h1>
            <p className="mt-6 text-2xl md:text-3xl font-light text-gray-300 leading-relaxed">
              Document your AI's decision-making process with version-controlled markdown files.
            </p>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              Like Architecture Decision Records (ADRs), but specifically designed for tracking AI-assisted development tasks, 
              implementation strategies, and problem resolutions.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#getting-started"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105"
              >
                Get Started
              </a>
              <a 
                href="#example" 
                className="px-8 py-3 border border-gray-700 rounded-full font-semibold hover:border-gray-500 transition-all"
              >
                View Example
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What are AI Plans? */}
      <section id="what" className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              What are <span className="text-cyan-400">AI Plans?</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                AI Plans are structured markdown documents that capture the complete lifecycle of AI-assisted development tasks. 
                They live in your repository's <code className="px-2 py-1 bg-gray-900 rounded text-cyan-400">/plans/</code> directory, 
                creating a searchable history of AI interactions.
              </p>
              <div className="grid gap-4 mt-8">
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-cyan-400 text-2xl">📝</div>
                  <div>
                    <div className="font-semibold mb-1">Original Request</div>
                    <div className="text-gray-400 text-sm">Capture the exact developer request or problem statement</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-purple-400 text-2xl">🎯</div>
                  <div>
                    <div className="font-semibold mb-1">Implementation Plan</div>
                    <div className="text-gray-400 text-sm">Document the AI's proposed approach and architecture</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-blue-400 text-2xl">✅</div>
                  <div>
                    <div className="font-semibold mb-1">Task Tracking</div>
                    <div className="text-gray-400 text-sm">Track TODOs with completion status throughout execution</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-green-400 text-2xl">🔧</div>
                  <div>
                    <div className="font-semibold mb-1">Issue Resolution</div>
                    <div className="text-gray-400 text-sm">Document problems encountered and their solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-24 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            AI Plans <span className="text-gray-500">vs</span> <span className="text-purple-400">ADRs</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 font-semibold text-gray-400">Aspect</th>
                  <th className="text-left py-4 px-6 font-semibold text-cyan-400">AI Plans</th>
                  <th className="text-left py-4 px-6 font-semibold text-purple-400">ADRs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-6 font-medium">Focus</td>
                  <td className="py-4 px-6 text-gray-300">AI tool interactions & execution</td>
                  <td className="py-4 px-6 text-gray-300">Architectural decisions</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-6 font-medium">Frequency</td>
                  <td className="py-4 px-6 text-gray-300">Multiple per day</td>
                  <td className="py-4 px-6 text-gray-300">Occasional</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-6 font-medium">Content</td>
                  <td className="py-4 px-6 text-gray-300">Tasks, TODOs, steps</td>
                  <td className="py-4 px-6 text-gray-300">Context, consequences</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-6 font-medium">Purpose</td>
                  <td className="py-4 px-6 text-gray-300">Track AI workflow</td>
                  <td className="py-4 px-6 text-gray-300">Document architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* File Format */}
      <section id="format" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            File <span className="text-cyan-400">Format</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Naming Convention</h3>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <code className="text-green-400 text-sm md:text-base">
                  /plans/YYYY-MM-DD-HH-mm-description.md
                </code>
                <p className="mt-4 text-sm text-gray-400">
                  Hour and minute are optional but useful for multiple plans per day
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Required Sections</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono">1.</span>
                  <span className="font-semibold">Summary</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono">2.</span>
                  <span className="font-semibold">Original Request</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono">3.</span>
                  <span className="font-semibold">AI's Plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono">4.</span>
                  <span className="font-semibold">AI's TODOs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono">5.</span>
                  <span className="font-semibold">Major Issues</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section id="example" className="px-6 py-24 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Example <span className="text-purple-400">AI Plan</span>
          </h2>
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-400">2025-01-19-14-30-auth-system.md</span>
              </div>
            </div>
            <pre className="p-6 overflow-x-auto text-sm">
              <code className="text-gray-300">{`# Add User Authentication System

## Summary
Implement JWT-based authentication with login, registration, and protected routes.

## Original Request
"Add user authentication to the app with login and signup pages. Use JWT tokens 
and protect the dashboard routes."

## AI's Plan

### Architecture
1. **Backend**: Express middleware for JWT validation
2. **Frontend**: React Context for auth state management  
3. **Storage**: Secure httpOnly cookies for tokens
4. **Routes**: Protected route wrapper component

### Implementation Steps
1. Set up auth endpoints (/login, /register, /refresh)
2. Create auth context and provider
3. Build login and registration forms
4. Implement protected route component
5. Add logout functionality

## AI's TODOs
1. ✅ Create auth controller with JWT logic
2. ✅ Set up auth routes in Express
3. ✅ Create AuthContext in React
4. ✅ Build login form component
5. ✅ Build registration form component
6. ✅ Implement ProtectedRoute wrapper
7. ✅ Add refresh token mechanism
8. ⏳ Write tests for auth flow
9. ⏳ Add password reset functionality

## Major Issues Encountered

### CORS Cookie Issue
**Problem**: Cookies weren't being sent cross-origin in development
**Solution**: Added credentials: 'include' and configured CORS

### Token Refresh Loop  
**Problem**: Infinite loop when refreshing expired tokens
**Solution**: Added retry limit and proper error boundaries

---
*Generated: 2025-01-19 14:30*  
*Tool: Claude Code (claude.ai/code)*`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Why Use <span className="text-cyan-400">AI Plans?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg border border-gray-800">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="font-bold mb-2">Searchable History</h3>
              <p className="text-sm text-gray-400">Find how similar problems were solved</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg border border-gray-800">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">Context Preservation</h3>
              <p className="text-sm text-gray-400">Keep full context of decisions</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg border border-gray-800">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold mb-2">Team Knowledge</h3>
              <p className="text-sm text-gray-400">Share AI patterns across team</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg border border-gray-800">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-bold mb-2">Process Improvement</h3>
              <p className="text-sm text-gray-400">Refine AI usage over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="px-6 py-24 bg-gradient-to-b from-transparent to-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Get <span className="text-cyan-400">Started</span>
          </h2>
          
          <div className="space-y-8 max-w-3xl">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create the Plans Directory</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <code className="text-green-400">mkdir plans</code>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Configure Your AI Tool</h3>
                <p className="text-gray-400 mb-3">
                  Instruct your AI assistant to create plan documents:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <p className="text-sm text-gray-300 italic">
                    "When working on features or fixes, create an AI Plan in /plans/ documenting 
                    the request, your approach, TODOs, and any issues encountered."
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Commit Plans with Code</h3>
                <p className="text-gray-400">
                  Include AI Plans in the same commits as your code changes, creating a linked history 
                  of decisions and implementations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Review and Learn</h3>
                <p className="text-gray-400">
                  Use AI Plans during code reviews and retrospectives to improve your team's 
                  AI usage patterns and share successful strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            AI Plans - A pattern for documenting AI-assisted development
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Created with AI assistance and documented in{' '}
            <a href="/plans/2025-01-19-ai-plans-website.md" className="text-cyan-400 hover:underline">
              its own AI Plan
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App