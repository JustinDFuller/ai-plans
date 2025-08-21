> [!NOTE]
> This repository was created 100% using [Claude Code](https://claude.ai/code) - every line of code, documentation, and design decision was implemented through AI-assisted development.

# AI Plans

A modern documentation website explaining the AI Plans concept - a structured approach to tracking AI-assisted development decisions and processes.

## 🚀 Live Demo

Visit [ai-plans.dev](https://ai-plans.dev) (deploy via Vercel)

## Example

<div align="center">
<img width="auto" height="1500" alt="screely-1755570588911" src="https://github.com/user-attachments/assets/05bfee2a-b451-4043-a5c9-38a8ff2aab1a" />
</div>

## 📖 What are AI Plans?

AI Plans are markdown documents that capture the complete context of AI-assisted development tasks. Similar to Architecture Decision Records (ADRs), but specifically designed for AI tool interactions, they provide:

- Original developer requests
- AI's proposed implementation plans
- Task breakdowns and TODOs
- Issues encountered and resolutions

All stored in your repository's `/plans/` directory for future reference.

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast builds
- **Tailwind CSS** for styling
- **Vercel** for deployment

## 🏃 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/JustinDFuller/ai-plans.git
cd ai-plans

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
ai-plans/
├── src/
│   ├── App.tsx         # Main application component
│   ├── index.css       # Tailwind CSS directives
│   └── main.tsx        # Application entry point
├── plans/              # AI Plans documentation
│   └── *.md            # Individual AI Plan documents
├── public/             # Static assets
└── vercel.json         # Vercel configuration
```

## 🎨 Design

The website features a Remix.run-inspired dark theme with:

- Vibrant cyan, blue, and purple gradients
- Bold typography and modern layout
- Smooth animations and transitions
- Responsive design for all devices

## 📝 Creating AI Plans

When using AI tools for development, create a plan document:

```markdown
/plans/YYYY-MM-DD-description.md
```

Include these sections:

1. **Summary** - Concise description of the change
2. **Original Request** - The user's initial request
3. **AI's Plan** - Implementation strategy
4. **AI's TODOs** - Task breakdown with status
5. **Major Issues** - Problems and solutions

## 🤝 Contributing

1. Create an AI Plan for your feature/fix
2. Implement the changes
3. Update the AI Plan with issues encountered
4. Submit a PR with both code and plan

## 📄 License

MIT License - feel free to use this pattern in your projects!

## 🔗 Links

- [GitHub Repository](https://github.com/JustinDFuller/ai-plans)
- [AI Plans Concept](https://ai-plans.dev)

---

Built with AI assistance and documented in [its own AI Plan](/plans/2025-01-19-ai-plans-website.md) 🤖
