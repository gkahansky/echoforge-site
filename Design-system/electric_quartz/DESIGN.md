# Design System Specification: High-Voltage Precision

## 1. Overview & Creative North Star: "The Kinetic Architect"
This design system rejects the static, boxed-in nature of traditional SaaS interfaces in favor of a "Kinetic Architect" aesthetic. We are building environments that feel alive—pulsing with high-frequency energy while maintaining the structural integrity of professional engineering tools. 

The "North Star" is a balance of **Technical Sophistication** and **Vibrant Velocity**. We achieve this by pairing the clinical precision of `Space Grotesk` with high-energy "Electric" accents, utilizing intentional asymmetry and tonal depth rather than rigid lines to guide the eye. The interface should feel like a high-end digital dashboard: lightweight, luminous, and impossibly fast.

---

## 2. Color & Surface Philosophy
We move beyond flat UI by treating the screen as a luminous canvas of layered light.

### The Palette
*   **Primary (Electric Violet):** `#6a37d4` — Our engine. Use for high-impact actions and brand moments.
*   **Secondary (Cyber Cyan):** `#006576` — Our technical edge. Use for data visualization, status indicators, and secondary highlights.
*   **Surface Base:** `#f5f7f9` — A clean, bright foundation that allows accents to "pop."

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through:
1.  **Background Shifts:** Placing a `surface-container-low` component against a `surface` background.
2.  **Negative Space:** Using aggressive white space to imply containment.
3.  **Tonal Transitions:** Subtle shifts in color temperature to separate "Global" navigation from "Local" content.

### Signature Textures & Glassmorphism
To avoid a "template" look, utilize **Glassmorphism** for floating menus and modals.
*   **Token:** Use `surface-container-lowest` at 80% opacity with a `24px` backdrop blur.
*   **Gradients:** Apply a linear gradient (Primary to Primary-Container) on hero CTAs to provide a "3D light source" effect, moving away from flat, "cheap-looking" fills.

---

## 3. Typography: Technical Authority
We use typography as a structural element. The high contrast between our dark ink (`#0F172A`) and our bright surfaces creates an editorial feel.

*   **Display & Headlines (Space Grotesk):** These are your "Anchor" elements. Use `Medium` or `Bold` weights. The monospaced-adjacent feel of Space Grotesk provides the "Quartz" technical edge. Use tight letter-spacing (-2%) for large headlines to increase perceived authority.
*   **Body & UI (Inter):** For long-form reading and dense data, we switch to `Inter`. It provides high legibility at small scales, ensuring the "Professional" side of our personality is never sacrificed for "Energy."
*   **Labels (Space Grotesk):** All-caps labels in `label-sm` should be used for metadata and category tags to reinforce the technical dashboard aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "heavy" for this system. We use **Tonal Layering** to create a sense of verticality.

*   **The Layering Principle:** 
    *   **Base Layer:** `surface` (#f5f7f9)
    *   **Recessed Content:** `surface-container` (#e5e9eb)
    *   **Elevated Cards:** `surface-container-lowest` (#ffffff)
*   **Ambient Shadows:** If an element must float (e.g., a dropdown), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(106, 55, 212, 0.06)`. Note the purple tint in the shadow—this makes the shadow feel like a natural reflection of the "Electric" brand rather than "dirty" grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons (The High-Contrast Engine)
*   **Primary:** Background `primary`, Text `on-primary`. Radius: `lg` (1rem). These are the boldest elements on the page.
*   **Secondary:** Background `secondary-container`, Text `on-secondary-container`. 
*   **Interaction:** On hover, Primary buttons should utilize a subtle glow effect (box-shadow using `primary` at 20% opacity).

### Cards & Containers
*   **Forbid Dividers:** Do not use lines to separate header from body in a card. Use a `surface-container-low` background for the header and `surface-container-lowest` for the body.
*   **Asymmetry:** In marketing or dashboard "Hero" cards, use a slightly larger `xl` (1.5rem) corner radius on just one corner (e.g., top-right) to break the "standard grid" feel.

### Input Fields
*   **Style:** Minimalist. No heavy borders. Use a `surface-container-high` background with a `2px` bottom-only border in `primary` that animates (expands from center) on focus.
*   **Labels:** Use `label-md` in `Space Grotesk` positioned above the input.

### Status Chips
*   High-energy, pill-shaped (`full` roundedness). Use `secondary` (Cyan) for positive/active states to contrast against the `primary` (Violet) brand actions.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace White Space:** Give your typography room to breathe. High-energy colors require low-density layouts to remain sophisticated.
*   **Use Intentional Asymmetry:** Offset images or text blocks by 24px-48px from the standard grid to create visual interest.
*   **Layer Surfaces:** Place a white card on a light-grey background instead of drawing a border.

### Don’t:
*   **Don't use "Pure Black":** Use the high-contrast `on-surface` (#2c2f31) for text to keep the interface feeling premium and "light-filled."
*   **Don't use 1px Dividers:** If you feel the urge to draw a line, try adding 16px of padding and a subtle background color shift instead.
*   **Don't over-saturate:** Keep the backgrounds clean. The "Electric" colors are accents; if used for 100% of the screen, the "sophisticated" personality will be lost to visual noise.