# Quick Reference Card

## Essential Commands

```bash
# Development
npm run dev              # Start dev server → http://localhost:5173/ai-testing-academy/
npm run build           # Build for production → dist/ folder
npm run preview         # Preview production build locally

# Deployment
npm run deploy          # Deploy to GitHub Pages (requires git remote)
git push origin main    # Push changes (GitHub Actions auto-deploys)

# Maintenance
npm install             # Install/update dependencies
npm audit               # Check for security issues
npm audit fix           # Auto-fix security issues
```

## Project Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | HomePage | Landing page with 3 pillars |
| `/module/1` | Module1View | Fundamentals & Learning |
| `/module/2` | Module2View | Quality & Reliability |
| `/module/3` | Module3View | Application & Career |
| `/project/agent-inventory` | ProjectView | Build This Now! |
| `/login` | LoginView | Authentication |
| `/dashboard` | DashboardView | Progress tracking |

## File Organization

```
src/
├── components/      # Reusable UI components
├── views/          # Page components (one per route)
├── router/         # Vue Router configuration
├── stores/         # Pinia state management
├── services/       # External API clients (Supabase)
├── App.vue         # Root component
├── main.js         # Entry point
└── style.css       # Global Tailwind + custom styles
```

## Common Tasks

### Add a New Learning Page
1. Create `src/views/NewPageView.vue`
2. Add route to `src/router/index.js`
3. Add link in navigation or homepage

### Customize Colors
Edit `tailwind.config.js` theme.colors

### Add Supabase Features
1. Get credentials from supabase.co
2. Add to `.env.local`
3. Implement functions in `src/services/supabase.js`

### Deploy Changes
```bash
# Make changes and commit
git add .
git commit -m "Description"
git push origin main
# GitHub Actions will auto-deploy!
```

## Deployment Checklist

- [ ] GitHub repository created (`ai-testing-academy`)
- [ ] Code pushed to main branch
- [ ] GitHub Pages enabled in Settings → Pages
- [ ] `npm run build` succeeds locally
- [ ] No console errors in browser
- [ ] Links between pages work
- [ ] Code editor runs without errors
- [ ] Responsive design on mobile
- [ ] Deploy via `npm run deploy` or GitHub Actions
- [ ] Site accessible at `https://USERNAME.github.io/ai-testing-academy/`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Dev server won't start | `rm -rf node_modules && npm install` |
| Build fails | Check `npm run build` error messages |
| Site shows 404 | Wait 1-2 mins after deploy; check gh-pages branch exists |
| Styles not loading | Clear browser cache; check base path in vite.config.js |
| Code editor errors | Check browser console for JavaScript errors |

## Performance

- Build size: ~340KB JS, ~20KB CSS
- Gzipped: ~102KB + ~4KB
- Dev server startup: <1 second
- Page load time: <2 seconds on production

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Environment Setup

### Optional: Supabase Authentication

1. Sign up at [supabase.co](https://supabase.co)
2. Create project and get credentials
3. Create `.env.local`:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-key
   ```
4. Restart dev server

## Key Files to Know

- `vite.config.js` - Build settings, base path
- `tailwind.config.js` - Styling configuration
- `src/main.js` - Vue app initialization
- `src/router/index.js` - All routes defined
- `src/stores/authStore.js` - User state and progress
- `.github/workflows/deploy.yml` - Auto-deployment

## Git Workflow

```bash
# First time
git configure user.name "Your Name"
git config user.email "your@email.com"

# Regular commits
git add .
git commit -m "Update: description"
git push origin main

# View history
git log --oneline

# Undo changes
git checkout -- file.vue
git reset HEAD~1
```

---

**Ready to deploy? See DEPLOYMENT.md for step-by-step instructions!**
