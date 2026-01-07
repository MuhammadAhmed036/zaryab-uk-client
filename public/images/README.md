# Images Directory

Place your images in this directory. The following folders are suggested:

## Folder Structure

```
images/
├── hero/           # Hero section images
├── team/           # Team member photos
├── services/       # Service section images
├── clients/        # Client/brand logos
├── press/          # Press mention logos
├── gallery/        # General gallery images
└── backgrounds/    # Background images/patterns
```

## Recommended Image Formats

- **Photos**: JPG/JPEG (optimized for web)
- **Logos/Icons**: SVG or PNG with transparency
- **Animations**: GIF or Lottie JSON files

## Recommended Image Sizes

- Hero images: 1920x1080px or larger
- Team photos: 600x800px (3:4 ratio) or 800x800px (square)
- Service images: 800x600px (4:3 ratio) or 1200x675px (16:9 ratio)
- Logos: SVG preferred, or PNG at 200-400px width
- Thumbnails: 400x400px

## Usage in Code

Replace the `ImagePlaceholder` components with actual `<img>` tags or Next.js `<Image>` components:

```jsx
// Before (placeholder)
<ImagePlaceholder variant="magenta" label="Artist Photo" />

// After (with actual image)
<img src="/images/team/artist.jpg" alt="Artist Name" className="w-full h-full object-cover" />

// Or using Next.js Image component
import Image from 'next/image';
<Image src="/images/team/artist.jpg" alt="Artist Name" fill className="object-cover" />
```
