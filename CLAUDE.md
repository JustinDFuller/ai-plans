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

When making changes to this project, create an AI Plan in `/plans/` following the naming convention:
```
/plans/YYYY-MM-DD-description.md
```

Include: Summary, Original Request, AI's Plan, AI's TODOs, and Major Issues Encountered.