# Turquoise Penguin Portfolio

A modern, responsive portfolio website with dark mode functionality.

## Features
- Single Page Application (SPA) with client-side routing
- Dark/Light mode toggle with localStorage persistence
- Responsive design for all devices
- Professional resume and contact sections

## Local Development
```bash
npm install
npm start
```

## Deployment Options

### 1. Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

### 3. GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch

### 4. AWS S3 + CloudFront
Upload files to S3 bucket configured for static website hosting

## File Structure
```
├── index.html          # Main HTML file
├── styles.css          # CSS with dark mode variables
├── script.js           # SPA router and functionality
├── package.json        # Dependencies and scripts
├── netlify.toml        # Netlify configuration
├── vercel.json         # Vercel configuration
└── README.md           # This file
```