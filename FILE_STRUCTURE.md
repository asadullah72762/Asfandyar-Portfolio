# Project File Structure

## 📂 Complete Directory Tree

```
portfolio-project/
│
├── 📄 package.json              # Project dependencies and scripts
├── 📄 tailwind.config.js        # Tailwind CSS configuration
├── 📄 README.md                 # Complete documentation
├── 📄 QUICK_START.md            # Quick setup guide
├── 📄 FILE_STRUCTURE.md         # This file
├── 📄 .gitignore                # Git ignore rules
│
├── 📁 public/
│   └── 📄 index.html            # HTML template (entry point)
│
└── 📁 src/
    │
    ├── 📄 index.js              # React entry point
    ├── 📄 index.css             # Global styles + Tailwind directives
    ├── 📄 App.jsx               # Main app component (imports all sections)
    │
    └── 📁 components/           # All page sections as components
        │
        ├── 📄 Navigation.jsx    # Sticky navigation bar
        ├── 📄 Navigation.css    # Navigation styles
        │
        ├── 📄 Hero.jsx          # Landing/hero section
        ├── 📄 Hero.css          # Hero styles
        │
        ├── 📄 About.jsx         # About section
        ├── 📄 About.css         # About styles
        │
        ├── 📄 Skills.jsx        # Skills section
        ├── 📄 Skills.css        # Skills styles
        │
        ├── 📄 Experience.jsx    # Experience timeline
        ├── 📄 Experience.css    # Experience styles
        │
        ├── 📄 Projects.jsx      # Projects showcase
        ├── 📄 Projects.css      # Projects styles
        │
        ├── 📄 Leadership.jsx    # Leadership section
        ├── 📄 Leadership.css    # Leadership styles
        │
        ├── 📄 Education.jsx     # Education section
        ├── 📄 Education.css     # Education styles
        │
        ├── 📄 Contact.jsx       # Contact form + footer
        └── 📄 Contact.css       # Contact styles
```

## 🎯 File Purposes

### Root Level Files

| File | Purpose |
|------|---------|
| `package.json` | Lists all dependencies and npm scripts |
| `tailwind.config.js` | Configures Tailwind CSS theme and colors |
| `README.md` | Complete project documentation |
| `QUICK_START.md` | Quick setup and customization guide |
| `.gitignore` | Files to ignore in version control |

### Public Folder

| File | Purpose |
|------|---------|
| `index.html` | HTML template, contains root div for React |

### Source (src) Folder

| File | Purpose |
|------|---------|
| `index.js` | React entry point, renders App component |
| `index.css` | Global styles, Tailwind directives, custom utilities |
| `App.jsx` | Main component that imports and arranges all sections |

### Components Folder

Each component has **TWO files**: one `.jsx` (React component) and one `.css` (styles).

| Component | What It Does |
|-----------|--------------|
| **Navigation** | Sticky header with smooth scroll navigation |
| **Hero** | Landing section with name, title, and CTAs |
| **About** | Biography and statistics |
| **Skills** | Technical skills organized by category |
| **Experience** | Work history with timeline visualization |
| **Projects** | Portfolio projects with descriptions |
| **Leadership** | Leadership and teaching achievements |
| **Education** | Academic background |
| **Contact** | Contact form, info, and footer |

## 🔄 How Components Connect

```
index.js
    ↓
  App.jsx (Main Container)
    ↓
    ├── Navigation.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Experience.jsx
    ├── Projects.jsx
    ├── Leadership.jsx
    ├── Education.jsx
    └── Contact.jsx
```

## 📝 Component Pattern

Every component follows the same structure:

```javascript
// ComponentName.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ComponentName.css';

const ComponentName = () => {
  return (
    <section id="section-id" className="component-section">
      {/* Component content */}
    </section>
  );
};

export default ComponentName;
```

## 🎨 Styling Architecture

### Global Styles (`index.css`)
- Tailwind base, components, utilities
- Global CSS reset
- Custom utility classes
- Font imports

### Component Styles (`Component.css`)
- Specific to that component only
- BEM-like naming convention
- No conflicts with other components

### Why This Structure?

✅ **Easy to Find**: Each section has its own file
✅ **Easy to Edit**: Styles are right next to the component
✅ **No Conflicts**: Component styles are scoped
✅ **Scalable**: Easy to add new sections
✅ **Maintainable**: Clear separation of concerns

## 🔍 Finding Files Quickly

Want to edit...
- **Header/Nav?** → `components/Navigation.jsx` + `Navigation.css`
- **Landing page?** → `components/Hero.jsx` + `Hero.css`
- **About section?** → `components/About.jsx` + `About.css`
- **Skills?** → `components/Skills.jsx` + `Skills.css`
- **Projects?** → `components/Projects.jsx` + `Projects.css`
- **Contact form?** → `components/Contact.jsx` + `Contact.css`
- **Global colors?** → `src/index.css` or `tailwind.config.js`

## 📦 Generated Folders (Don't Edit)

After running `npm install`:
- `node_modules/` - Dependencies (don't edit, in .gitignore)

After running `npm run build`:
- `build/` - Production files (auto-generated)

## 🚀 Adding New Sections

1. Create `NewSection.jsx` in `components/`
2. Create `NewSection.css` in `components/`
3. Import in `App.jsx`
4. Add to the component tree

Example:
```javascript
// In App.jsx
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      {/* ... */}
      <NewSection />  {/* Add here */}
      <Contact />
    </div>
  );
}
```

## 💡 Best Practices

1. **One component = One feature/section**
2. **Component styles stay in component CSS file**
3. **Global utilities go in `index.css`**
4. **Import CSS in JSX file**
5. **Keep components independent**

This structure makes your portfolio easy to maintain and customize! 🎉
