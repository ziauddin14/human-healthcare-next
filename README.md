# Human Healthcare — Next.js Redesign (Technical Test)

## 📌 Overview

This project is a redesign of [human-healthcare.com](https://human-healthcare.com/) using **Next.js 14**, built as part of a technical assessment.  
The goal is to implement a scalable, maintainable, and visually modern web app with best practices in architecture, state management, and UI/UX.

## 🧠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Form Handling:** React Hook Form + Zod
- **Deployment (optional):** Vercel

## 🏗️ Folder Structure

```
human-healthcare-next/
├── app/
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout with providers
│   ├── globals.css               # Global styles
│   ├── about/                    # About page route
│   │   └── page.tsx
│   ├── services/                 # Services page route
│   │   └── page.tsx
│   ├── contact/                  # Contact page route
│   │   └── page.tsx
│   ├── api/                      # API routes
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   └── components/
│       ├── ThemeToggle.tsx       # Dark mode toggle
│       └── ui/                    # Reusable UI components
│           ├── Button.tsx
│           └── Card.tsx
├── components/
│   └── layout/
│       ├── Header.tsx            # Navigation header
│       └── Footer.tsx             # Site footer
├── features/                      # Feature-based modules
│   ├── contact/
│   │   ├── contactSlice.ts      # Redux slice for contact
│   │   └── contactTypes.ts      # TypeScript types
│   └── ui/
│       ├── uiSlice.ts            # UI state management
│       └── uiTypes.ts            # UI types
├── store/                         # Redux store configuration
│   ├── store.ts                  # Main store setup
│   ├── hooks.ts                  # Typed Redux hooks
│   └── index.ts                  # Store exports
├── lib/                           # Utility functions
│   ├── utils.ts                  # Helper functions
│   ├── hooks.ts                  # Custom hooks
│   └── redux-provider.tsx        # Redux Provider wrapper
└── public/                        # Static assets
```

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone <repo-url>
cd human-healthcare-next

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm start
```

## 🌐 Features Implemented

✅ **Global Header & Footer** - Navigation with theme toggle and responsive mobile menu

✅ **Responsive Design** - Fully responsive layout with accessibility support

✅ **Pages** - Home, About, Services, Contact with modern UI

✅ **Redux State Management** - Feature-based architecture with typed hooks

✅ **Contact Form** - Fully validated form with React Hook Form + Zod, integrated with API

✅ **Dark/Light Mode** - Theme switching with localStorage persistence

✅ **Clean Architecture** - Scalable folder structure following Next.js 14 best practices

## 📋 Sitemap Audit

| Existing URL | New Route | Status | Notes |
|-------------|-----------|--------|-------|
| `/` | `/` | ✅ Done | Hero section, services overview, CTA redesigned |
| `/about` | `/about` | ✅ Done | Company mission, stats, key features |
| `/services` | `/services` | ✅ Done | Comprehensive service listings with benefits |
| `/contact` | `/contact` | ✅ Done | Form with validation + Redux integration |

## 🧩 Assumptions

- All textual content was derived from the live site [human-healthcare.com](https://human-healthcare.com/) for content parity
- Placeholder text was used where content was unclear
- No proprietary backend logic was replicated (form uses mock API)
- API endpoint simulates 1-second delay for realistic UX
- Contact form submission is for demonstration purposes

## 🚀 Deployment (Optional)

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Click "Deploy"

Your site will be live with a `.vercel.app` domain.

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📝 Development Guidelines

- Use TypeScript for all new files
- Follow the feature-based architecture for state management
- Use Tailwind CSS for styling
- Keep components in `app/components/` or `components/layout/`
- Add new Redux slices in `features/` with co-located types
- Use typed hooks from `@/store` for Redux

## 🔧 Key Files

- `app/layout.tsx` - Root layout with Redux Provider
- `store/store.ts` - Redux store configuration
- `features/contact/contactSlice.ts` - Contact form state management
- `app/contact/page.tsx` - Contact form with validation
- `app/api/contact/route.ts` - Mock API endpoint
- `tailwind.config.js` - Tailwind CSS configuration

## 🧪 Testing

Run linting:

```bash
npm run lint
```

## ✍️ Author

Built as part of Next.js Developer technical assessment.

---

Built with ❤️ using Next.js 14+
