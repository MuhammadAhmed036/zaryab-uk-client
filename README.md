# Soundwave Media - Animated Music Industry Website

A modern, animated Next.js website for the music industry with a light theme and beautiful animations.

## 🎵 Features

- **Beautiful Animations**: Powered by Framer Motion and GSAP
- **Light Theme**: Clean, modern design with vibrant accent colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Gen Z Aesthetic**: Bold typography, gradients, and interactive elements
- **Image Placeholders**: Ready for you to add your images
- **SEO Optimized**: Meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── services/          # Services page
│   ├── team/              # Team page
│   └── contact/           # Contact page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Badge.js
│   │   ├── Layout.js
│   │   └── ImagePlaceholder.js
│   ├── features/          # Feature-specific components
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Stats/
│   │   ├── Team/
│   │   ├── Contact/
│   │   ├── Brands/
│   │   ├── Press/
│   │   └── MarqueeBanner/
│   └── layout/            # Layout components
│       ├── Navbar.js
│       └── Footer.js
├── hooks/                 # Custom React hooks
│   └── useAnimations.js
└── lib/                   # Utilities and configs
    ├── gsapConfig.js
    └── animations.js
```

## 🎨 Color Palette

The light theme uses these accent colors:
- **Magenta**: `#ec4899` - Primary accent
- **Cyan**: `#22d3ee` - Secondary accent  
- **Lime**: `#a3e635` - Highlight color
- **Violet**: `#8b5cf6` - Tertiary accent

## 🖼️ Adding Images

1. Place images in the `public/images/` directory
2. Replace `ImagePlaceholder` components with actual images:

```jsx
// Before
<ImagePlaceholder variant="magenta" label="Artist Photo" />

// After
<img src="/images/your-image.jpg" alt="Description" />
```

## 🛠️ Animation Libraries

- **Framer Motion**: React-based animations, hover effects, page transitions
- **GSAP**: Complex timeline animations, scroll triggers
- **Tailwind CSS**: Utility-based animations and transitions

## 📱 Pages

1. **Home** (`/`) - Main landing page with all sections
2. **Services** (`/services`) - Detailed services information
3. **Team** (`/team`) - Team members grid
4. **Contact** (`/contact`) - Contact form and information

## 🔧 Customization

### Changing Brand Name
Update the following files:
- `src/components/layout/Navbar.js` - Logo text
- `src/app/layout.js` - Metadata
- `src/components/layout/Footer.js` - Footer text

### Adding New Sections
1. Create a new component in `src/components/features/`
2. Export it from `src/components/features/index.js`
3. Import and use in your page

### Modifying Colors
Edit the `tailwind.config.js` file to update the color palette.

## 📦 Dependencies

- Next.js 14
- React 18
- Framer Motion
- GSAP
- Tailwind CSS
- clsx

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📝 License

This project is licensed under the MIT License.

---

Made with ♥ for the music industry
