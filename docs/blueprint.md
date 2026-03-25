# Blast Distribution 2.0 — Experience Blueprint

## 1. Vision & Tone
- Premium European wholesale skateboard distributor vibe: dark/clean industrial palette, neon highlights, gritty textures.
- Mix of utility and excitement: dopamine scrolls, hover animations, sticky filters, magnetic CTAs.
- Strictly original visuals and copy; the “Blast” reference is only for positioning.

## 2. Sitemap & IA
1. **Homepage** — Hero, featured categories, featured brands, new arrivals, live stock ticker, setup calculator teaser, wholesale benefits, editorial banners, retailer CTA.
2. **Catalog**
   - Decks
   - Trucks
   - Wheels
   - Bearings
   - Completes
   - Longboards / Cruisers
   - Hardware
   - Bushings
   - Grip Tape
   - Accessories
   - Apparel / Protection
3. **Brands** — Grid/list + filters, brand stories, “view all SKUs”.
4. **Product Listing Pages** — Sticky filters, search, compare, calculator shortcut, stock indicators.
5. **Product Detail Pages** — Full spec, compatibility, live stock, calculator output, add-to-quote/cart, cross-sells.
6. **Setup Calculator** — Dedicated page + embedded module.
7. **Wholesale Info** — Orders, payments, shipping, credit terms, brand assets.
8. **Request Access / Login** — Retailer gate, approvals.
9. **Support** — Contact, reps, help center.
10. **Account Area (placeholder)** — Dashboard, orders, downloads.

## 3. Component System
- **Hero block** (background texture, layered board renders, CTA pair).
- **Category tiles** (hover lift, gradient overlay, stock count chip).
- **Brand cards** (logo + story + “view catalog” button).
- **Product card**: thumbnail, size badges, spec stack (width, wheel size, duro), stock pill (In stock / Low / Backorder / Out), quick actions (view, compare, quote, calculator shortcut).
- **Filter drawer**: slide-out + sticky sidebar (brand, deck width, truck width, wheel size, duro, profile, riding style, color, stock, compatibility match score).
- **Stock ticker**: marquee style with major SKUs + availability.
- **Calculator stepper**: pill buttons with progress, inline compatibility notes.
- **CTA variants**: primary gradient pill, ghost outline, “magnetic” hover effect.

## 4. Demo Catalog Data Model (JSON)
```json
{
  "sku": "OPR-VX-825-2026",
  "category": "Decks",
  "brand": "Opera VX",
  "title": "VX Team Spectrum 8.25",
  "specs": {
    "width": 8.25,
    "length": 32.1,
    "wheelbase": 14.25,
    "concave": "Medium",
    "construction": "VX"
  },
  "styles": ["Street", "All-around"],
  "compatibility": {
    "trucks": "139-144mm",
    "wheels": "52-55mm",
    "bushings": "90-92a"
  },
  "stock": {
    "status": "low",
    "qty": 42,
    "eta": null
  },
  "price": {
    "wholesale": 46.00,
    "msrp": 89.00
  }
}
```
Repeat for all categories with realistic specs (truck hanger widths, wheel diameters/duros, bearings tiers, apparel sizes, etc.).

## 5. Smart Calculator Logic
1. **Inputs**: Deck width or shoe size, riding style, truck profile (low/mid/hi), wheel diameter range, wheel hardness, optional bushings/hardware.
2. **Flow**: deck width → recommended truck widths → allowed wheel sizes and duros → stock lookup → output.
3. **Outputs**:
   - Primary recommendation (“Best match · in stock”).
   - Alternative option (“Low stock” or “Backorder, ETA date”).
   - Compatibility warnings (e.g., “52mm wheel may bite with 8.75 deck + low trucks — add 1/8" risers”).
   - Upsells: premium bearings, protection kits, apparel bundles.
4. **Data hooks**: use catalog JSON for availability and compatibility rules. Provide conflict resolution (auto-swap trucks or suggest risers).

## 6. Homepage Layout (wireframe notes)
1. **Hero**: tagline, pitch, CTA pair, inline calculator teaser.
2. **Stock ticker**: horizontal scroll of top SKUs + status badges.
3. **Featured categories**: 3x4 grid, each with hover video/gif.
4. **Brands spotlight**: slider of top brands with story chips.
5. **New arrivals**: horizontal cards with “Add to quote”.
6. **Setup calculator teaser**: mini UI preview with “Launch tool” button.
7. **Wholesale benefits**: icons (Same-day fulfillment, EU warehouse, Dedicated reps, Drop-ship network).
8. **Editorial banners**: e.g., “VX Labs” + “Park Essentials”.
9. **Retailer CTA**: Request access, login, contact reps.

## 7. Implementation Approach
- **Frontend**: Next.js 14 + App Router, Tailwind or custom tokens, Framer Motion for micro-interactions, Zustand for calculator state.
- **Data**: Headless CMS or static JSON (demo). Use static props for catalog pages, dynamic API route for stock ticker.
- **Calculator**: local JSON matrix + compatibility functions, future-ready for backend API.
- **Pages**: statically generate brands/categories, fallback for PDPs.
- **Deployment**: Vercel (main marketing) + optional B2B portal behind Auth0/supabase if needed.
- **Next steps**: build shared layout, component library, sample catalog dataset, then wire calculator + interactive cards.
