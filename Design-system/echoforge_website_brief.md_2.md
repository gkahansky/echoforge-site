# EchoForge — Website Design Brief

## What is EchoForge?

EchoForge is an AI-powered content and marketing service for small businesses and independent creators. It turns raw audio and static websites into revenue-generating assets — automatically, within 24 hours.

There are two independent services under the same brand:

---

## Service 1 — Podcast Content Studio

**What it does:** A customer uploads an audio or video recording of a podcast episode (up to one hour). Within 24 hours, they receive a complete, publication-ready content package — no editing, no copy-writing, no back-and-forth required.

**What the customer receives:**
- Timestamped episode outline
- Guest bio (if applicable)
- Full show notes (ready to paste into their podcast host)
- Social media captions (LinkedIn, Instagram, X/Twitter)
- Newsletter excerpt
- SEO metadata (title, description, keywords)

**Who buys this:** Independent podcast hosts, small agencies managing podcast clients, business coaches with a show. They are time-poor and consistent publishing is their biggest pain point.

**Pricing tiers:**

| Tier | Price | Includes |
|---|---|---|
| Starter | $29 | Show notes + Timestamps |
| Standard | $49 | Everything in Starter + Social captions + Newsletter |
| Premium | $79 | Everything in Standard + Full transcript + SEO metadata + Guest bio |

**Free sample offer:** The visitor can upload up to 10 minutes of audio (any episode or clip), enter their email, and receive a real sample output — watermarked — in 5–10 minutes. No credit card. This is the primary lead generation mechanism for this service.

---

## Service 2 — Marketing Audit

**What it does:** A customer provides their website URL. EchoForge runs a multi-dimension AI analysis and delivers a scored, prioritised audit report as a PDF. The report tells them exactly what is broken, why it matters, and what to fix first.

**The six dimensions scored:**
1. Content & Messaging
2. SEO & Discoverability
3. Conversion & UX
4. Competitor Positioning
5. Brand Trust & Credibility
6. Growth Strategy

**What the customer receives:**
- Overall score out of 100 with letter grade
- Per-dimension score breakdown
- Full list of findings, each with severity (Critical / High / Medium / Low)
- Prioritised action plan across three timeframes: quick wins, medium-term, strategic
- Competitor benchmarking
- Before/after copy rewrite examples (Premium tier)

**Who buys this:** Small business owners, e-commerce brands, freelancers, SaaS founders who suspect their website is underperforming but don't know where to start.

**Pricing tiers:**

| Tier | Price | Includes |
|---|---|---|
| Snapshot | $49 | Score breakdown + Top 10 findings + Quick wins |
| Full Audit | $99 | Everything + All findings + Full action plan + Competitor benchmarking |
| Premium | $149 | Everything + Copy rewrites + 30-day roadmap |

**Free sample offer:** The visitor enters their website URL and email. EchoForge runs a real Full Audit on their site and sends a censored sample PDF — overall score and dimension breakdown shown in full, but most findings and the action plan redacted. Delivered in 10–20 minutes. This is the primary lead generation mechanism for this service.

---

## Pages Required

### 1. Homepage

Must communicate within 5 seconds what EchoForge does and who it is for. Needs to convert a cold visitor into either a free sample request or a paying order.

**Sections needed:**
- Hero: single clear value proposition. The two services should be immediately obvious.
- How it works: simple 3-step flow for each service (upload/submit → AI processes → receive in 24h)
- Pricing: both services, all tiers, clear CTAs per tier
- Social proof / trust section (placeholder — testimonials and case studies to be added later)
- FAQ: at minimum covering turnaround time, file format support, refund policy, what "AI-generated" means, how the free sample works

### 2. Try Podcast Sample page (`/try-podcast`)

A standalone page focused entirely on converting the visitor into a free sample request.

**Form fields:**
- Audio/video file upload (drag-and-drop; accepted formats: mp3, mp4, m4a, wav, webm; max 200 MB)
- Email address
- Show name (optional)
- Episode title (optional)
- Host name (optional)

**Behaviour:**
- On submit: POST multipart form to `https://api.planBadmin.com/api/sample/podcast`
- Show upload progress while file uploads
- On success: show confirmation message — "Check your inbox in 5–10 minutes"
- On error: show specific error inline (file too large, unsupported format, already submitted today)

**Key message to reinforce on this page:**
- No credit card
- Real output, not a demo
- Takes 5–10 minutes
- Sample is watermarked — full package available for purchase

### 3. Try Audit Sample page (`/try-audit`)

A standalone page focused entirely on converting the visitor into a free audit request.

**Form fields:**
- Website URL (text input)
- Email address

**Behaviour:**
- On submit: POST form to `https://api.planBadmin.com/api/sample/audit`
- Show loading state (audit takes 10–20 minutes to process in background, so just confirm submission)
- On success: show confirmation — "Your audit is running. Check your inbox in 10–20 minutes."
- On error: show inline error

**Key message to reinforce on this page:**
- Real analysis on their actual site, not a generic checklist
- No credit card
- Censored sample — shows enough to prove value, unlocks fully when they purchase

---

## User Flows

### Flow A — Free sample → Purchase (primary conversion path)

1. Visitor lands on homepage
2. Clicks "Try free sample" for one of the two services
3. Submits form on the try page
4. Receives sample in inbox
5. Clicks a link in the email → returns to site
6. Purchases the full product

The email CTA link destination (order page or contact form) to be confirmed — for now, treat it as a "Contact us" flow or a simple order form.

### Flow B — Direct purchase

1. Visitor lands on homepage
2. Sees pricing, selects a tier
3. Clicks "Order now" → lands on an order form or is redirected to Fiverr listing (external link, placeholder for now)

---

## Functional Requirements

- All API calls go to `https://api.planBadmin.com`
- The two sample endpoints are public (no auth): `POST /api/sample/podcast` and `POST /api/sample/audit`
- Forms must work without JavaScript-heavy frameworks — vanilla JS is fine
- Both sample forms must handle file upload errors gracefully (size, format, rate limit)
- The site is static HTML deployed on Cloudflare Pages — no server-side rendering
- Mobile-first: both services must be fully usable on a phone

---

## Brand Context

- Brand name: **EchoForge**
- Domain: **echoforge.biz**
- Tagline direction: something about turning raw content into results, or content that works while you sleep — but Stitch should decide the final copy direction
- Logo file available: `Logo.svg`
- Tone: confident, professional, direct — not corporate, not playful. Think boutique agency that happens to use AI, not a consumer SaaS product.

---

## What is NOT needed (out of scope for this design)

- Blog or content section
- User accounts or login
- Payment processing (orders go through Fiverr for now)
- Admin dashboard (separate app at planBadmin.com)
- Animations or complex interactions beyond standard transitions
