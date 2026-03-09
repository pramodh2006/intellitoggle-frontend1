# IntelliToggle Frontend Assignment

## 🚀 Live Demo & Repository
* **Live Site:** [https://intellitoggle-frontend1.vercel.app/](https://intellitoggle-frontend1.vercel.app/)
* **Repository:** [https://github.com/pramodh11529/intellitoggle-frontend1](https://github.com/pramodh11529/intellitoggle-frontend1)

## 🛠 Tech Stack
* Nuxt 3 / Vue 3
* Tailwind CSS

## 📸 Pixelay Evidence
Per the assignment requirements, objective layout fidelity checks have been provided. Please navigate to the `/pixelay` directory in this repository to find:
1. `pixelay-desktop.png` - Desktop layout overlay
2. `pixelay-mobile.png` - Mobile layout overlay
3. `notes.md` - Brief bullet points explaining the minor visual variances (such as font rendering differences).

## ⚖️ Tradeoffs & Shortcuts
* **Component Abstraction:** To adhere to the 6-8 hour timebox, I abstracted the major page sections into individual components (`HeroSection`, `FeatureHighlights`, `CtaSection`), but left the internal elements (like buttons) as raw HTML/Tailwind classes. In a production environment, I would abstract these into atomic components (e.g., `<BaseButton variant="primary">`) to keep the codebase fully DRY.
* **Fluid Layouts vs Pixel-Perfect:** I opted to use fluid Tailwind spacing (`gap`, `rem` margins/padding) rather than absolute pixel values. While this causes minor 2-4px drifting from the exact Figma canvas in some areas, it ensures the layout reflows safely and predictably across all screen sizes without breaking.

## 🔮 What I Would Do With More Time
* **Accessibility (a11y) Polish:** I would utilize a library like Headless UI to ensure the mobile navigation toggle and any interactive elements have perfect ARIA labels, focus-trapping, and keyboard navigation support.
* **Performance Enhancements:** Implement Nuxt Image (`@nuxt/image`) to automatically optimize, format (WebP/AVIF), and lazy-load the dashboard and logo assets.
* **Micro-Interactions:** Add subtle, scroll-triggered entrance animations (via Nuxt transition or GSAP) to the feature cards and hero section to elevate the premium feel of the landing page.

---

## 💻 Local Setup Instructions

```bash
# Clone the repository
git clone https://github.com/pramodh11529/intellitoggle-frontend.git

# Install dependencies
npm install

# Run the development server
npm run dev
