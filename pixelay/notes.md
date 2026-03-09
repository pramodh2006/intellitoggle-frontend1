# Pixelay Fidelity Notes

* **Font Rendering (Weight & Tracking):** Chrome renders the Inter font slightly bolder and with different sub-pixel tracking than Figma's vector canvas, causing minor text wrapping shifts in the Hero and CTA sections.
* **Line Height Calculation:** Browsers calculate line-height dynamically, whereas Figma uses absolute math. This causes a minor vertical drift over large text blocks compared to the overlay.
* **Responsive Tradeoffs:** Minor padding variances exist because I prioritized fluid Tailwind grid classes (using `gap` and `rem` scaling) over fixed absolute pixel values to ensure a cleaner mobile reflow.
