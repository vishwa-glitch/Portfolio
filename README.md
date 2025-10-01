# Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, featuring a clean design, smooth animations, and dark/light mode toggle.

## 🚀 Features

- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Scroll-based animations and micro-interactions
- **Interactive Components**: 
  - Animated hero section with particle background
  - Skill cards with progress indicators
  - Flip-card project showcases
  - Timeline-based experience section
  - Validated contact form with toast notifications
- **Performance Optimized**: Lazy loading, code splitting, and PWA features
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation support

## 📦 Technologies Used

### Frontend
- React 18.2.0
- React Router DOM
- React Icons
- React Intersection Observer
- React Toastify
- CSS Modules

### Design
- Custom CSS with CSS Variables
- Responsive Grid and Flexbox layouts
- Smooth scroll behavior
- Custom animations and transitions

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `build` folder.

## 📂 Project Structure

```
src/
├── components/
│   ├── Navigation/     # Fixed navigation bar with smooth scroll
│   ├── Hero/           # Landing section with animated background
│   ├── Skills/         # Technical skills dashboard
│   ├── Projects/       # Project showcases with flip cards
│   ├── Experience/     # Professional experience timeline
│   ├── Contact/        # Contact form with validation
│   ├── Footer/         # Footer with social links
│   └── common/         # Reusable components
├── assets/
│   ├── images/         # Project images and assets
│   └── icons/          # Custom icons
├── styles/
│   ├── global.css      # Global styles
│   └── variables.css   # CSS variables for theming
├── hooks/
│   ├── useDarkMode.js  # Dark mode toggle hook
│   └── useScrollAnimation.js # Scroll animation hook
├── utils/
│   └── constants.js    # Application constants and data
└── App.js              # Main application component
```

## 🎨 Customization

### Update Personal Information
1. Edit `src/utils/constants.js` to update:
   - Skills and proficiency levels
   - Project details
   - Experience information
   - Social links

### Color Scheme
Modify the CSS variables in `src/styles/variables.css`:
```css
--primary-dark: #1a1a2e;
--primary-light: #f8f9fa;
--accent-blue: #0066cc;
--accent-green: #00d4aa;
```

### Typography
Update font families in `src/styles/variables.css`:
```css
--font-heading: 'Inter', sans-serif;
--font-body: 'Open Sans', sans-serif;
--font-code: 'Fira Code', monospace;
```

## 🚀 Deployment

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📱 PWA Features

The portfolio includes PWA capabilities:
- Service Worker for offline functionality
- Web App Manifest for installation
- Responsive icons and splash screens
- Cache-first strategy for assets

## 🔧 Performance Optimization

- **Code Splitting**: Routes are lazy loaded
- **Image Optimization**: Lazy loading for images
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Browser and service worker caching
- **Compression**: Gzip compression for production builds

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 🙏 Acknowledgments

- React team for the amazing framework
- All contributors and open source projects used
- Design inspiration from modern portfolio trends

---

⭐ Star this repo if you find it helpful!
