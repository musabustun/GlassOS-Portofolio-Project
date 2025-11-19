<div align="center">
  <img width="1200" height="475" alt="GlassOS Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  <h1>GlassOS • Portfolio Operating System</h1>
  <p>A macOS-inspired desktop made with React, Framer Motion, Tailwind and Gemini AI.</p>
</div>

---

## Table of Contents
- [Overview](#overview)
- [Feature Highlights](#feature-highlights)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Built-in Apps](#built-in-apps)
- [Architecture Notes](#architecture-notes)
- [Roadmap Ideas](#roadmap-ideas)
- [License](#license)

## Overview
GlassOS is a playful portfolio that behaves like a desktop operating system. It ships an animated dock, draggable/resizable windows, a Finder-style file explorer, a Gemini-powered assistant, and a native-feeling mobile layout that recreates an iOS home screen. The experience boots instantly via Vite and runs entirely on the client except for calls to the Gemini API.

## Feature Highlights
- **Desktop-grade UX:** Custom menu bar, translucent wallpaper, live clock, wifi/battery indicators, and dock magnification mimicking macOS Sonoma.
- **Window Manager:** Multiple apps can stay open simultaneously with drag, resize, minimize, z-index focus management, and persistence per session.
- **Responsive by Design:** On narrow screens a dedicated `MobileLayout` renders app icons, a faux Dynamic Island, and full-screen modals for apps.
- **AI Assistant:** `Gemini AI` window connects to Google’s `gemini-2.5-flash` model via `@google/genai`, injecting resume context for tailored answers.
- **Portfolio Apps:** Finder shows a mock filesystem, Resume displays structured data from `constants.tsx`, Contact includes a fake send flow, About mirrors macOS “About This Mac”.
- **Modern Animations:** Framer Motion drives dock magnification, window transitions, and mobile sheet animations for a tactile feel.

## Tech Stack
- **Framework:** React 19 + TypeScript, Vite 6
- **Styling:** Tailwind (via CDN) with handcrafted glassmorphism utilities
- **Icons:** `lucide-react`
- **Animation:** `framer-motion`
- **AI Integration:** `@google/genai` (Gemini 2.5 Flash)

## Getting Started
> Requires Node.js 18+ (recommended LTS).

```bash
git clone https://github.com/your-username/GlassOS-Portfolio.git
cd GlassOS-Portfolio
npm install
```

Create `.env.local` (or export the variable in your shell):
```
GEMINI_API_KEY=your-google-genai-key
```

Run in development mode with hot reload:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

## Configuration
- **API Key:** `services/geminiService.ts` reads `process.env.API_KEY`. For Vite, ensure the env var is prefixed (`VITE_API_KEY`) or load via `.env.local` and reference it accordingly.
- **Wallpapers:** Update `WALLPAPER_URL` and `MOBILE_WALLPAPER_URL` in `constants.tsx`.
- **App Registry:** `App.tsx` defines the `APPS` array (title, icon, size, gradient, component). Add new apps here for instant desktop + dock integration.
- **Resume & Projects:** Edit `RESUME_DATA`, `PROJECTS`, and `FILE_SYSTEM` inside `constants.tsx` to personalize content.

## Project Structure
```
GlassOS-Portofolio-Project-main
├── App.tsx                 # Desktop shell & window manager
├── components/
│   ├── MenuBar.tsx         # macOS-style top bar
│   ├── Taskbar.tsx         # Animated dock (Framer Motion)
│   ├── Window.tsx          # Draggable/resizable wrapper
│   ├── MobileLayout.tsx    # iOS-inspired layout
│   └── apps/               # Individual “applications”
│       ├── About.tsx
│       ├── Assistant.tsx
│       ├── Contact.tsx
│       ├── Finder.tsx
│       └── Resume.tsx
├── services/geminiService.ts
├── constants.tsx           # Data models & mock filesystem
├── types.ts                # Shared enums/interfaces
├── index.tsx / index.html
└── vite.config.ts / tsconfig.json
```

## Built-in Apps
- **Finder:** Navigates a mock filesystem (`FILE_SYSTEM`), showcasing nested folders and files with icons.
- **Resume:** Pulls from `RESUME_DATA` to render experience, skills, CTAs, and social buttons.
- **Contact:** Stylized form with optimistic “Message Sent” state.
- **Gemini AI:** Chat UI streaming responses from Google’s Gemini model, seeded with resume context for relevant answers.
- **About GlassOS:** macOS “About This Mac” parody listing pseudo hardware specs.
- **Projects, Terminal, Settings:** Currently placeholders rendered via `PlaceholderApp`, ready for future expansions.

## Architecture Notes
- **Window State:** `App.tsx` maintains `WindowState[]` tracking position, size, minimization, and `zIndex`. Focusing increments `highestZ` to mimic real overlapping windows.
- **Component Injection:** Each app registers a `component` (React FC) inside `APPS`; the `Window` component renders it dynamically, giving shared chrome with per-app content.
- **Animations:** `framer-motion` powers dock magnification (`Taskbar`), draggable windows (`Window`), and mobile sheet transitions (`MobileLayout`).
- **Assistant Pipeline:** `generateAssistantResponse` wraps `GoogleGenAI`. Context includes resume data so answers stay on-brand.
- **Responsive Split:** `isMobile` flag (window width < 768) toggles the entire UI between desktop shell and mobile OS layout, not just CSS tweaks.

## Roadmap Ideas
- Persistent state (localStorage) to remember open windows and positions between sessions.
- Real project links and content served from a CMS or markdown.
- File preview component inside Finder plus drag-and-drop.
- Replace placeholder apps (Projects, Terminal, Settings) with fully featured modules.
- Hook contact form to a serverless endpoint (Resend, Formspree, etc.).

## License
This portfolio is provided for inspiration and personal use. If you fork it, please attribute Musab Yusuf Üstün.
