# Ravi Thakur Portfolio

A modern personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Overview

This project showcases Ravi Thakur's profile, skills, projects, experience, and contact information in a clean, responsive, animation-rich layout.

## Features

- Responsive design for desktop, tablet, and mobile
- Smooth section reveal animations on scroll
- Modern hero, navbar, and footer UI
- Project cards with interactive details modal
- Skills and experience sections with motion effects
- Centralized portfolio content via `data/portfolio.js`

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Project Structure

```txt
app/
components/
  ui/
    sections/
data/
  portfolio.js
public/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Customize Content

Update personal details, links, skills, and projects in:

- `data/portfolio.js`

Update section UI in:

- `components/ui/sections/*`

## Deployment

This project can be deployed on Vercel or any platform that supports Next.js.

## Repository

GitHub: `https://github.com/ravithakur776/Portfolio-Site`
