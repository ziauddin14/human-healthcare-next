# 🏥 Human Healthcare

## 🌓 Theme Notice
This project was originally designed to support both Light and Dark modes.
Due to instability in theme synchronization across pages,
the theme toggle has been temporarily disabled.
The site is now locked to Dark Mode for a consistent and polished UI.

✅ Fully responsive
✅ Optimized for mobile and desktop
✅ All animations, skeletons, and SEO settings remain unaffected

_Toggle can be re-enabled in a future iteration if required._

A modern, responsive healthcare web platform built with Next.js 16, featuring dark/light theming, smooth animations, and comprehensive SEO optimization.

## ✅ Project Overview

- **Project Name**: Human Healthcare
- **Built with**: Next.js 16, React 19, Tailwind CSS, TypeScript, Redux Toolkit, Framer Motion, Shadcn UI
- **Purpose**: Healthcare web platform demonstrating responsive UI, dark/light theming, SEO optimization, and page transitions.

## 🚀 Features

- 🌗 **Dark Mode (locked)** — consistent production styling
- 📱 **Fully Responsive** across devices (mobile, tablet, desktop)
- ⚡ **Framer Motion Animations** for smooth UX
- 🧩 **Reusable Components** (Cards, Navbar, Footer, Skeleton Loaders)
- 🧭 **SEO Optimized** meta tags on each page
- 🛠️ **TypeScript + Redux Toolkit** integrated for scalability
- 🔄 **Skeleton Components** (Shadcn) for smooth loading placeholders
- 📊 **Contact Form** with validation and Redux state management
- 🎨 **Consistent Design System** with Tailwind CSS

## 🧾 Pages Overview

| Page | Path | Purpose |
|------|------|----------|
| Home | `/` | Overview of platform & CTA section |
| About | `/about` | Mission, vision, team details |
| Services | `/services` | List of healthcare services offered |
| Pricing | `/pricing` | Transparent pricing plans |
| Service Agreement | `/service-agreement` | Terms & service conditions |
| Contact | `/contact` | Contact form + business info |

## 🗂️ Folder Structure

```
/app
├── layout.tsx
├── page.tsx
├── globals.css
├── not-found.tsx
├── providers.tsx
├── theme-provider.tsx
├── home-client.tsx
├── about/
│   ├── page.tsx
│   └── about-client.tsx
├── services/
│   ├── page.tsx
│   └── services-client.tsx
├── pricing/
│   ├── page.tsx
│   └── pricing-client.tsx
├── service-agreement/
│   ├── page.tsx
│   └── service-agreement-client.tsx
├── contact/
│   ├── page.tsx
│   └── contact-client.tsx
├── api/
│   └── contact/
│       └── route.ts
└── components/
    ├── ui/
    │   └── skeleton.tsx
    └── layout/
        ├── Header.tsx
        └── Footer.tsx

/components
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
└── ThemeToggle.tsx

/lib
└── utils.ts

/store
├── store.ts
└── features/
    ├── ui/
    │   └── uiSlice.ts
    └── contact/
        └── contactSlice.ts
```

## 🧩 Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** with TypeScript
- **TailwindCSS 4.1** for styling
- **Framer Motion** for animations
- **Redux Toolkit** for state management
- **Shadcn/UI** Skeleton Components
- **Zod + React Hook Form** for validation
- **clsx + tailwind-merge** for utility functions

## 🧱 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd human-healthcare-next

# Install dependencies
npm install

# Start development server
npm run dev

# Visit the application
# http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Run TypeScript compiler
```

## 🧑‍💻 Development Notes

### Responsive Design
- Responsive typography handled with Tailwind responsive classes
- Mobile-first approach with breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Consistent spacing and padding across all screen sizes

### Theme System
- Global dark/light mode using Tailwind's `dark:` variant
- Theme state managed with Redux Toolkit
- Persistent theme selection in localStorage
- Smooth transitions between themes

### Component Architecture
- Server components for SEO metadata
- Client components for interactivity
- Reusable UI components with consistent styling
- Proper separation of concerns

### Animations
- Framer Motion for smooth page transitions
- Skeleton loaders for better loading experience
- Hover effects and micro-interactions
- Non-blocking animations for performance

## 📦 Deployment Notes

### Build Command
```bash
npm run build
```

### Hosting Recommendations
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://human-healthcare.com
NEXT_PUBLIC_CONTACT_EMAIL=service@human-healthcare.com
NEXT_PUBLIC_PHONE=+923192060174
```

### Performance Optimizations
- Static generation for SEO pages
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS JIT compilation

## 🎨 Design System

### Colors
- **Primary**: Blue scale (50-950)
- **Background**: White/Gray scale
- **Text**: Slate scale for readability
- **Accent**: Blue for CTAs and highlights

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive from mobile to desktop
- **Weights**: Regular, medium, semibold, bold

### Spacing
- **Container**: max-w-7xl with responsive padding
- **Sections**: py-12 md:py-20
- **Cards**: p-6 md:p-8 lg:p-10

## 🔧 Configuration Files

### Tailwind CSS
- Custom color palette
- Responsive breakpoints
- Dark mode configuration
- Custom animations

### TypeScript
- Strict mode enabled
- Path aliases configured
- Type definitions for Redux

### Next.js
- App Router configuration
- Image optimization
- Font optimization
- Metadata API

## 📝 Commit History Highlights

| Commit | Description |
|--------|-------------|
| 🧱 init project | Next.js setup with Tailwind & TypeScript |
| 🎨 UI base layout | Navbar, Footer, Home page setup |
| 🌗 Theme toggle fix | Global dark/light mode implementation |
| 📱 Responsive polish | Font scaling, spacing adjustments |
| ⚡ Animations added | Framer Motion transitions |
| 🧩 Skeleton loading | Added across cards & sections |
| ✨ Pricing + Agreement | New pages with SEO metadata |
| 🧾 Docs ready | Added README + Sitemap Audit |

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Open browser**: Navigate to `http://localhost:3000`
5. **Test features**: Try theme toggle, responsive design, and page navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, contact:
- **Email**: service@human-healthcare.com
- **Phone**: +92 319-2060174
- **Website**: https://human-healthcare.com

---

**Built with ❤️ for better healthcare accessibility**