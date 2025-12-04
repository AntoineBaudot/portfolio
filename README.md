# Product Manager Portfolio

A modern, premium portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4. Features advanced animations, dark mode, and a comprehensive design system.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-ff69b4)

## ✨ Features

### Design & UX
- 🎨 **Premium Design System** - Custom color palette with purple/indigo gradients
- 🌓 **Dark Mode** - Manual toggle with localStorage persistence + system preference detection
- ✨ **Advanced Animations** - Framer Motion with scroll-triggered effects
- 📱 **Fully Responsive** - Mobile-first design with smooth transitions
- 🎭 **Glassmorphism** - Modern glass effects and backdrop blur
- 📊 **Scroll Progress** - Visual reading progress indicator

### Components
- 🧩 **Reusable UI Components** - Button, Card, ThemeToggle
- 🎯 **Layout Components** - Navigation, Footer with social links
- ⚡ **Animated Cards** - Scroll-triggered animations with staggered delays
- 🎪 **Page Transitions** - Smooth navigation with fade effects
- 💫 **Loading States** - Custom 404 and loading pages

### Pages
- 🏠 **Home** - Hero section, featured work, skills showcase
- 👤 **About** - Bio, experience timeline, education
- 💼 **Work** - Project case studies with metrics
- 📧 **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.9.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── work/              # Work/Projects page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── not-found.tsx      # 404 page
│   │   ├── loading.tsx        # Loading state
│   │   └── globals.css        # Global styles & design system
│   └── components/
│       ├── layout/            # Layout components
│       │   ├── Navigation.tsx # Header with theme toggle
│       │   └── Footer.tsx     # Footer with social links
│       └── ui/                # Reusable UI components
│           ├── Button.tsx     # Button variants
│           ├── Card.tsx       # Animated card
│           ├── ThemeToggle.tsx # Dark mode toggle
│           ├── ScrollProgress.tsx # Progress bar
│           └── PageTransition.tsx # Page animations
├── public/                    # Static assets
└── package.json
```

## 🎨 Design System

### Colors

**Light Mode:**
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)

**Dark Mode:**
- Primary: `#818cf8` (Light Indigo)
- Secondary: `#a78bfa` (Light Purple)
- Accent: `#f472b6` (Light Pink)

### Typography
- Font: **Inter** (Google Fonts)
- Responsive headings with `clamp()`
- Optimized line heights and letter spacing

### Animations
- `fadeIn` - Fade with upward motion
- `slideIn` - Horizontal slide entrance
- `scaleIn` - Scale-up entrance
- `pulse` - Pulsing effect
- `shimmer` - Loading shimmer
- `glow` - Glowing shadow
- `float` - Floating animation

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Advanced animations
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Modern typography

## 📝 Customization

### Update Personal Information

1. **Navigation Logo**: Edit `src/components/layout/Navigation.tsx`
2. **Footer Content**: Edit `src/components/layout/Footer.tsx`
3. **About Page**: Edit `src/app/about/page.tsx`
4. **Projects**: Edit `src/app/work/page.tsx`
5. **Contact Info**: Edit `src/app/contact/page.tsx`

### Modify Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #6366f1;    /* Change primary color */
  --secondary: #8b5cf6;  /* Change secondary color */
  --accent: #ec4899;     /* Change accent color */
}
```

### Add New Components

Create components in `src/components/ui/` or `src/components/layout/`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other Platforms

Build the production bundle:

```bash
npm run build
npm start
```

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Next Steps

- [ ] Update with your personal content
- [ ] Add professional photos/images
- [ ] Configure custom domain
- [ ] Add analytics (Vercel Analytics recommended)
- [ ] Optimize images (convert to WebP)
- [ ] Run Lighthouse audit
- [ ] Add meta tags for social sharing

## 📧 Contact

For questions or feedback, reach out via:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)

## 📄 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

---

**Built with ❤️ using Next.js and Tailwind CSS**
