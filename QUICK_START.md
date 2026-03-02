# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd portfolio-project
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

Your portfolio will open at `http://localhost:3000`

## ✏️ Quick Customization

### Update Your Information

1. **Name & Title** → `src/components/Hero.jsx` (lines 34-45)
2. **Email & Location** → `src/components/Contact.jsx` (lines 27-43)
3. **About Text** → `src/components/About.jsx` (lines 31-50)
4. **Experience** → `src/components/Experience.jsx` (lines 6-22)
5. **Projects** → `src/components/Projects.jsx` (lines 6-62)

### Change Colors

Open `src/components/[Component].css` and find these classes:
- `.text-gradient` - Main gradient color
- `.hero-button.primary` - Primary button color
- `.nav-logo` - Logo gradient

Replace `#22d3ee` (cyan) and `#3b82f6` (blue) with your preferred colors.

## 📦 Build for Production

```bash
npm run build
```

The `build/` folder contains your production-ready files.

## 🌐 Quick Deploy

### Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy!

### Netlify
1. Run `npm run build`
2. Go to netlify.com
3. Drag & drop the `build/` folder

## 📱 File Organization

```
src/
├── components/          ← All your sections
│   ├── Hero.jsx        ← Landing section
│   ├── About.jsx       ← About you
│   ├── Skills.jsx      ← Your skills
│   ├── Experience.jsx  ← Work history
│   ├── Projects.jsx    ← Your projects
│   └── Contact.jsx     ← Contact form
└── index.css           ← Global styles
```

## 🎨 Component Structure

Each component follows this pattern:
```
ComponentName.jsx    ← React component (logic + JSX)
ComponentName.css    ← Styles for this component only
```

**This makes editing super easy!** Just find the section you want to change, and both its code and styles are together.

## 💡 Common Customizations

### Add a New Project
1. Open `src/components/Projects.jsx`
2. Add to the `projects` array:
```javascript
{
  title: 'Your App Name',
  category: 'Your Category',
  description: 'Your description',
  tech: ['Tech1', 'Tech2'],
  gradient: 'cyan' // or blue, green, purple, etc.
}
```

### Change Font
1. Open `src/index.css`
2. Replace Google Fonts import URL
3. Update `font-family` in Tailwind config

### Modify Animation Speed
In component CSS files, look for:
```css
transition: all 0.3s ease;  ← Change 0.3s to your preferred speed
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Use a different port
PORT=3001 npm start
```

**Styles not updating?**
```bash
# Clear cache and restart
rm -rf node_modules
npm install
npm start
```

## 📚 Learn More

- Edit JSX files to change content
- Edit CSS files to change styles
- All sections are in `src/components/`
- Main app logic in `src/App.jsx`

## 🎯 Next Steps

1. ✅ Install and run
2. ✅ Update personal info
3. ✅ Customize colors
4. ✅ Add your projects
5. ✅ Deploy to web

You're all set! 🎉
