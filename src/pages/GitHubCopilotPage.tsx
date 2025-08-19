import { useState } from 'react'

function GitHubCopilotPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)
  
  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSection(section)
    setTimeout(() => setCopiedSection(null), 2000)
  }
  
  const copilotInstructions = `# AI Plans Documentation

This project uses AI Plans to document AI-assisted development decisions.

## When to Create AI Plans
- Before implementing new features
- When refactoring existing code
- When solving complex problems
- After debugging sessions

## File Format
Create markdown files in /plans/ with this structure:
- Filename: YYYY-MM-DD-HH-mm-description.md
- Sections: Summary, Original Request, AI's Plan, AI's TODOs, Major Issues

## TODO Tracking
Mark progress as you work:
- ✅ = Completed
- ⏳ = In Progress
- ❌ = Blocked

## Benefits
- Searchable history of implementations
- Context for future developers
- Learning from past solutions
- Team knowledge sharing

## Example Usage
When asked to implement a feature, first create a plan documenting:
1. What was requested
2. Your implementation approach
3. Step-by-step tasks
4. Any issues encountered

This creates valuable documentation for the team.`

  const vscodeSettings = `{
  "github.copilot.enable": {
    "*": true,
    "plaintext": true,
    "markdown": true
  },
  "github.copilot.workspace.promptForInstructions": true,
  "github.copilot.projectContext": {
    "instructions": [
      "Create AI Plans in /plans/ for all feature implementations",
      "Use format: YYYY-MM-DD-HH-mm-description.md",
      "Track TODOs with ✅ (done) and ⏳ (pending)",
      "Document issues encountered and solutions"
    ]
  }
}`

  const chatPrompts = `# Copilot Chat Prompts for AI Plans

## Create a New Plan
"Create an AI Plan in /plans/ for [feature description]"

## Update Existing Plan
"Update the TODO status in /plans/[filename] based on completed work"

## Review Plans
"What AI Plans exist for [topic/feature]?"

## Document Issues
"Add the current issue and solution to the AI Plan"`

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 animate-gradient bg-[length:200%_200%]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              AI Plans for{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                GitHub Copilot
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
              Configure GitHub Copilot in VS Code to automatically document your 
              AI-assisted development with structured markdown plans.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Quick <span className="text-green-400">Setup</span>
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center font-bold text-xl">
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Add workspace instructions</h3>
                <p className="text-gray-400 mb-3">
                  Create <code className="text-green-400">.github/copilot-instructions.md</code> in your project:
                </p>
                <div className="bg-remix-gray-900 rounded-lg border border-remix-gray-800 relative">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-remix-gray-800">
                    <span className="text-sm text-gray-500 font-mono">copilot-instructions.md</span>
                    <button
                      onClick={() => copyToClipboard(copilotInstructions, 'copilot-instructions')}
                      className="text-xs px-3 py-1 bg-remix-gray-800 hover:bg-remix-gray-700 rounded transition-colors"
                    >
                      {copiedSection === 'copilot-instructions' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-gray-300 font-mono text-sm">{copilotInstructions}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Configure VS Code settings</h3>
                <p className="text-gray-400 mb-3">
                  Add to your workspace <code className="text-green-400">.vscode/settings.json</code>:
                </p>
                <div className="bg-remix-gray-900 rounded-lg border border-remix-gray-800 relative">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-remix-gray-800">
                    <span className="text-sm text-gray-500 font-mono">settings.json</span>
                    <button
                      onClick={() => copyToClipboard(vscodeSettings, 'vscode-settings')}
                      className="text-xs px-3 py-1 bg-remix-gray-800 hover:bg-remix-gray-700 rounded transition-colors"
                    >
                      {copiedSection === 'vscode-settings' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-gray-300 font-mono text-sm">{vscodeSettings}</code>
                  </pre>
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
            How to <span className="text-emerald-400">Use</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-remix-gray-900/50 rounded-xl p-6 border border-remix-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-green-400">With Copilot Chat</h3>
              <p className="text-gray-400 mb-4">
                Use Copilot Chat to create and manage plans:
              </p>
              <div className="bg-remix-dark rounded-lg p-4 border border-remix-gray-800">
                <code className="text-gray-300 font-mono text-sm">
                  @workspace Create an AI Plan for implementing user notifications
                </code>
              </div>
              <p className="text-gray-500 mt-3 text-sm">
                Copilot will create a structured plan in /plans/
              </p>
            </div>

            <div className="bg-remix-gray-900/50 rounded-xl p-6 border border-remix-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">With Inline Suggestions</h3>
              <p className="text-gray-400 mb-4">
                Start typing in a new plan file:
              </p>
              <div className="bg-remix-dark rounded-lg p-4 border border-remix-gray-800">
                <code className="text-gray-300 font-mono text-sm">
                  # Add Payment Processing<br />
                  ## Summary<br />
                  [Copilot will suggest the rest...]
                </code>
              </div>
              <p className="text-gray-500 mt-3 text-sm">
                Copilot autocompletes based on your patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Prompts */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Copilot Chat <span className="text-green-400">Prompts</span>
          </h2>
          
          <div className="bg-remix-gray-900 rounded-lg border border-remix-gray-800 relative">
            <div className="flex items-center justify-between px-4 py-3 border-b border-remix-gray-800">
              <span className="text-sm text-gray-500 font-mono">Useful Prompts</span>
              <button
                onClick={() => copyToClipboard(chatPrompts, 'chat-prompts')}
                className="text-xs px-3 py-1 bg-remix-gray-800 hover:bg-remix-gray-700 rounded transition-colors"
              >
                {copiedSection === 'chat-prompts' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-gray-300 font-mono text-sm">{chatPrompts}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Copilot Features */}
      <section className="px-6 py-16 bg-remix-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Why AI Plans Work Great with <span className="text-green-400">GitHub Copilot</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-green-500/50 transition-all">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">Chat Integration</h3>
              <p className="text-gray-400">
                Copilot Chat can reference and update plans using @workspace context
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2">Pattern Learning</h3>
              <p className="text-gray-400">
                Copilot learns from your existing plans to suggest consistent formats
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-teal-500/50 transition-all">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">Inline Suggestions</h3>
              <p className="text-gray-400">
                Get contextual suggestions while writing plans based on project history
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Plan */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Example <span className="text-emerald-400">Copilot Plan</span>
          </h2>
          
          <div className="bg-remix-gray-950 rounded-xl border border-remix-gray-800 overflow-hidden">
            <div className="bg-remix-gray-900 px-6 py-4 border-b border-remix-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-500 font-mono">2025-01-20-09-15-notification-system.md</span>
              </div>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-gray-300 font-mono text-sm leading-relaxed">{`# Implement Notification System

## Summary
Add real-time notifications with email, in-app, and push notification support.

## Original Request
"Add a notification system that supports multiple channels and user preferences"

## AI's Plan

### Architecture Design
Suggested by Copilot Chat based on workspace analysis:
1. Notification service with strategy pattern for channels
2. Queue-based processing for reliability
3. User preference storage in database
4. WebSocket for real-time updates

### Implementation Strategy
1. Create notification models and database schema
2. Implement channel interfaces (email, push, in-app)
3. Build notification service with queue
4. Add user preference management
5. Create WebSocket connection for real-time
6. Build UI components for notifications

## AI's TODOs
1. ✅ Design database schema for notifications
2. ✅ Create notification model and types
3. ✅ Implement email notification channel
4. ✅ Implement in-app notification channel
5. ⏳ Add push notification support (FCM)
6. ⏳ Create notification preferences UI
7. ⏳ Implement WebSocket for real-time
8. ⏳ Add notification history view

## Major Issues Encountered

### Email Delivery Rate
**Problem**: Emails marked as spam by providers
**Solution**: Implemented SPF, DKIM, and proper headers

### WebSocket Scaling
**Problem**: WebSocket connections not scaling horizontally
**Solution**: Added Redis adapter for Socket.io

---
*Generated: 2025-01-20 09:15*
*Tool: GitHub Copilot Chat*
*VS Code Version: 1.85.0*`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-16 bg-remix-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Pro <span className="text-green-400">Tips</span>
          </h2>
          
          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Use @workspace Context</h3>
                <p className="text-gray-400">
                  In Copilot Chat, use <code className="text-green-400">@workspace</code> to 
                  reference existing plans and maintain consistency
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Create Snippets</h3>
                <p className="text-gray-400">
                  Set up VS Code snippets for common plan sections to speed up 
                  documentation with Copilot's help
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Reference in PRs</h3>
                <p className="text-gray-400">
                  Link to relevant AI Plans in pull requests for context. 
                  Copilot can help generate PR descriptions from plans
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Voice with Copilot</h3>
                <p className="text-gray-400">
                  Use VS Code's voice features with Copilot to dictate plans 
                  while thinking through implementations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GitHubCopilotPage