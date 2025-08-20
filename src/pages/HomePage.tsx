function HomePage() {
  return (
    <>
      {/* Hero Section with Animated Gradient */}
      <section className="relative px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-remix-blue via-purple-600 to-pink-600 animate-gradient bg-[length:200%_200%]"></div>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-remix-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
              <span className="text-white">AI</span>{' '}
              <span className="text-remix-yellow">Plans</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 leading-relaxed max-w-4xl">
              Document your AI's decision-making process with{' '}
              <span className="text-remix-blue font-semibold">version-controlled</span>{' '}
              markdown files.
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl">
              Like Architecture Decision Records (ADRs), but specifically designed for tracking 
              AI-assisted development tasks, implementation strategies, and problem resolutions.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="#getting-started"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-remix-blue to-purple-600 rounded-lg font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-remix-blue/50 text-center"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-remix-blue to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </a>
              <a 
                href="#example" 
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-remix-gray-700 rounded-lg font-bold text-base sm:text-lg hover:border-remix-blue hover:text-remix-blue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-remix-blue/20 text-center"
              >
                View Example
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What are AI Plans? */}
      <section id="what" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-remix-blue/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 tracking-tight">
              What are <span className="text-remix-yellow">AI Plans?</span>
            </h2>
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                AI Plans are structured markdown documents that capture the complete lifecycle of AI-assisted development tasks. 
                They live in your repository's <code className="px-3 py-1 bg-remix-gray-900 rounded-md text-remix-blue font-mono text-base">/plans/</code> directory, 
                creating a searchable history of AI interactions.
              </p>
              <div className="grid gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-br from-remix-gray-900/50 to-remix-gray-900/30 rounded-xl border border-remix-gray-800 hover:border-remix-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-remix-blue/10">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">📝</div>
                  <div>
                    <div className="font-bold text-lg sm:text-xl mb-2 text-white">Original Request</div>
                    <div className="text-sm sm:text-base text-gray-400">Capture the exact developer request or problem statement</div>
                  </div>
                </div>
                <div className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-br from-remix-gray-900/50 to-remix-gray-900/30 rounded-xl border border-remix-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">🎯</div>
                  <div>
                    <div className="font-bold text-lg sm:text-xl mb-2 text-white">Implementation Plan</div>
                    <div className="text-sm sm:text-base text-gray-400">Document the AI's proposed approach and architecture</div>
                  </div>
                </div>
                <div className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-br from-remix-gray-900/50 to-remix-gray-900/30 rounded-xl border border-remix-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">✅</div>
                  <div>
                    <div className="font-bold text-lg sm:text-xl mb-2 text-white">Task Tracking</div>
                    <div className="text-sm sm:text-base text-gray-400">Track TODOs with completion status throughout execution</div>
                  </div>
                </div>
                <div className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-br from-remix-gray-900/50 to-remix-gray-900/30 rounded-xl border border-remix-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">🔧</div>
                  <div>
                    <div className="font-bold text-lg sm:text-xl mb-2 text-white">Issue Resolution</div>
                    <div className="text-sm sm:text-base text-gray-400">Document problems encountered and their solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-remix-blue/5 via-transparent to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 text-center tracking-tight">
            <span className="text-remix-blue">AI Plans</span>{' '}
            <span className="text-gray-500">vs</span>{' '}
            <span className="text-purple-400">ADRs</span>
          </h2>
          {/* Mobile: Cards, Desktop: Table */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-remix-gray-800 bg-remix-gray-900/50 backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-remix-gray-800 bg-remix-gray-900/80">
                  <th className="text-left py-6 px-8 font-bold text-lg text-gray-400">Aspect</th>
                  <th className="text-left py-6 px-8 font-bold text-lg text-remix-blue">AI Plans</th>
                  <th className="text-left py-6 px-8 font-bold text-lg text-purple-400">ADRs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-remix-gray-800/50 hover:bg-remix-gray-800/20 transition-colors">
                  <td className="py-5 px-8 font-semibold text-gray-300">Focus</td>
                  <td className="py-5 px-8 text-gray-400">AI tool interactions & execution</td>
                  <td className="py-5 px-8 text-gray-400">Architectural decisions</td>
                </tr>
                <tr className="border-b border-remix-gray-800/50 hover:bg-remix-gray-800/20 transition-colors">
                  <td className="py-5 px-8 font-semibold text-gray-300">Frequency</td>
                  <td className="py-5 px-8 text-gray-400">Multiple per day</td>
                  <td className="py-5 px-8 text-gray-400">Occasional</td>
                </tr>
                <tr className="border-b border-remix-gray-800/50 hover:bg-remix-gray-800/20 transition-colors">
                  <td className="py-5 px-8 font-semibold text-gray-300">Content</td>
                  <td className="py-5 px-8 text-gray-400">Tasks, TODOs, steps</td>
                  <td className="py-5 px-8 text-gray-400">Context, consequences</td>
                </tr>
                <tr className="hover:bg-remix-gray-800/20 transition-colors">
                  <td className="py-5 px-8 font-semibold text-gray-300">Purpose</td>
                  <td className="py-5 px-8 text-gray-400">Track AI workflow</td>
                  <td className="py-5 px-8 text-gray-400">Document architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards View */}
          <div className="sm:hidden space-y-4">
            <div className="bg-remix-gray-900/50 rounded-xl p-4 border border-remix-gray-800">
              <h3 className="font-bold text-lg mb-3 text-gray-300">Focus</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-remix-blue font-semibold">AI Plans:</span>
                  <span className="text-gray-400 ml-2">AI tool interactions</span>
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">ADRs:</span>
                  <span className="text-gray-400 ml-2">Architectural decisions</span>
                </div>
              </div>
            </div>
            <div className="bg-remix-gray-900/50 rounded-xl p-4 border border-remix-gray-800">
              <h3 className="font-bold text-lg mb-3 text-gray-300">Frequency</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-remix-blue font-semibold">AI Plans:</span>
                  <span className="text-gray-400 ml-2">Multiple per day</span>
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">ADRs:</span>
                  <span className="text-gray-400 ml-2">Occasional</span>
                </div>
              </div>
            </div>
            <div className="bg-remix-gray-900/50 rounded-xl p-4 border border-remix-gray-800">
              <h3 className="font-bold text-lg mb-3 text-gray-300">Content</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-remix-blue font-semibold">AI Plans:</span>
                  <span className="text-gray-400 ml-2">Tasks, TODOs, steps</span>
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">ADRs:</span>
                  <span className="text-gray-400 ml-2">Context, consequences</span>
                </div>
              </div>
            </div>
            <div className="bg-remix-gray-900/50 rounded-xl p-4 border border-remix-gray-800">
              <h3 className="font-bold text-lg mb-3 text-gray-300">Purpose</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-remix-blue font-semibold">AI Plans:</span>
                  <span className="text-gray-400 ml-2">Track AI workflow</span>
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">ADRs:</span>
                  <span className="text-gray-400 ml-2">Document architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Format */}
      <section id="format" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 tracking-tight">
            File <span className="text-remix-yellow">Format</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">Naming Convention</h3>
              <div className="bg-remix-gray-900/80 rounded-xl p-4 sm:p-6 md:p-8 border border-remix-gray-800 group-hover:border-remix-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-remix-blue/10">
                <code className="text-green-400 text-sm sm:text-base md:text-lg lg:text-xl font-mono break-all">
                  /plans/YYYY-MM-DD-HH-mm-description.md
                </code>
                <p className="mt-6 text-gray-400">
                  Hour and minute are optional but useful for multiple plans per day
                </p>
              </div>
            </div>

            <div className="group">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">Required Sections</h3>
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Summary' },
                  { num: '2', title: 'Original Request' },
                  { num: '3', title: "AI's Plan" },
                  { num: '4', title: "AI's TODOs" },
                  { num: '5', title: 'Major Issues' }
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-4 p-4 bg-remix-gray-900/50 rounded-lg border border-remix-gray-800 hover:border-remix-blue/50 hover:bg-remix-gray-900/80 transition-all duration-300 group">
                    <span className="text-remix-blue font-mono text-xl font-bold group-hover:text-remix-yellow transition-colors">{item.num}.</span>
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section id="example" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-remix-blue/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 tracking-tight">
            Example <span className="text-purple-400">AI Plan</span>
          </h2>
          <div className="bg-remix-gray-950 rounded-2xl border border-remix-gray-800 overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="bg-remix-gray-900 px-6 py-4 border-b border-remix-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-500 font-mono">2025-01-19-14-30-auth-system.md</span>
              </div>
            </div>
            <pre className="p-4 sm:p-6 md:p-8 overflow-x-auto">
              <code className="text-gray-300 font-mono text-xs sm:text-sm md:text-base leading-relaxed">{`# Add User Authentication System

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
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 tracking-tight">
            Why Use <span className="text-remix-blue">AI Plans?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="group p-6 sm:p-8 bg-gradient-to-br from-remix-blue/10 via-remix-gray-900/50 to-transparent rounded-2xl border border-remix-gray-800 hover:border-remix-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-remix-blue/20">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">🔍</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Searchable History</h3>
              <p className="text-sm sm:text-base text-gray-400">Find how similar problems were solved</p>
            </div>
            <div className="group p-6 sm:p-8 bg-gradient-to-br from-purple-600/10 via-remix-gray-900/50 to-transparent rounded-2xl border border-remix-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Context Preservation</h3>
              <p className="text-sm sm:text-base text-gray-400">Keep full context of decisions</p>
            </div>
            <div className="group p-6 sm:p-8 bg-gradient-to-br from-blue-600/10 via-remix-gray-900/50 to-transparent rounded-2xl border border-remix-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">👥</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Team Knowledge</h3>
              <p className="text-sm sm:text-base text-gray-400">Share AI patterns across team</p>
            </div>
            <div className="group p-6 sm:p-8 bg-gradient-to-br from-green-600/10 via-remix-gray-900/50 to-transparent rounded-2xl border border-remix-gray-800 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">📈</div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Process Improvement</h3>
              <p className="text-sm sm:text-base text-gray-400">Refine AI usage over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-remix-blue/10 to-remix-blue/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 tracking-tight">
            Get <span className="text-remix-yellow">Started</span>
          </h2>
          
          <div className="space-y-10 max-w-4xl">
            {[
              {
                num: '1',
                title: 'Create the Plans Directory',
                content: <code className="text-green-400 font-mono text-lg">mkdir plans</code>,
                description: null
              },
              {
                num: '2',
                title: 'Configure Your AI Tool',
                content: (
                  <p className="text-gray-300 italic text-lg">
                    "When working on features or fixes, create an AI Plan in /plans/ documenting 
                    the request, your approach, TODOs, and any issues encountered."
                  </p>
                ),
                description: 'Instruct your AI assistant to create plan documents:'
              },
              {
                num: '3',
                title: 'Commit Plans with Code',
                content: null,
                description: 'Include AI Plans in the same commits as your code changes, creating a linked history of decisions and implementations.'
              },
              {
                num: '4',
                title: 'Review and Learn',
                content: null,
                description: "Use AI Plans during code reviews and retrospectives to improve your team's AI usage patterns and share successful strategies."
              }
            ].map((item) => (
              <div key={item.num} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-remix-blue to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg shadow-remix-blue/30">
                    {item.num}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-400 mb-3 sm:mb-4 text-base sm:text-lg">{item.description}</p>
                  )}
                  {item.content && (
                    <div className="bg-remix-gray-900/80 rounded-xl p-4 sm:p-6 border border-remix-gray-800 hover:border-remix-blue/50 transition-all duration-300">
                      {item.content}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage