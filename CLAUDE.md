# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the AI Plans documentation website - a modern web application that explains and promotes the concept of "AI Plans," a documentation pattern for tracking AI-assisted development decisions and processes (similar to Architecture Decision Records).

**Tech Stack:**

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS with @tailwindcss/postcss for styling
- Vercel for deployment

## Development Setup

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev          # Start dev server on default port
npm run dev -- --port 3000 --host  # Specify port and expose to network
```

### Build Commands

```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Linting

```bash
npm run lint         # Run ESLint
```

## Architecture

### Project Structure

- `/src/App.tsx` - Main application component with all sections
- `/src/index.css` - Tailwind CSS directives
- `/plans/` - AI Plans documentation directory
- `/public/` - Static assets

### Design System

- **Theme**: Dark theme with black background
- **Colors**: Cyan, blue, and purple gradients for accents
- **Typography**: Bold, modern sans-serif with large headings
- **Layout**: Single-page application with smooth scroll navigation

### Key Features

1. Hero section with gradient effects
2. Comparison table (AI Plans vs ADRs)
3. File format documentation
4. Interactive code example with terminal styling
5. Step-by-step getting started guide

## AI Plans Convention

### When to Create AI Plans

**Create an AI Plan for:**

- Substantive feature additions or modifications
- Complex bug fixes requiring investigation
- Architectural changes or refactoring
- Integration of new dependencies or tools
- Any change requiring multiple steps or significant planning

**DO NOT create an AI Plan for:**

- Simple typo fixes
- Minor style adjustments
- Straightforward documentation updates
- Single-line bug fixes
- Dependency version bumps without code changes

### Plan Format

When creating an AI Plan, use the following naming convention in `/plans/`:

```
/plans/YYYY-MM-DD-description.md
```

Include: Summary, Original Request, AI's Plan, AI's TODOs, and Major Issues Encountered.

### Why AI Plans Add Value

AI Plans provide unique benefits beyond PR descriptions and commit messages:

1. **Real-time AI Context**: Plans are immediately accessible to AI tools during implementation, just like source code files
2. **Implementation Details**: Capture the "how" and "why" of AI-assisted development, including attempted approaches and pivots
3. **Learning History**: Document what worked and what didn't for future AI sessions
4. **Searchable Decisions**: Create a queryable history of development reasoning and trade-offs
5. **Process Transparency**: Show stakeholders exactly how AI assistance was used in development
