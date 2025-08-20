import type { FC } from 'react';
import { useState } from 'react';

const ClaudeCodePage: FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string): void => {
    void navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  const claudeMdSnippet = `## AI Plans Convention

When making changes to this project, create an AI Plan in \`/plans/\` following the naming convention:
\`\`\`
/plans/YYYY-MM-DD-description.md
\`\`\`

Include: Summary, Original Request, AI's Plan, AI's TODOs, and Major Issues Encountered.`;

  const planCommand = `---
description: Create an AI Plan document for tracking implementation decisions
---

Create an AI Plan document in /plans/ with the following structure:

1. Use naming format: YYYY-MM-DD-$ARGUMENTS.md
2. Include sections: Summary, Original Request, AI's Plan, AI's TODOs, Major Issues
3. Track TODO completion with ✅ (done) and ⏳ (pending)
4. Document any issues encountered and their solutions

The plan should capture:
- The original developer request
- Your implementation approach
- Step-by-step TODOs with status
- Any problems and resolutions

This creates a searchable history of AI-assisted development decisions.`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-32 sm:pt-40 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-remix-blue via-cyan-600 to-blue-600 animate-gradient bg-[length:200%_200%]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none">
              AI Plans for{' '}
              <span className="bg-gradient-to-r from-remix-blue to-cyan-400 bg-clip-text text-transparent">
                Claude Code
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Configure Claude Code to automatically document your AI-assisted development with
              structured markdown plans.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            Quick <span className="text-remix-blue">Setup</span>
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-remix-blue to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Create the plans directory
                </h3>
                <div className="bg-remix-gray-900 rounded-lg p-3 sm:p-4 border border-remix-gray-800">
                  <code className="text-green-400 font-mono">mkdir plans</code>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-remix-blue to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Add to your CLAUDE.md file
                </h3>
                <p className="text-gray-400 mb-3">
                  Add the following snippet to your project's CLAUDE.md file (or create one):
                </p>
                <div className="bg-remix-gray-900 rounded-lg border border-remix-gray-800 relative">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-remix-gray-800">
                    <span className="text-sm text-gray-500 font-mono">CLAUDE.md</span>
                    <button
                      onClick={() => {
                        copyToClipboard(claudeMdSnippet, 'claude-md');
                      }}
                      className="text-xs px-3 py-1 bg-remix-gray-800 hover:bg-remix-gray-700 rounded transition-colors"
                    >
                      {copiedSection === 'claude-md' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-3 sm:p-4 overflow-x-auto max-w-full">
                    <code className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words">
                      {claudeMdSnippet}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-remix-blue to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Create the /plan command
                </h3>
                <p className="text-gray-400 mb-3">
                  Create a custom slash command for quick plan creation:
                </p>
                <div className="bg-remix-gray-900 rounded-lg p-4 border border-remix-gray-800 mb-3">
                  <code className="text-green-400 font-mono text-sm">
                    mkdir -p .claude/commands
                    <br />
                    touch .claude/commands/plan.md
                  </code>
                </div>
                <p className="text-gray-400 mb-3">
                  Then add this content to{' '}
                  <code className="text-remix-blue">.claude/commands/plan.md</code>:
                </p>
                <div className="bg-remix-gray-900 rounded-lg border border-remix-gray-800 relative">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-remix-gray-800">
                    <span className="text-sm text-gray-500 font-mono">plan.md</span>
                    <button
                      onClick={() => {
                        copyToClipboard(planCommand, 'plan-command');
                      }}
                      className="text-xs px-3 py-1 bg-remix-gray-800 hover:bg-remix-gray-700 rounded transition-colors"
                    >
                      {copiedSection === 'plan-command' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-3 sm:p-4 overflow-x-auto max-w-full">
                    <code className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words">
                      {planCommand}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-remix-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            How to <span className="text-cyan-400">Use</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-remix-gray-900/50 rounded-xl p-4 sm:p-6 border border-remix-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-remix-blue">
                Automatic Documentation
              </h3>
              <p className="text-gray-400 mb-4">
                With the CLAUDE.md configuration, Claude Code will automatically create AI Plans
                when working on features:
              </p>
              <div className="bg-remix-dark rounded-lg p-4 border border-remix-gray-800">
                <code className="text-gray-300 font-mono text-sm">
                  "Please add user authentication to my app"
                </code>
              </div>
              <p className="text-gray-500 mt-3 text-sm">
                Claude will create a plan in /plans/ before implementing
              </p>
            </div>

            <div className="bg-remix-gray-900/50 rounded-xl p-4 sm:p-6 border border-remix-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-400">
                Using the /plan Command
              </h3>
              <p className="text-gray-400 mb-4">
                Use the slash command to explicitly create a plan:
              </p>
              <div className="bg-remix-dark rounded-lg p-4 border border-remix-gray-800">
                <code className="text-gray-300 font-mono text-sm">/plan refactor-auth-system</code>
              </div>
              <p className="text-gray-500 mt-3 text-sm">
                Creates a plan with your specified description
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Claude Code Features */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            Why AI Plans Work Great with <span className="text-remix-blue">Claude Code</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-remix-blue/10 to-transparent rounded-xl p-4 sm:p-6 border border-remix-gray-800 hover:border-remix-blue/50 transition-all">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📋</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">TodoWrite Integration</h3>
              <p className="text-gray-400">
                Claude Code's TodoWrite tool naturally aligns with AI Plans' TODO tracking format
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/10 to-transparent rounded-xl p-4 sm:p-6 border border-remix-gray-800 hover:border-cyan-500/50 transition-all">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔄</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Incremental Commits</h3>
              <p className="text-gray-400">
                Claude Code can commit plans alongside code changes for perfect history
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-transparent rounded-xl p-4 sm:p-6 border border-remix-gray-800 hover:border-blue-500/50 transition-all">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Context Preservation</h3>
              <p className="text-gray-400">
                Plans help Claude Code maintain context across multiple sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Plan */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-remix-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            Example <span className="text-cyan-400">Claude Code Plan</span>
          </h2>

          <div className="bg-remix-gray-950 rounded-xl border border-remix-gray-800 overflow-hidden">
            <div className="bg-remix-gray-900 px-6 py-4 border-b border-remix-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-500 font-mono">2025-01-20-api-refactor.md</span>
              </div>
            </div>
            <pre className="p-4 sm:p-6 overflow-x-auto max-w-full">
              <code className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">{`# Refactor API to Use TypeScript

## Summary
Convert JavaScript API endpoints to TypeScript with proper typing and validation.

## Original Request
"Convert our Express API to TypeScript and add proper type checking"

## AI's Plan

### Approach
1. Set up TypeScript configuration for Node.js
2. Convert endpoints incrementally, maintaining functionality
3. Add request/response type definitions
4. Implement validation middleware

### Key Decisions
- Use Zod for runtime validation matching TypeScript types
- Keep JavaScript files during migration for rollback
- Test each endpoint after conversion

## AI's TODOs
1. ✅ Install TypeScript and @types packages
2. ✅ Create tsconfig.json for Node environment
3. ✅ Convert user controller to TypeScript
4. ✅ Add Zod schemas for user endpoints
5. ✅ Convert auth controller to TypeScript
6. ⏳ Convert remaining controllers
7. ⏳ Add comprehensive type tests
8. ⏳ Remove old JavaScript files

## Major Issues Encountered

### Express Types Compatibility
**Problem**: @types/express conflicted with custom middleware types
**Solution**: Created custom type extensions in types/express.d.ts

### Runtime Validation
**Problem**: TypeScript types don't validate at runtime
**Solution**: Implemented Zod schemas that generate TypeScript types

---
*Generated: 2025-01-20 10:30*
*Tool: Claude Code (claude.ai/code)*
*Session: Incremental TypeScript migration*`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            Pro <span className="text-remix-blue">Tips</span>
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Use with --resume</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  When resuming a session with{' '}
                  <code className="text-remix-blue">claudecode --resume</code>, the AI Plan helps
                  Claude Code quickly understand previous work
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Reference in CLAUDE.md</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Add "Check /plans/ for recent work context" to your CLAUDE.md to help Claude Code
                  understand project history
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Commit with Code</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Ask Claude Code to commit the plan with the implementation: "Commit these changes
                  along with the AI Plan"
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Team Sharing</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Share successful plans with your team to establish best practices for AI-assisted
                  development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClaudeCodePage;
