# Human Healthcare - Next.js Project

A modern, scalable healthcare platform built with Next.js 14+, TypeScript, Tailwind CSS, and Redux Toolkit.

## 🚀 Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety throughout
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management with RTK Query support
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation

## 📁 Project Structure

```
human-healthcare-next/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/                   # About route
│   ├── services/                # Services route
│   ├── contact/                 # Contact route
│   └── components/              # App components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── ThemeToggle.tsx
│       └── ui/                  # Reusable UI components
├── features/                     # Feature-based modules
│   ├── contact/                 # Contact feature
│   └── ui/                       # UI feature
├── store/                        # Redux store
├── lib/                          # Utilities
├── public/                       # Static assets
└── styles/                       # Additional styles
```

For detailed structure documentation, see [STRUCTURE.md](./STRUCTURE.md).

## 🛠️ Setup

Install dependencies:

```bash
npm install
```

## 🏃 How to Run

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm start
```

## 📄 Pages

- **Home** (`/`) - Landing page
- **About** (`/about`) - About page
- **Services** (`/services`) - Services page
- **Contact** (`/contact`) - Contact page with form

## 🎨 Features

- ✅ Next.js 14 App Router
- ✅ TypeScript strict mode
- ✅ Tailwind CSS with dark mode
- ✅ Redux Toolkit with feature-based architecture
- ✅ Custom typed hooks for Redux
- ✅ Responsive design
- ✅ SEO-friendly structure
- ✅ Scalable folder architecture

## 🚢 Deployment

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
- Keep components in `app/components/` or `app/components/ui/`
- Add new Redux slices in `features/` with co-located types
- Use typed hooks from `lib/hooks.ts` for Redux

## 🔧 Key Files

- `app/layout.tsx` - Root layout with Redux Provider
- `store/store.ts` - Redux store configuration
- `lib/redux-provider.tsx` - Redux Provider wrapper
- `lib/hooks.ts` - Typed Redux hooks
- `tailwind.config.js` - Tailwind configuration

## 📚 Additional Documentation

- [STRUCTURE.md](./STRUCTURE.md) - Detailed folder structure guide
- [TODO](./TODO.md) - Development checklist

## 🧪 Testing

Run linting:

```bash
npm run lint
```

---

Built with ❤️ using Next.js 14+
