# AutomaticxAI Website - Modular Structure

## 📁 File Organization

The website is now organized into modular chunks for efficient development:

### 🎯 **Sections** (`src/components/sections/`)
Each major website section is isolated:
- `HeroSection.tsx` - Landing hero area
- `MissionSection.tsx` - Company mission
- `ServicesSection.tsx` - AI services showcase
- `MetricsSection.tsx` - Performance metrics
- `WhyChooseUsSection.tsx` - Value propositions
- `TestimonialsSection.tsx` - Client testimonials
- `CTASection.tsx` - Contact form
- `FooterSection.tsx` - Footer content

### 🏗️ **Layout** (`src/components/layout/`)
Structural components:
- `Navigation.tsx` - Main navigation bar
- `PageLayout.tsx` - Overall page wrapper
- `SectionWrapper.tsx` - Reusable section container

### 🧩 **UI Components** (`src/components/ui/`)
Reusable interface elements:
- `tubelight-navbar.tsx` - Advanced navigation
- `waves-background.tsx` - Animated background
- `ScrollIndicator.tsx` - Scroll down indicator
- `ParallaxLayer.tsx` - Parallax effects
- `AnimatedSection.tsx` - Section animations
- `MobileMenu.tsx` - Mobile navigation

### 🔧 **Common Components** (`src/components/common/`)
Shared functional components:
- `Counter.tsx` - Animated counters
- `FeatureCard.tsx` - Feature display cards
- `MetricCard.tsx` - Metric display cards
- `ProgressBar.tsx` - Progress indicators
- `SectionHeader.tsx` - Section headers

### 🎣 **Hooks** (`src/hooks/`)
Custom React hooks:
- `useScrollSpy.ts` - Advanced scroll tracking
- `useParallax.ts` - Parallax scroll effects

### 📊 **Data** (`src/data/`)
Static content and configurations:
- `featuresData.ts` - Feature information
- `metricsData.ts` - Performance metrics
- `servicesData.ts` - Service offerings
- `testimonialsData.ts` - Client testimonials

## 🚀 **Working with Chunks**

### To modify a specific section:
```bash
# Hero section only
src/components/sections/HeroSection.tsx
src/components/hero/

# Navigation only
src/components/layout/Navigation.tsx
src/components/ui/tubelight-navbar.tsx

# Styling only
src/index.css
tailwind.config.js
```

### To add new features:
1. Create in appropriate folder
2. Export from index.ts
3. Import where needed

### To modify data:
- Update files in `src/data/`
- Changes automatically reflect across components

## 🎨 **Benefits**

✅ **Isolated Development** - Work on specific areas without affecting others
✅ **Easy Maintenance** - Clear separation of concerns
✅ **Reusable Components** - DRY principle implementation
✅ **Type Safety** - Full TypeScript support
✅ **Performance** - Tree-shaking friendly exports
✅ **Scalability** - Easy to add new sections/features

## 📝 **Quick Commands**

```bash
# Development
npm run dev

# Build
npm run build

# Lint specific area
npx eslint src/components/sections/
npx eslint src/components/ui/
```

This modular structure allows you to focus on specific website areas while maintaining overall consistency and performance.