# Developer Notes: IntelliToggle Frontend Implementation

## Development Decisions & Hurdles
1. **Component Architecture:** I broke the landing page down into focused, reusable Vue components (`HeroSection`, `FeatureHighlights`, `CtaSection`, etc.). This aligns with Vue best practices, ensuring clean code and scalability.
2. **Styling Approach:** I utilized Tailwind CSS for responsive layouts and structure. For the exact branding requested in the Figma file, I mapped specific hex codes to custom CSS variables (`--color-brand-dark`, `--color-brand-orange`) to ensure strict adherence to brand guidelines.
3. **Responsive Execution:** Translating the desktop-first design to mobile required careful handling of grid layouts. I utilized Tailwind's `md:` and `sm:` breakpoints to ensure the multi-column grids stacked cleanly on smaller screens.

## Notes on "Pixel Perfect" Overlay Fidelity
While the layout spacing, padding, colors, and grid structures have been matched precisely to the provided design values, there are minor visual discrepancies when using an overlay tool like Pixelay. These are caused by known technical differences between Figma and browser rendering engines:
* **Font Rendering & Anti-Aliasing:** Figma utilizes a proprietary vector-based rendering engine, whereas browsers (like Chrome) rely on the operating system's native subpixel font rendering. This causes identical fonts (like Inter) with identical `font-size` and `font-weight` properties to often render slightly bolder or with slightly different tracking in the browser than on the Figma canvas.
* **Line Height Calculations:** Browsers calculate line-height dynamically based on the font's internal bounding box, whereas Figma applies absolute math to text boxes. Over large blocks of text, this causes minor vertical shifting (drifting) in the browser compared to a static image export of the Figma file.

## Areas for Potential Improvement (With More Time)
1. **Animations:** Given more time, I would implement subtle scroll-triggered entrance animations (using Nuxt transition or a library like GSAP) to elevate the premium feel of the product.
2. **Component Reusability:** I would abstract the various buttons into a global `<BaseButton>` component that accepts `variant` and `size` props to keep the codebase fully DRY.
