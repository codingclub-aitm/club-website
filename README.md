# AITM Coding Club Website

A modern, SEO-optimized website for the AITM Coding Club built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design** - Clean, minimal design with a deep navy and mint color scheme
- **Responsive** - Optimized for all device sizes
- **Dark Mode** - Toggle between light and dark themes
- **SEO Optimized** - Meta tags, JSON-LD schemas, and optimized content
- **Performance Focused** - Code splitting, optimized assets, and fast load times
- **Accessibility** - WCAG compliant with proper semantic HTML
- **Animation** - Subtle animations with Framer Motion

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Framer Motion** - Animation library
- **EmailJS** - Form submission handling
- **React Helmet Async** - Document head management

## 📋 Local Development

1. **Clone the repository**

```bash
git clone https://github.com/AITM-Coding-Club/website.git
cd website
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory with the following variables:

```
VITE_GA_ID=your-google-analytics-id
VITE_EMAILJS_SERVICE_ID=your-emailjs-service-id
VITE_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
VITE_EMAILJS_USER_ID=your-emailjs-user-id
```

4. **Start the development server**

```bash
npm run dev
# or
pnpm dev
```

## 🚢 Build & Deploy

### Building for Production

```bash
npm run build
# or
pnpm build
```

This will generate a `dist` folder with optimized production files.

### Deployment

The site can be deployed to Netlify or Vercel:

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 📊 SEO Checklist

- [x] Unique title tags for each page (50-60 characters)
- [x] Meta descriptions for each page (120-155 characters)
- [x] Canonical tags for all pages
- [x] Open Graph and Twitter card meta tags
- [x] JSON-LD structured data (Organization, LocalBusiness, FAQ)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML structure
- [x] Core keyword placement in titles, headings, and content
- [x] Internal linking structure
- [x] Mobile-friendly design
- [x] Page load optimization
- [x] Image alt text and optimization
- [x] HTTPS enabled

## 📏 Post-Launch Audit

After deployment, run the following audits:

1. **Google Lighthouse** - Aim for scores of:
   - Performance: ≥ 90
   - Accessibility: ≥ 95
   - Best Practices: ≥ 95
   - SEO: 100

2. **PageSpeed Insights** - Check Core Web Vitals compliance

3. **SEOptimer / Moz / Ahrefs** - Run a full SEO audit

4. **WAVE Web Accessibility Tool** - Check for accessibility issues

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── data/            # JSON data files
│   ├── favicon.svg      # Favicon
│   ├── robots.txt       # Robots file
│   └── sitemap.xml      # Sitemap
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
└── package.json         # Dependencies and scripts
```

## 📄 License

MIT License