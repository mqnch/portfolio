# Felix Pan Portfolio

A modern, one-page portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Left-aligned sticky sidebar navigation
- 🌓 Auto dark/light theme based on system preference
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive design
- 🚀 Optimized for Vercel deployment

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **ESLint + Prettier** - Code quality and formatting

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main portfolio page
│   ├── globals.css      # Global styles
│   └── theme-provider.tsx # Theme management
├── components/
│   └── sidebar.tsx      # Navigation sidebar
└── public/
    └── favicon.ico      # Site favicon
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

## License

MIT

