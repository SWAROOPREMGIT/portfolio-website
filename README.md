# B. S. Premswaroop — Developer Portfolio Website

A modern, high-performance portfolio website built with **React**, **Vite**, and clean **Modern CSS** design system. Tailored for software engineering, full-stack web development, and AI/ML roles.

---

## 🚀 Live Preview & Quick Start

### 1. Prerequisites
- **Node.js**: v18+ or v20+ / v22+ (verified working on v22.12.0)
- **npm**: v10+

### 2. Local Installation & Development
```bash
# Navigate to the project directory
cd portfolio-website

# Install dependencies (if not already installed)
npm install

# Start the local development server (with Hot Module Replacement)
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Local Preview
```bash
# Build the optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```
The production preview runs at [http://localhost:4173](http://localhost:4173).

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.svg             # Custom SVG monogram icon
│   └── Premswaroop_Resume.pdf  # Downloadable resume PDF extracted from your file
├── src/
│   ├── assets/                 # Static graphical assets
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky blur header with active links & mobile drawer
│   │   ├── Hero.jsx            # Headline, elevator pitch, CTAs & quick stats
│   │   ├── TerminalWidget.jsx  # Interactive bash shell sandbox for recruiters
│   │   ├── About.jsx           # Background, Aim & Contribution quotes, target roles
│   │   ├── Skills.jsx          # Filterable skills cards (No fake rating bars)
│   │   ├── Projects.jsx        # Project cards with deep-dive modal triggers
│   │   ├── ProjectModal.jsx    # In-depth architectural breakdown & schema details
│   │   ├── Education.jsx       # AJIET (CGPA 8.08), PUC (83%), SSLC (89%)
│   │   ├── Certifications.jsx  # Infosys Springboard, Oracle OCI, Microsoft Excel
│   │   ├── Hackathons.jsx      # NEXATHON 2025 (HealVision AI), Empathy Encryption
│   │   ├── Contact.jsx         # 1-click copy email/phone + interactive contact form
│   │   ├── Footer.jsx          # Footer links, back-to-top button & copyright
│   │   └── SocialIcons.jsx     # Clean SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all resume data
│   ├── App.jsx                 # Root layout & component composition
│   ├── index.css               # Design tokens, dark theme, glassmorphism, responsive grid
│   └── main.jsx                # React DOM entry point
├── index.html                  # SEO metadata, Open Graph tags & Google Fonts
├── package.json
└── vite.config.js
```

---

## 🛠️ Customization & Updating Placeholders

All website data is centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js). To update any details:

1. **GitHub Profile & Repository Links**:
   - Open `src/data/portfolioData.js`.
   - Update `personal.github` with your actual GitHub username (e.g., `https://github.com/your-username`).
   - In `projects`, update the `github` and `demo` fields for **PathFinder AI** and **Smart Expense Tracker** with your actual repository URLs.

2. **Resume PDF**:
   - The file is placed at `public/Premswaroop_Resume.pdf`.
   - To update your resume in the future, simply drop your new PDF into the `public/` directory with the name `Premswaroop_Resume.pdf`.

3. **Profile Photo (Optional)**:
   - Add your professional headshot to `public/profile.jpg`.
   - In `src/components/Hero.jsx` or `About.jsx`, uncomment or add an `<img>` tag referencing `/profile.jpg`.

4. **Connecting the Contact Form to a Backend (Optional)**:
   - The contact form currently provides instant validation, a simulated success toast, and a one-click mailto button.
   - To receive emails directly in your inbox from web submissions, you can plug in [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com):
     ```jsx
     // Example with Formspree:
     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData)
     });
     ```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended — 2 minutes)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and import `portfolio`.
4. Vercel automatically detects **Vite**; keep the default settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Your portfolio is live with a free SSL certificate!

### Option 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com).
2. Connect your GitHub repository.
3. Set Build command to `npm run build` and Publish directory to `dist`.
4. Click **Deploy Site**.

### Option 3: Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. In `vite.config.js`, set `base: '/portfolio/'` (matching your repo name).
3. In `package.json`, add: `"deploy": "gh-pages -d dist"`
4. Run `npm run build && npm run deploy`.

---

## ✅ Recruiter Checklist & Assets Needed

- [x] Accurate degree details & CGPA (8.08, AJIET Mangaluru, Expected 2027)
- [x] Verifiable project descriptions (PathFinder AI & Smart Expense Tracker)
- [x] Hackathon participation (NEXATHON 2025 & Empathy Encryption)
- [x] Verified certifications (Infosys Python, Oracle OCI, Microsoft Excel)
- [x] Direct downloadable resume PDF (`Premswaroop_Resume.pdf`)
- [ ] Replace placeholder GitHub repository URLs once repositories are made public.
- [ ] Add live deployment URLs for projects when deployed.
- [ ] Optional: Add a high-resolution professional headshot photograph.
