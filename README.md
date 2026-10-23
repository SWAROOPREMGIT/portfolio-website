# B. S. Premswaroop — Developer Portfolio Website

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://portfolio-website-ten-alpha-63.vercel.app)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Powered by Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vite.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance portfolio website built with **React 19**, **Vite 8**, and a clean **Custom CSS** design system. Tailored for software engineering, full-stack web development, and AI/ML roles.

---

## 🚀 Live Demo

> **[https://portfolio-website-ten-alpha-63.vercel.app](https://portfolio-website-ten-alpha-63.vercel.app)**

---

## ✨ Features

- 🎨 **Dark glassmorphism UI** with smooth CSS animations and transitions
- 🖥️ **Interactive Terminal Widget** — a fake bash shell for recruiters to explore info interactively
- 📱 **Fully responsive** — mobile-first design with collapsible navigation drawer
- ⚡ **Blazing fast** — Vite + React 19 with optimized production bundles
- 🔍 **SEO-ready** — Open Graph meta tags, semantic HTML, and descriptive titles
- 📄 **One-click Resume Download** — PDF accessible directly from the hero section
- 🗂️ **Filterable Skills grid** — categorized and searchable skill cards (no fake rating bars)
- 📬 **Contact form** — with real-time validation and copy-to-clipboard shortcuts
- 🧩 **Project Deep-dive Modals** — architectural breakdown per project without leaving the page

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Custom CSS (Design Tokens, Glassmorphism, CSS Grid/Flexbox) |
| Icons | Lucide React |
| Linting | OxLint |
| Deployment | Vercel |

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.svg              # Custom SVG monogram icon
│   ├── icons.svg                # Bundled SVG sprite (social icons)
│   └── Premswaroop_Resume.pdf   # Downloadable resume PDF
├── src/
│   ├── assets/                  # Static graphical assets (hero image, etc.)
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky blur header with active links & mobile drawer
│   │   ├── Hero.jsx             # Headline, elevator pitch, CTAs & quick stats
│   │   ├── TerminalWidget.jsx   # Interactive bash shell sandbox for recruiters
│   │   ├── About.jsx            # Background, Aim & Contribution quotes, target roles
│   │   ├── Skills.jsx           # Filterable skills cards (no fake rating bars)
│   │   ├── Projects.jsx         # Project cards with deep-dive modal triggers
│   │   ├── ProjectModal.jsx     # In-depth architectural breakdown & schema details
│   │   ├── Education.jsx        # AJIET (CGPA 8.08), PUC (83%), SSLC (89%)
│   │   ├── Certifications.jsx   # Infosys Springboard, Oracle OCI, Microsoft Excel
│   │   ├── Hackathons.jsx       # NEXATHON 2025 (HealVision AI), Empathy Encryption
│   │   ├── Contact.jsx          # 1-click copy email/phone + interactive contact form
│   │   ├── Footer.jsx           # Footer links, back-to-top button & copyright
│   │   └── SocialIcons.jsx      # Clean SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all resume data
│   ├── App.jsx                  # Root layout & component composition
│   ├── App.css                  # Component-level styles
│   ├── index.css                # Design tokens, dark theme, glassmorphism, responsive grid
│   └── main.jsx                 # React DOM entry point
├── index.html                   # SEO metadata, Open Graph tags & Google Fonts
├── vite.config.js
├── package.json
└── .oxlintrc.json
```

---

## ⚙️ Local Development

### Prerequisites
- **Node.js**: v18+ (verified working on v22.12.0)
- **npm**: v10+

### Installation & Dev Server

```bash
# Clone the repository
git clone https://github.com/SWAROOPREMGIT/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server (with Hot Module Replacement)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Local Preview

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

The production preview runs at [http://localhost:4173](http://localhost:4173).

---

## 🌐 Deployment — Vercel (Live)

This project is deployed on **Vercel** with automatic CI/CD. Every push to the `main` branch triggers a new deployment automatically.

### Manual Deployment Steps

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "your commit message"
   git push origin main
   ```

2. **Import on Vercel** *(first time only)*:
   - Go to [vercel.com](https://vercel.com) → **Add New Project**
   - Import `SWAROOPREMGIT/portfolio-website` from GitHub
   - Vercel auto-detects **Vite** — keep the default settings:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **Deploy** ✅

3. **Subsequent deployments** happen automatically on every `git push` to `main`.

---

## 🛠️ Customization

All website content is centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js) — edit that single file to update any personal details, skills, projects, or certifications.

### Key Customization Points

| What to Update | Where |
|---|---|
| Personal info (name, email, phone, bio) | `portfolioData.js` → `personal` |
| Skills and categories | `portfolioData.js` → `skills` |
| Projects & GitHub/demo links | `portfolioData.js` → `projects` |
| Education records | `portfolioData.js` → `education` |
| Certifications | `portfolioData.js` → `certifications` |
| Hackathon entries | `portfolioData.js` → `hackathons` |
| Resume PDF | Replace `public/Premswaroop_Resume.pdf` |
| Profile photo | Add `public/profile.jpg` and reference in `Hero.jsx` |

### Connecting the Contact Form to a Real Backend *(Optional)*

The contact form currently shows a simulated success toast. To wire it to a real email backend:

```jsx
// Example using Formspree (free tier available)
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});
```

Alternatives: [EmailJS](https://www.emailjs.com) · [Web3Forms](https://web3forms.com) · Custom FastAPI backend

---

## ✅ Deployment Checklist

- [x] Resume PDF placed in `public/`
- [x] All personal info filled in `portfolioData.js`
- [x] Hackathon & certification details verified
- [x] Production build tested locally (`npm run build`)
- [x] Repository pushed to GitHub (`SWAROOPREMGIT/portfolio-website`)
- [x] Deployed on Vercel with CI/CD → [portfolio-website-ten-alpha-63.vercel.app](https://portfolio-website-ten-alpha-63.vercel.app)
- [ ] Update GitHub repo URLs for projects once repositories are made public
- [ ] Add live demo URLs for projects when deployed
- [ ] Optional: Add a professional headshot photo

---

## 📄 License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">
  <strong>B. S. Premswaroop</strong> · <a href="mailto:prem.swaroop206@gmail.com">prem.swaroop206@gmail.com</a> · <a href="https://linkedin.com/in/prem-swaroop">LinkedIn</a> · <a href="https://github.com/SWAROOPREMGIT">GitHub</a>
</div>
