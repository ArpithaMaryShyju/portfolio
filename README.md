# Arpitha Mary Shyju — Personal Portfolio Website

An editorial, modern, and fully responsive personal portfolio website crafted for **Arpitha Mary Shyju**, First-Year Computer Science and Engineering student at **Amal Jyothi College of Engineering (AJCE), Kanjirappally, Kerala, India**.

Designed with a warm, sophisticated light aesthetic prioritizing editorial typography, organic whitespace, subtle micro-interactions, and accessible web standards.

---

## 🎨 Visual Identity & Color Palette

The design adheres strictly to a warm, editorial, and minimal aesthetic:

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Background (Primary)** | `#FAF7F2` | Warm Cream base for whole page |
| **Secondary Background** | `#F0E9DF` | Light Beige for alternate sections |
| **Primary Text** | `#382D26` | Dark Chocolate for headings & strong contrast |
| **Secondary Text** | `#82766A` | Muted Brown for body copy and captions |
| **Accent Color** | `#B47C5A` | Warm Terracotta for CTA buttons, badges, links |
| **Cards & Surfaces** | `#FFFFFF` | Clean white cards with gentle organic shadows |

### Typography
- **Headings**: `Playfair Display` (Classic high-fashion editorial serif with italics)
- **Body & Controls**: `Plus Jakarta Sans` (Clean, crisp, legible modern sans-serif)
- **Badges & Dates**: `JetBrains Mono` (Refined monospace for technical accents)

---

## 🌟 Key Features & Sections

1. **Sticky Glassmorphic Navigation Bar**
   - Brand logo: `ARPITHA.` with terracotta dot.
   - Smooth scrolling links to `#hero`, `#about`, `#education`, `#skills`, `#experience`, `#projects`, `#contact`.
   - Active scroll-spy reflecting current position.
   - Highlighted "Let's Connect" button.
   - Responsive mobile navigation drawer with backdrop blur and keyboard escape listener.

2. **Hero Section**
   - First-year CSE scholar status pill with live pulsing indicator.
   - Elegant editorial introduction and personal statement.
   - Primary CTAs: "Explore My Work" and "View Resume / CV".
   - Key highlights strip: Degree, Institution, and Graduation year (2030).
   - Right-side editorial card with custom monogram avatar frame, floating badges, and quote card.

3. **About Section**
   - Full personal statement and introduction.
   - Personal philosophy: Intellectual Curiosity, Continuous Learning, Creativity & Design, and Collaborative Spirit.
   - Quick factual summary table (Degree, College, Email, Location).
   - Direct button to launch the interactive CV preview modal.

4. **Education Pathway**
   - **Amal Jyothi College of Engineering, Kanjirappally, Kerala, India** (B.Tech CSE, 2026–2030).
   - Core foundational coursework: Python Problem Solving, Computing Logic, Engineering Math, Object-Oriented Principles.
   - Higher Secondary STEM foundation details.

5. **Technical Skills & Toolkit**
   - Filter tabs: All, Languages, Web & Frontend, Developer Tools, Soft Skills.
   - Cards with custom SVG icons, proficiency labels, and contextual usage descriptions.

6. **Campus Experience & Leadership**
   - Engagement in Department of CSE, IEEE Student Branch, ACM AJCE Chapter, IEDC Innovation Cell, and hackathons.

7. **Curated Projects Showcase**
   - Categorized cards with live demo triggers, tech tags, and GitHub repository links.
   - Interactive Project Detail Modal explaining architecture, problems solved, and key learnings.

8. **Contact Section**
   - Direct student email: `arpithamaryshyju2030@cs.ajce.in`
   - One-click **"Copy Email to Clipboard"** button with animated toast confirmation.
   - Location: Kanjirappally, Kerala, India.
   - Interactive validated contact form with real-time feedback and submission simulation.

9. **Interactive Resume / CV Viewer**
   - Built-in printable curriculum vitae modal with clean print stylesheet support.

---

## 📂 File Structure

```text
portfolio/
├── index.html            # Semantic, accessible HTML5 structure
├── package.json          # Optional dev server scripts (Vite / serve)
├── README.md             # Documentation & setup guide
├── css/
│   ├── variables.css     # Warm color palette, typography & spacing tokens
│   ├── base.css          # Modern CSS reset & typographic scale
│   ├── components.css    # Buttons, cards, badges, modals & toast notifications
│   ├── sections.css      # Section-specific styles (Nav, Hero, About, etc.)
│   └── responsive.css    # Mobile breakpoints & print styles
├── js/
│   ├── main.js           # Header scroll effect, mobile menu & scroll spy
│   ├── projects.js       # Project filtering & interactive detail modal
│   ├── contact.js        # Form validation, copy-to-clipboard & toast system
│   └── animations.js     # IntersectionObserver reveal animations & resume modal
└── assets/
    ├── images/           # Badges & graphical assets
    └── documents/        # Downloadable documents
```

---

## 🚀 How to Run & Preview

### Option 1: Direct Browser Open (Zero Install)
Simply double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Safari, or Firefox.

### Option 2: Using Python Simple Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: Using Node / Vite (Optional)
```bash
npm install
npm run dev
```

---

## 🌐 Free One-Click Deployment

### GitHub Pages:
1. Push this repository to GitHub.
2. In your repository, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live at `https://<username>.github.io/<repo-name>/`.

### Netlify / Vercel:
Drag and drop the project folder directly into the [Netlify Drop](https://app.netlify.com/drop) or deploy via Vercel CLI.

---

## 👤 Personal Information
- **Name**: Arpitha Mary Shyju
- **Role**: First-Year Computer Science and Engineering Student
- **College**: Amal Jyothi College of Engineering, Kanjirappally, Kerala, India
- **Degree**: B.Tech in Computer Science and Engineering (Expected 2030)
- **Email**: [arpithamaryshyju2030@cs.ajce.in](mailto:arpithamaryshyju2030@cs.ajce.in)

