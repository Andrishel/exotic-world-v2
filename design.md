# Exotic World — Design System

## Concept
Centro de exhibición e interacción con animales exóticos en Piura. 100% ecológico, educativo, familiar. Cero vibra de discoteca/vida nocturna.

## Color Palette
- Primary (jungle green): `#15803d` (green-700) — nav, headings, primary buttons
- Primary dark: `#1e3f20` — hero overlays, footer bg
- Background: `#fdfcfa` (warm off-white)
- Surface alt: `#f5f5f4` (stone-100) — section backgrounds
- Accent (gold/yellow): `#eab308` — CTAs, badges, highlights
- Text: `#1c1917` (stone-900) body, `#57534e` (stone-600) secondary
- Category tag colors: Mamíferos `#15803d`, Reptiles `#b45309` (amber-700), Arácnidos `#7c2d12` (dark rust)

## Typography
- Display/Headings: Poppins (700/600) — friendly, rounded, confident
- Body: Poppins (400/500)
- Load via Google Fonts in index.html

## Layout & Components
- Mobile-first, generous padding (py-16 md:py-24 sections)
- Rounded-2xl cards with soft shadows, organic leaf/wave dividers between sections
- Hero: full-bleed image with dark green gradient overlay, large white/gold headline, open-status badge
- Navbar: sticky, white bg, green logo mark (leaf icon), active link underline in gold, "Planear Visita" gold button
- Footer: dark jungle green bg, white text, contact info + hours + socials
- WhatsApp floating button: fixed bottom-6 right-6, green circle, WhatsApp icon, pulse animation, z-50 on all routes
- AnimalCard: image top (aspect-square/4:3), category badge, nombre + nombreCientifico italic, short descripcion, "Ver más" link
- ExperienceCard: icon/image, title, description, target audience tag

## Motion
- Fade/slide-up on scroll for section reveals (simple CSS/Framer-motion-lite via Tailwind transitions)
- Hover scale on cards (hover:scale-[1.02] transition)

## Icons
lucide-react for UI icons (MapPin, Clock, Phone, Filter, Leaf, etc.)
