import { useState } from 'react'

function CursorPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)
  
  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSection(section)
    setTimeout(() => setCopiedSection(null), 2000)
  }
  
  const cursorRules = `# AI Plans Documentation

When working on features or fixes in this project, create an AI Plan document in the /plans/ directory.

## File Format
- Location: /plans/
- Naming: YYYY-MM-DD-HH-mm-description.md
- Include sections: Summary, Original Request, AI's Plan, AI's TODOs, Major Issues Encountered

## TODO Tracking
- Use ✅ for completed tasks
- Use ⏳ for pending tasks
- Update status as you progress through implementation

## Purpose
AI Plans create a searchable history of:
- Implementation decisions
- Problem-solving approaches
- Issues encountered and their resolutions
- Context for future development

## Example
When asked to "Add user authentication", create:
/plans/2025-01-20-14-30-add-user-auth.md

Document your approach, track progress, and note any challenges faced during implementation.`

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 animate-gradient bg-[length:200%_200%]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              AI Plans for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cursor
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
              Configure Cursor to automatically document your AI-assisted development 
              with structured markdown plans using cursor rules.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Quick <span className="text-purple-400">Setup</span>
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Create the plans directory</h3>
                <div className="bg-remix-gray-900 rounded-lg p-4 border border-remix-gray-800">
                  <code className="text-green-400 font-mono">mkdir plans</code>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Create .cursorrules file</h3>
                <p className="text-gray-400 mb-3">
                  Create a <code className="text-purple-400">.cursorrules</code> file in your project root:
                </p>
                <div className="bg-remix-gray-900 rounded-lg border border-remix-gray-800 relative">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-remix-gray-800">
                    <span className="text-sm text-gray-500 font-mono">.cursorrules</span>
                    <button
                      onClick={() => copyToClipboard(cursorRules, 'cursor-rules')}
                      className="text-xs px-3 py-1 bg-remix-gray-800 hover:bg-remix-gray-700 rounded transition-colors"
                    >
                      {copiedSection === 'cursor-rules' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-gray-300 font-mono text-sm">{cursorRules}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Configure Cursor settings</h3>
                <p className="text-gray-400 mb-3">
                  In Cursor settings, ensure "Include .cursorrules" is enabled:
                </p>
                <div className="bg-remix-gray-900 rounded-lg p-4 border border-remix-gray-800">
                  <p className="text-gray-300">
                    <span className="text-purple-400">Settings</span> → 
                    <span className="text-purple-400"> Features</span> → 
                    <span className="text-purple-400"> Cursor Rules</span> → 
                    <span className="text-green-400"> ✓ Enabled</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="px-6 py-16 bg-remix-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            How to <span className="text-pink-400">Use</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-remix-gray-900/50 rounded-xl p-6 border border-remix-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">With Composer</h3>
              <p className="text-gray-400 mb-4">
                When using Cursor's Composer for multi-file edits:
              </p>
              <div className="bg-remix-dark rounded-lg p-4 border border-remix-gray-800">
                <code className="text-gray-300 font-mono text-sm">
                  "Refactor the authentication system and create an AI Plan documenting the changes"
                </code>
              </div>
              <p className="text-gray-500 mt-3 text-sm">
                Composer will create a comprehensive plan before making changes
              </p>
            </div>

            <div className="bg-remix-gray-900/50 rounded-xl p-6 border border-remix-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">With Chat</h3>
              <p className="text-gray-400 mb-4">
                Ask Cursor to create a plan before implementation:
              </p>
              <div className="bg-remix-dark rounded-lg p-4 border border-remix-gray-800">
                <code className="text-gray-300 font-mono text-sm">
                  "Create an AI Plan for adding dark mode support, then implement it"
                </code>
              </div>
              <p className="text-gray-500 mt-3 text-sm">
                The plan will be created first, then implementation follows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursor Features */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Why AI Plans Work Great with <span className="text-purple-400">Cursor</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-purple-500/50 transition-all">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Composer Integration</h3>
              <p className="text-gray-400">
                Multi-file edits in Composer benefit from structured planning documentation
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-pink-500/50 transition-all">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Context Management</h3>
              <p className="text-gray-400">
                AI Plans help maintain context across different chat sessions and composers
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-purple-500/50 transition-all">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">Codebase Understanding</h3>
              <p className="text-gray-400">
                Plans provide searchable documentation of AI-driven architectural decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Plan */}
      <section className="px-6 py-16 bg-remix-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Example <span className="text-pink-400">Cursor Plan</span>
          </h2>
          
          <div className="bg-remix-gray-950 rounded-xl border border-remix-gray-800 overflow-hidden">
            <div className="bg-remix-gray-900 px-6 py-4 border-b border-remix-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-500 font-mono">2025-01-20-15-45-dark-mode.md</span>
              </div>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-gray-300 font-mono text-sm leading-relaxed">{`# Implement Dark Mode Support

## Summary
Add comprehensive dark mode support with system preference detection and manual toggle.

## Original Request
"Add dark mode to the application with a toggle in the header and save user preference"

## AI's Plan

### Architecture Approach
Using Composer for multi-file changes:
1. Context API for theme state management
2. CSS variables for theme colors
3. LocalStorage for persistence
4. System preference detection

### Files to Modify
- src/contexts/ThemeContext.tsx (new)
- src/components/Header.tsx
- src/styles/themes.css (new)
- src/App.tsx

## AI's TODOs
1. ✅ Create ThemeContext with provider
2. ✅ Add CSS variables for light/dark themes
3. ✅ Implement theme toggle component
4. ✅ Add system preference detection
5. ✅ Store preference in localStorage
6. ✅ Update all components to use theme variables
7. ⏳ Add smooth transitions between themes
8. ⏳ Test across different browsers

## Major Issues Encountered

### CSS Variable Scoping
**Problem**: Theme variables not applying to portal-rendered components
**Solution**: Applied theme class to document.documentElement instead of body

### Flash of Unstyled Content
**Problem**: Brief flash of wrong theme on page load
**Solution**: Added blocking script in index.html to set theme before render

---
*Generated: 2025-01-20 15:45*
*Tool: Cursor Composer*
*Context: Multi-file theme implementation*`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Pro <span className="text-purple-400">Tips</span>
          </h2>
          
          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Use with @codebase</h3>
                <p className="text-gray-400">
                  Reference plans in chat with <code className="text-purple-400">@codebase</code> to 
                  help Cursor understand previous implementation decisions
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Composer Best Practice</h3>
                <p className="text-gray-400">
                  Start Composer sessions with "Review /plans/ for context" to leverage 
                  historical decisions
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Index with Cursor</h3>
                <p className="text-gray-400">
                  Ensure /plans/ is indexed by Cursor for better context awareness 
                  in chat and composer
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Template Prompts</h3>
                <p className="text-gray-400">
                  Create prompt templates that include "Document in /plans/" for 
                  consistent documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CursorPage