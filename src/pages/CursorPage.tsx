import type { FC } from 'react';
import { useState } from 'react';

const CursorPage: FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string): void => {
    void navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  // Modern Cursor Project Rules (MDC format)
  const cursorMdcRule = `---
description: Create AI Plans for feature implementations
alwaysApply: true
---

# AI Plans Documentation

When working on features or fixes in this project, create an AI Plan document in the /plans/ directory.

## When to Create AI Plans

### Create AI Plans for:
- Substantive feature additions or modifications
- Complex bug fixes requiring investigation
- Architectural changes or refactoring
- Integration of new dependencies or tools
- Any change requiring multiple steps or significant planning

### DO NOT create AI Plans for:
- Simple typo fixes
- Minor style adjustments
- Straightforward documentation updates
- Single-line bug fixes
- Dependency version bumps without code changes

## File Format
- Location: /plans/
- Naming: YYYY-MM-DD-description.md
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

Document your approach, track progress, and note any challenges faced during implementation.

@/plans/README.md`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-32 sm:pt-40 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 animate-gradient bg-[length:200%_200%]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none">
              AI Plans for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cursor
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Configure Cursor to automatically document your AI-assisted development with
              structured markdown plans using cursor rules.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            Quick <span className="text-purple-400">Setup</span>
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">
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

            {/* Step 2 - Modern Project Rules */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Create Project Rules (Recommended)
                </h3>
                <p className="text-gray-400 mb-3">
                  Create the modern <code className="text-purple-400">.cursor/rules</code> directory
                  and add an MDC rule file:
                </p>
                <div className="bg-remix-gray-900 rounded-lg p-3 sm:p-4 border border-remix-gray-800 mb-3">
                  <code className="text-green-400 font-mono">
                    mkdir -p .cursor/rules
                    <br />
                    touch .cursor/rules/ai-plans.mdc
                  </code>
                </div>
                <div className="bg-remix-gray-900 rounded-lg border border-remix-gray-800 relative">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-remix-gray-800">
                    <span className="text-sm text-gray-500 font-mono">
                      .cursor/rules/ai-plans.mdc
                    </span>
                    <button
                      onClick={() => {
                        copyToClipboard(cursorMdcRule, 'cursor-mdc');
                      }}
                      className="text-xs px-3 py-1 bg-remix-gray-800 hover:bg-remix-gray-700 rounded transition-colors"
                    >
                      {copiedSection === 'cursor-mdc' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-3 sm:p-4 overflow-x-auto max-w-full">
                    <code className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words">
                      {cursorMdcRule}
                    </code>
                  </pre>
                </div>
                <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-800/50 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    <strong>Note:</strong> The legacy <code>.cursorrules</code> file is still
                    supported but deprecated. Use the modern Project Rules system for better control
                    and flexibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Rule activates automatically
                </h3>
                <p className="text-gray-400 mb-3">
                  With <code className="text-cyan-400">alwaysApply: true</code>, the AI Plans rule
                  is always active. This ensures every feature implementation gets properly
                  documented, regardless of which files you're working on.
                </p>
                <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                  <p className="text-green-400 text-sm">
                    <strong>Why always apply?</strong> AI Plans documentation should be created for
                    any feature work, not just when editing specific file types. This global
                    approach ensures comprehensive project documentation.
                  </p>
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
            How to <span className="text-pink-400">Use</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-remix-gray-900/50 rounded-xl p-4 sm:p-6 border border-remix-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">
                With Composer
              </h3>
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

            <div className="bg-remix-gray-900/50 rounded-xl p-4 sm:p-6 border border-remix-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-pink-400">
                With Chat
              </h3>
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
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            Why AI Plans Work Great with <span className="text-purple-400">Cursor</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-purple-600/10 to-transparent rounded-xl p-4 sm:p-6 border border-remix-gray-800 hover:border-purple-500/50 transition-all">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎨</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Composer Integration</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Multi-file edits in Composer benefit from structured planning documentation
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-pink-500/50 transition-all">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Context Management</h3>
              <p className="text-sm sm:text-base text-gray-400">
                AI Plans help maintain context across different chat sessions and composers
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/10 to-transparent rounded-xl p-6 border border-remix-gray-800 hover:border-purple-500/50 transition-all">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Codebase Understanding</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Plans provide searchable documentation of AI-driven architectural decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Plan */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-remix-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
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
                <span className="text-sm text-gray-500 font-mono">
                  2025-01-20-15-45-dark-mode.md
                </span>
              </div>
            </div>
            <pre className="p-4 sm:p-6 overflow-x-auto max-w-full">
              <code className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">{`# Implement Dark Mode Support

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
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">
            Pro <span className="text-purple-400">Tips</span>
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Reference Plans in Composer</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  When starting Composer, mention "Check /plans/ for recent work" to help Cursor
                  understand previous implementations and maintain consistency
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">
                  Include Plan Template in Rules
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Add <code className="text-purple-400">@/plans/template.md</code> reference in your
                  .mdc rules to ensure consistent AI Plan format across all sessions
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">
                  Always Apply for Consistency
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Using <code className="text-purple-400">alwaysApply: true</code> ensures AI Plans
                  are created for every feature, regardless of file types being edited
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Link Plans in Comments</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Ask Cursor to add comments like{' '}
                  <code className="text-purple-400">// See: /plans/2025-01-20-feature.md</code>
                  in complex code sections for future context
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CursorPage;
