# 📝 Note App

> A modern, intelligent note-taking application built with React 19 and TypeScript, featuring real-time search, tag management, and local storage persistence.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?logo=vite)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.16-38bdf8?logo=tailwindcss)](https://tailwindcss.com)


---

## 📖 Overview

**Note App** is a feature-rich, client-side note management application that allows users to create, organize, and search through their notes efficiently. Built with modern web technologies, it offers a seamless user experience with form validation, real-time filtering, and responsive design.

### ✨ Key Highlights

- 🎨 **Modern UI/UX** – Built with shadcn/ui components and Tailwind CSS v4
- 🔍 **Smart Search** – Real-time filtering by title and tags
- 🏷️ **Tag Management** – Multi-tag support with creatable select
- 💾 **Local Persistence** – All notes stored in browser's localStorage
- ✅ **Form Validation** – Zod schema validation with React Hook Form
- 📱 **Responsive Design** – Mobile-first approach, works on all devices
- ⚡ **Fast & Lightweight** – Vite-powered build with optimized bundle size
- 🎯 **Type-Safe** – Full TypeScript support throughout the codebase

---

## 🚀 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI library |
| **TypeScript** | 5.9.3 | Type safety and developer experience |
| **Vite** | 7.1.7 | Build tool and dev server |
| **React Router DOM** | 7.9.4 | Client-side routing |

### UI & Styling

| Library | Purpose |
|---------|---------|
| **Tailwind CSS** | 4.1.16 – Utility-first CSS framework |
| **shadcn/ui** | Pre-built accessible components |
| **Radix UI** | Unstyled, accessible UI primitives |
| **class-variance-authority** | Dynamic class composition |
| **Lucide React** | Beautiful icons |
| **React Icons** | Additional icon library |

### Form Management & Validation

- **React Hook Form** (v7.65.0) – Performant form handling
- **Zod** (v4.1.12) – Schema validation
- **@hookform/resolvers** – React Hook Form + Zod integration

### Additional Libraries

- **React Select** (v5.10.2) – Creatable multi-select for tags
- **Sonner** (v2.0.7) – Toast notifications
- **clsx** & **tailwind-merge** – Conditional className utilities

### Development Tools

- **ESLint** (v9.36.0) – Code linting
- **TypeScript ESLint** – TypeScript-specific linting rules
- **Vite Plugin React** – Fast refresh and optimizations

---

## 🏗️ Architecture

### Project Structure

```
note-app/
├── src/
│   ├── features/              # Feature-based architecture
│   │   └── note/
│   │       ├── components/    # Feature-specific components
│   │       │   ├── NewNoteForm.tsx
│   │       │   ├── NoteCard.tsx
│   │       │   └── SearchInputs.tsx
│   │       ├── pages/         # Page-level components
│   │       │   ├── NewNotePage.tsx
│   │       │   └── NotesListPage.tsx
│   │       ├── schemas/       # Zod validation schemas
│   │       │   └── note.schema.ts
│   │       └── types/         # TypeScript type definitions
│   │           ├── note.type.ts
│   │           └── search-inputs.type.ts
│   ├── shared/                # Shared utilities
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useLocalStorage.ts
│   │   └── utils/             # Utility functions
│   │       └── toast.ts
│   ├── components/            # Global UI components
│   │   └── ui/                # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── field.tsx
│   │       ├── input.tsx
│   │       └── ... (9 more components)
│   ├── lib/                   # Core utilities
│   │   └── utils.ts           # cn() helper
│   ├── App.tsx                # Root component & routing
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles & Tailwind directives
├── public/                    # Static assets
├── components.json            # shadcn/ui configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.js           # ESLint configuration
└── package.json               # Project dependencies & scripts
```

### Design Patterns

- **Feature-Based Architecture** – Code organized by features (notes) for scalability
- **Component Composition** – Reusable UI primitives from shadcn/ui
- **Custom Hooks** – `useLocalStorage` for state persistence
- **Type-Safe Forms** – Zod schemas + TypeScript inference
- **Path Aliases** – `@/` prefix for clean imports
- **Controlled Components** – React Hook Form with controlled inputs
- **Memoization** – `useMemo` for expensive filtering operations

### Data Flow

1. **Note Creation**: User input → Form validation (Zod) → localStorage via `useLocalStorage` hook → Toast notification
2. **Note Display**: localStorage → React state → Filter/search → Memoized filtered notes → Card grid
3. **Search/Filter**: User input (title/tags) → `useMemo` filtering → Real-time UI update

---

## ✨ Features

### 📝 Note Management

- **Create Notes** – Rich form with title, body, and tags
- **View Notes** – Grid layout with responsive columns (1-4 cols based on screen size)
- **Tag System** – Multi-tag support with creatable select dropdown
- **Character Counter** – Real-time body character count (max 1000 chars)
- **Empty State** – Friendly UI when no notes exist

### 🔍 Search & Filter

- **Title Search** – Real-time filtering by note title (case-insensitive)
- **Tag Filter** – Multi-tag filtering with "match any" logic
- **Combined Search** – Search by both title AND tags simultaneously
- **Smart Matching** – Trimmed, lowercase comparison for better UX

### ✅ Form Validation

- **Title Validation**:
  - Required field
  - Minimum 3 characters
  - Maximum 32 characters
- **Body Validation**:
  - Minimum 15 characters
  - Maximum 1000 characters
  - Character counter visualization
- **Tag Validation**:
  - At least 1 tag required
  - Each tag minimum 3 characters
  - Real-time error display with custom styling

### 🎨 UI/UX

- **Responsive Design** – Mobile-first approach (breakpoints: sm, md, lg, 2xl)
- **Toast Notifications** – Success/error feedback via Sonner
- **Form Reset** – Clear button to reset form state
- **Back Navigation** – Easy return to notes list
- **Clear All Notes** – Bulk delete with confirmation
- **Loading States** – Smooth transitions and feedback
- **Accessible** – Built with Radix UI primitives (keyboard navigation, ARIA attributes)

### 💾 Data Persistence

- **localStorage Integration** – All notes persisted locally
- **Auto-Save** – Instant save on note creation
- **Data Recovery** – Notes persist across browser sessions
- **No Backend Required** – Fully client-side application

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v9+) or **yarn** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/note-app.git
cd note-app

# Install dependencies
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized build will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check for code issues:

```bash
npm run lint
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR at `http://localhost:5173` |
| `npm run build` | Build for production (TypeScript check + Vite build) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all TypeScript/TSX files |

---

## 🌍 Environment Variables

This project does **not** require any environment variables. All data is stored locally in the browser's localStorage.

> **Note**: If deploying to production, ensure your hosting provider serves a SPA-friendly configuration (all routes redirect to `index.html`).

---



## 📁 Folder Structure Explained

```
note-app/
├── 📁 public/                          # Static assets
├── 📁 node_modules/                     # Dependencies
├── 📁 src/                             # Source code
│   ├── 📁 features/                    # Feature-based architecture
│   │   └── 📁 note/                    # Note feature module
│   │       ├── 📁 components/            # Feature-specific components
│   │       │   ├── 📄 NewNoteForm.tsx
│   │       │   ├── 📄 NoteCard.tsx
│   │       │   └── 📄 SearchInputs.tsx
│   │       ├── 📁 pages/               # Page-level components
│   │       │   ├── 📄 NewNotePage.tsx
│   │       │   └── 📄 NotesListPage.tsx
│   │       ├── 📁 schemas/             # Zod validation schemas
│   │       │   └── 📄 note.schema.ts
│   │       └── 📁 types/               # TypeScript type definitions
│   │           ├── 📄 note.type.ts
│   │           └── 📄 search-inputs.type.ts
│   ├── 📁 shared/                      # Cross-feature shared code
│   │   ├── 📁 hooks/                   # Custom React hooks
│   │   │   └── 📄 useLocalStorage.ts
│   │   └── 📁 utils/                   # Utility functions
│   │       └── 📄 toast.ts
│   ├── 📁 components/                  # Global UI components
│   │   └── 📁 ui/                      # shadcn/ui components
│   │       ├── 📄 badge.tsx
│   │       ├── 📄 button.tsx
│   │       ├── 📄 card.tsx
│   │       ├── 📄 field.tsx
│   │       ├── 📄 input-group.tsx
│   │       ├── 📄 input.tsx
│   │       ├── 📄 label.tsx
│   │       ├── 📄 separator.tsx
│   │       └── 📄 textarea.tsx
│   ├── 📁 lib/                         # Core library utilities
│   │   └── 📄 utils.ts                 # cn() helper function
│   ├── 📁 assets/                      # Static assets (images, icons)
│   ├── 📄 App.tsx                      # Root component & routing
│   ├── 📄 main.tsx                     # React app entry point
│   └── 📄 index.css                    # Global styles & Tailwind directives
├── 📄 components.json                  # shadcn/ui configuration
├── 📄 eslint.config.js                 # ESLint configuration
├── 📄 index.html                       # HTML entry point
├── 📄 package.json                     # Project dependencies & scripts
├── 📄 package-lock.json               # Dependency lock file
├── 📄 README.md                        # Project documentation
├── 📄 tsconfig.json                    # TypeScript root config
├── 📄 tsconfig.app.json                # TypeScript app config
├── 📄 tsconfig.node.json               # TypeScript node config
└── 📄 vite.config.ts                   # Vite build configuration
```

### Naming Conventions

- **Components**: PascalCase (e.g., `NewNoteForm.tsx`)
- **Types**: kebab-case with suffix (e.g., `note.type.ts`)
- **Schemas**: kebab-case with suffix (e.g., `note.schema.ts`)
- **Hooks**: camelCase with `use` prefix (e.g., `useLocalStorage.ts`)
- **Utils**: camelCase (e.g., `toast.ts`)

---


## 👤 Author

**[Abdelfattah Elnaggar]**

- 💼 LinkedIn: [linkedin.com/in/abdelfattah-a-elnaggar-390413375](My LinkedIn)
- 🐦 Twitter: [@elnaggar_abdo3](Twitter)
- 📧 Email: abdelfattah.ahmed.elnaggar@example.com
- 💻 GitHub: [@abdelfattahelnaggar](https://github.com/abdelfattahelnaggar)


## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) – Beautiful, accessible component library
- [Radix UI](https://www.radix-ui.com) – Unstyled, accessible primitives
- [Tailwind CSS](https://tailwindcss.com) – Utility-first CSS framework
- [React Hook Form](https://react-hook-form.com) – Performant form library
- [Zod](https://zod.dev) – TypeScript-first schema validation
- [Lucide Icons](https://lucide.dev) – Beautiful icon library
- [Sonner](https://sonner.emilkowal.ski) – Opinionated toast component

---

## 📝 Changelog

### [Unreleased]
- Initial project setup
- Note creation and listing functionality
- Search and filter implementation
- localStorage persistence
- Form validation with Zod
- Responsive design

---

<div align="center">

Made with ❤️ and TypeScript

[⬆ Back to top](#-note-app)

</div>

