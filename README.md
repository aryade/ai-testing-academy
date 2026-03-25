# AI Testing Academy MVP

An interactive learning platform for mastering AI testing and quality assurance. Built with Vue.js 3, Vite, and Tailwind CSS.

## Features

### 🎓 Three Learning Pillars
1. **Fundamentals & Learning** - AI/ML basics, tool exploration, RAG vs CoT
2. **Quality & Reliability** - Validation strategies, hallucination detection, risk mitigation
3. **Application & Evolution** - Practical integration, modern tools, career guidance

### 🔧 Build This Now: Agent Inventory Project
Hands-on project with integrated code editor for building an AI agent inventory system. Load templates, run code, execute tests, and submit solutions.

### 👤 Student Features
- Free access to all learning content
- Optional Supabase authentication for progress tracking
- Project submission capability
- Progress dashboard (when logged in)

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create `.env.local` with your Supabase configuration:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

To get started without auth, you can leave these blank - all learning content is publicly accessible.

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── PillarCard.vue
│   ├── ModuleHeader.vue
│   └── LessonContent.vue
├── views/              # Page components
│   ├── HomePage.vue
│   ├── Module{1,2,3}View.vue
│   ├── ProjectView.vue
│   ├── LoginView.vue
│   └── DashboardView.vue
├── router/             # Vue Router config
├── stores/             # Pinia state management
├── services/           # Supabase client
├── App.vue             # Root component
└── main.js            # Entry point
```

## Deployment to GitHub Pages

### Setup

1. Create a GitHub repository named `ai-testing-academy`
2. Clone the repo and copy this project into it
3. Configure git:

```bash
git init
git remote add origin https://github.com/YOUR-USERNAME/ai-testing-academy.git
```

### Deploy

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

Or manually:

```bash
# Build
npm run build

# Push dist to gh-pages
git subtree push --prefix dist origin gh-pages
```

### Access Your Site

Visit: `https://YOUR-USERNAME.github.io/ai-testing-academy/`

## Technology Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Backend**: Supabase (optional)
- **Deployment**: GitHub Pages

## Content Overview

### Module 1: Fundamentals
- AI vs ML definitions
- Popular tools (ChatGPT, Claude, Copilot, Bedrock)
- Supervised learning example
- Hallucinations and their challenges
- RAG vs Chain-of-Thought prompting

### Module 2: Quality & Reliability
- Non-deterministic testing challenges
- Validation strategies
- Hallucination detection
- Bias testing
- Risk mitigation

### Module 3: Application & Evolution
- Test generation with AI
- Self-healing tests
- MLOps integration
- Tool ecosystem (Playwright, Playwright agents, Cursor)
- Career evolution in AI QA

### Project: Agent Inventory System
Build an AI agent inventory management system featuring:
- Agent class with capacity tracking
- Assignment management
- Utilization calculations
- Test execution environment
- Code templates for learning

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

This is an educational MVP. Feel free to fork and extend with:
- Additional interactive exercises
- Video content integration
- Real-world case studies
- Community contributions

## License

MIT - Feel free to use for educational purposes

## Support

For issues or questions:
1. Check the learning modules for answers
2. Review the code examples provided
3. Experiment with the code editor in the Agent Inventory project

---

Built with ❤️ for AI QA professionals
