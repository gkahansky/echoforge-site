# Design System Specification: Editorial Precision & Technical Warmth

## 1. Overview & Creative North Star: "The Technical Atelier"
This design system is built upon the concept of **The Technical Atelier**. We are moving away from the "SaaS-standard" look of heavy borders and rigid grids. Instead, we embrace a high-end, editorial aesthetic that balances the cold precision of high-tech engineering with the bespoke, welcoming touch of a boutique agency.

**The Creative North Star** is defined by:
- **Intentional Asymmetry:** Utilizing whitespace as a structural element, not just a gap.
- **Tonal Depth:** Replacing 1px lines with subtle shifts in background values to define space.
- **Typographic Authority:** Using extreme scale contrasts (massive display headers vs. precise labels) to guide the eye.

## 2. Colors: Depth over Definition
Our palette is split between a "Fresh Tech" light mode and the "Sonic Forge" dark mode. The core principle here is **Atmospheric Containment**.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. To create boundaries, use **Background Color Shifts**. 
*   Place a `surface-container-low` section against a `surface` background. 
*   Use `surface-container-highest` for small callouts to draw the eye without boxing it in.

### Surface Hierarchy & Nesting
Treat the interface as a physical workspace of stacked materials. 
*   **Base Layer:** `surface` (#0b1326)
*   **Primary Work Area:** `surface-container` (#171f33)
*   **Floating Elements:** `surface-container-high` (#222a3d) or `highest` (#2d3449)

### The "Glass & Gradient" Rule
To inject "soul" into the technical frame:
*   **Glassmorphism:** For overlays (modals, floating navs), use `surface` with 70% opacity and a `20px` backdrop-blur. 
*   **Signature Gradients:** Main CTAs should not be flat. Use a linear gradient from `primary` (#89ceff) to `primary_container` (#0ea5e9) at a 135° angle.

## 3. Typography: The Space-Manrope Dialogue
We employ a dual-font strategy to balance technical rigor with human readability.

*   **Display & Headlines (Space Grotesk):** This is our "Technical" voice. The monospaced-leaning terminals of Space Grotesk provide the high-tech feel. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero moments to create an editorial, "poster" feel.
*   **Body & Titles (Manrope):** This is our "Welcoming" voice. Manrope’s geometric but warm curves ensure long-form readability and a premium agency feel.
*   **Labels (Space Grotesk):** All-caps `label-sm` (0.6875rem) with increased tracking (+0.05em) should be used for metadata to mimic engineering schematics.

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to represent "height"; we use light and opacity.

### The Layering Principle
Depth is achieved by "stacking" container tiers. An inner card (`surface-container-lowest`) sitting inside a `surface-container-low` section creates a natural "recessed" look that feels integrated into the architecture of the page.

### Ambient Shadows
If a floating effect is mandatory (e.g., a dropdown):
*   **Color:** Use a tinted shadow (Primary-Dark at 8% opacity).
*   **Blur:** Minimum 32px blur, 16px Y-offset. Shadows should feel like a soft glow, not a dark smudge.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**: 
*   Token: `outline-variant` (#3e4850)
*   Opacity: **10% to 20% max.** It should be felt, not seen.

## 5. Components: Precision Primitives

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `DEFAULT` (8px) roundness. No border.
*   **Secondary:** Ghost style. `outline` token at 20% opacity. Text in `primary_fixed`.
*   **Hover State:** Increase the `surface_bright` overlay by 8%—never use a generic "black" overlay.

### Cards & Lists
*   **Strict Rule:** No dividers. Use `2rem` of vertical whitespace (Spacing Scale) to separate list items.
*   **Hover Interaction:** Transition the background from `surface-container` to `surface-container-high` with a 300ms ease-in-out curve.

### Input Fields
*   **Styling:** Use `surface-container-lowest` as the fill. 
*   **Active State:** A 2px bottom-border using the `tertiary` (#ffb95f) token provides a sophisticated "boutique" accent compared to a full-box glow.

### Signature Component: The "Forge Indicator"
*   A custom progress or status chip using `secondary` (#4edea3) with a subtle outer glow (bloom) of the same color to represent "Active Forging" or "Live" status.

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace extreme white space. If it feels like "too much," it’s likely just right for a boutique agency feel.
*   **Do** use asymmetrical layouts (e.g., a 2-column grid where one column is 60% and the other is 30% with a 10% gap).
*   **Do** use `tertiary` (Amber) for high-value micro-interactions or "Result" highlights.

### Don’t:
*   **Don’t** use 100% opaque borders. They flatten the design and make it look like a template.
*   **Don’t** use generic Grey #000000 for shadows. Always tint your neutrals with the `surface` color.
*   **Don’t** crowd the typography. Space Grotesk needs "oxygen" to feel technical rather than cluttered.