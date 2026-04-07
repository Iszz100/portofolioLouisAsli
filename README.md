# Elite Engineer Portfolio — Louis Fachri Putra Jatmiko

Premium, futuristic, dark-mode portfolio website built with React + Vite (frontend only).

## 1) UI/UX Concept (Intentional & Premium)

- **Design language:** dark cinematic canvas, subtle glassmorphism, neon cyan/blue/purple accents
- **Vibe:** serious engineer, strategic, high-ownership storytelling
- **Signature element:** `Signature Layer · ENGINEERED FOR CLARITY` in closing section
- **Interaction style:** subtle depth, minimal but meaningful motion, no over-animation

## 2) Folder Structure (Modular & Scalable)

```bash
src/
	components/
		common/
			SectionHeading.jsx
		layout/
			Navbar.jsx
	data/
		domains.js
		experience.js
		profile.js
		projects.js
	hooks/
		useResponsiveMotion.js
	sections/
		HeroSection.jsx
		ManifestoSection.jsx
		CapabilitiesSection.jsx
		ProjectsSection.jsx
		ExperienceSection.jsx
		ClosingSection.jsx
	utils/
		cn.js
		motion.js
	App.jsx
	index.css
```

## 3) Dummy Data System

- All data hardcoded in `src/data/*.js`
- Projects include: `problem`, `solution`, `impact`, `techStack`, `role`, `image`
- Capabilities include strengths + application context (not just skill tags)

## 4) Section-by-Section Layout

1. **Global Layout**
	 - Fixed top navbar, smooth scroll, consistent `container-shell` and spacing scale
2. **Hero (Cinematic)**
	 - Large personal brand heading, rotating subtitle, manifesto snippet, dual CTA, parallax glow layer
3. **Personal Manifesto**
	 - Philosophy-first statement: security, scalability, craftsmanship
4. **Capabilities / Domains**
	 - 4 strategic domains with strengths + real execution context
5. **Projects (Story-Driven)**
	 - Filterable categories + each project shows Problem/Solution/Impact/Role/Tech Stack
6. **Experience / Achievements**
	 - Modern vertical timeline emphasizing growth and engineering evolution
7. **Closing Section**
	 - Strong final statement + elegant CTA + signature personality marker

## 5) Responsive Strategy

- Breakpoints implemented via Tailwind:
	- `≥1280` desktop
	- `1024` laptop
	- `768` tablet
	- `≤767` mobile
- Typography uses `clamp()` custom tokens for smooth scaling
- Mobile behavior:
	- CTA buttons stack vertically
	- Hover-heavy interactions reduced/replaced with tap feedback
	- Motion intensity reduced automatically through `useResponsiveMotion`

## 6) Animation Strategy (Framer Motion)

- Section reveal with staggered fade-in
- Subtle card elevation on hover (`y/scale` micro-lift)
- Hero glow parallax follows pointer (disabled for reduced motion/mobile)
- `prefers-reduced-motion` supported in CSS global guard

## 7) Micro-Interaction Strategy

- Focus ring system for keyboard accessibility (`focus-ring` utility)
- Neon edge + soft shadow for actionable elements
- Filter chips provide immediate state feedback
- Motion is intentional: reinforcing hierarchy, not decorative noise

## 8) Typography & Spacing System

- Hero title: `text-hero` = `clamp(2rem, 7vw, 5.25rem)`
- Section title: `text-section` = `clamp(1.5rem, 2.4vw, 2.6rem)`
- Body text: `text-body` = `clamp(0.95rem, 1.1vw, 1.05rem)`
- Vertical rhythm: `section-padding` token (`py-section`)

## 9) Performance Considerations

- Frontend-only architecture (no backend overhead)
- Local SVG project placeholders (lightweight)
- Lazy-loading project images
- Minimal dependencies and reusable motion presets
- Reduced-motion and mobile animation safeguards

## 10) Elite Polish Checklist

- [x] Non-generic visual identity (not template clone)
- [x] Clear engineering personality and narrative
- [x] Premium dark futuristic theme with depth
- [x] Story-driven project presentation
- [x] Strong responsive adaptation and touch-friendly controls
- [x] Subtle, meaningful motion with mobile-safe behavior
- [x] Modular architecture for easy manual extension

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```
