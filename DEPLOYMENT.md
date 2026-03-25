# GitHub Pages Deployment Guide

## Quick Start

The AI Testing Academy MVP is ready to deploy to GitHub Pages. Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named: **`ai-testing-academy`**
3. Choose **Public** (so it's accessible via GitHub Pages)
4. Do NOT initialize with README (we already have one)

## Step 2: Initialize Git and Push

In your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AI Testing Academy MVP"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/ai-testing-academy.git

# Rename branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/root`
4. Click **Save**

GitHub will automatically create the `gh-pages` branch when you deploy.

## Step 4: Deploy the Application

### Option A: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

### Option B: Automatic Deployment with GitHub Actions

The `.github/workflows/deploy.yml` is already configured to:
1. Run on every push to `main`
2. Install dependencies
3. Build the project
4. Automatically deploy to `gh-pages`

Just push to main and GitHub Actions will handle deployment!

```bash
# Make changes
# Commit and push
git push origin main

# GitHub Actions will automatically build and deploy
```

## Step 5: Access Your Site

Once deployed, visit:

```
https://YOUR-USERNAME.github.io/ai-testing-academy/
```

**Note**: It may take 1-2 minutes after the first deploy for the site to become live.

## Verify Deployment

1. Check the **Deployments** tab in your GitHub repo
2. Look for "GitHub Pages" deployment status
3. Click the deployment to see details/logs

## Troubleshooting

### Site shows 404

- Wait 1-2 minutes after deployment
- Check that `gh-pages` branch exists in your repo
- Verify Pages settings point to the correct branch

### GitHub Actions Workflow Failed

- Check the **Actions** tab in your repo
- Click the failed workflow for error details
- Common issues:
  - Node version incompatibility
  - Missing dependencies
  - Vite build errors

### Local Build Works but Deployment Fails

- Ensure `vite.config.js` has correct base path: `/ai-testing-academy/`
- Verify no hardcoded absolute paths in code
- Check that all assets are properly imported

## Production Checklist

- [x] Vue.js app builds successfully (`npm run build`)
- [x] All routes work (hover test by visiting each module)
- [x] Tailwind CSS styles load correctly
- [x] Images/assets load (if any)
- [x] Code editor works in Agent Inventory project
- [x] Navigation between pages works
- [x] No console errors in browser dev tools
- [x] Responsive design works on mobile

## Environment Variables (Optional)

If you want Supabase authentication:

1. Create `.env.local` in your project root
2. Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. This file is NOT committed to git (in .gitignore)
4. GitHub Pages will work without these (all content is public)

For CI/CD with Supabase, add these as GitHub Secrets:
- Go to **Settings** → **Secrets and variables** → **Actions**
- Add: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Update `.github/workflows/deploy.yml` to use them

## Next Steps After Deployment

1. **Share your site**: Send the GitHub Pages URL to students
2. **Monitor analytics**: Use GitHub Pages insights
3. **Iterate**: Make changes, push to main, automatic deployment kicks in
4. **Add content**: Expand modules, add more projects
5. **Collect feedback**: Use GitHub Issues to track improvement requests

## Useful Commands

```bash
# Update code and redeploy
git add .
git commit -m "Update: [describe change]"
git push origin main

# Preview production build locally
npm run build
npm run preview

# Force rebuild (clear cache)
rm -rf dist node_modules
npm install
npm run build
```

---

**Congratulations!** 🎉 Your AI Testing Academy is now deployed to GitHub Pages!
