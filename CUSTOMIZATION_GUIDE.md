# Customization Guide

This guide shows you **exactly where** to make changes to customize your portfolio.

## 🎯 Quick Reference

| What to Change | File Location | Line Numbers |
|----------------|---------------|--------------|
| Name & Title | `src/components/Hero.jsx` | 34-51 |
| About Bio | `src/components/About.jsx` | 31-50 |
| Skills | `src/components/Skills.jsx` | 7-25 |
| Work Experience | `src/components/Experience.jsx` | 6-22 |
| Projects | `src/components/Projects.jsx` | 6-62 |
| Email & Location | `src/components/Contact.jsx` | 27-43 |
| Colors | `src/index.css` | Find & replace colors |
| Fonts | `src/index.css` | Line 1 |

## 📝 Detailed Customization

### 1. Hero Section (Landing Page)

**File:** `src/components/Hero.jsx`

```javascript
// Line 34 - Change your name
<motion.h1 className="hero-title">
  Asfandyar Hussain  {/* ← Change this */}
</motion.h1>

// Line 42 - Change your title/role
<motion.div className="hero-subtitle">
  Senior Flutter Developer | Cross-Platform Mobile Engineer | Team Lead  {/* ← Change this */}
</motion.div>

// Line 51 - Change your tagline
<motion.p className="hero-tagline">
  I build high-performance mobile apps used in healthcare, marketplaces, 
  agriculture, and social platforms.  {/* ← Change this */}
</motion.p>

// Line 20 - Change availability badge
<span>Available for Freelance & Full-time</span>  {/* ← Change this */}
```

**Hero Styling:**
File: `src/components/Hero.css`
- Background gradients: Lines 15-17
- Button colors: Lines 128-150

---

### 2. About Section

**File:** `src/components/About.jsx`

```javascript
// Lines 7-12 - Update your statistics
const stats = [
  { number: '5+', label: 'Years Experience' },      {/* ← Change numbers */}
  { number: '15+', label: 'Apps Deployed' },
  { number: '50K+', label: 'Active Users' },
  { number: '10+', label: 'Team Members Led' },
];

// Lines 31-50 - Update your bio paragraphs
<p className="about-text">
  As a <span className="highlight">Computer Science Graduate</span>...
  {/* ← Write your story here */}
</p>
```

**About Styling:**
File: `src/components/About.css`
- Stat card colors: Lines 57-64
- Text colors: Lines 35-40

---

### 3. Skills Section

**File:** `src/components/Skills.jsx`

```javascript
// Lines 7-25 - Update your skills
const skillCategories = [
  {
    title: 'Mobile Development',  {/* ← Category name */}
    icon: '📱',                    {/* ← Emoji icon */}
    skills: ['Flutter', 'Dart', 'Android', 'iOS'],  {/* ← Your skills */}
    color: 'cyan'                  {/* ← Color: cyan, blue, purple, pink */}
  },
  // Add more categories...
];
```

**To add a new skill category:**
1. Copy an existing category object
2. Change title, icon, skills array, and color
3. Save!

**Skills Styling:**
File: `src/components/Skills.css`
- Gradient colors: Lines 75-90

---

### 4. Experience Section

**File:** `src/components/Experience.jsx`

```javascript
// Lines 6-22 - Update your work history
const experiences = [
  {
    company: 'ProTech Code Park',              {/* ← Company name */}
    role: 'Senior Flutter Developer & Team Lead',  {/* ← Your role */}
    period: '2023 — Present',                  {/* ← Time period */}
    description: 'Leading a team of mobile developers...',  {/* ← What you did */}
    highlights: ['Team Leadership', 'Architecture Design']  {/* ← Key skills */}
  },
  // Add more experiences...
];
```

**To add a new job:**
1. Copy an existing experience object
2. Update all fields
3. It will automatically appear in the timeline!

**Experience Styling:**
File: `src/components/Experience.css`
- Timeline colors: Lines 22-29
- Card hover effects: Lines 57-61

---

### 5. Projects Section

**File:** `src/components/Projects.jsx`

```javascript
// Lines 6-62 - Update your projects
const projects = [
  {
    title: 'Echo Medical Center',          {/* ← Project name */}
    category: 'Healthcare',                {/* ← Category */}
    description: 'Comprehensive medical platform...',  {/* ← Description */}
    tech: ['Flutter', 'Dart', 'REST API', 'Firebase'],  {/* ← Technologies */}
    gradient: 'cyan'  {/* ← Color: cyan, green, purple, blue, orange, yellow, gray */}
  },
  // Add more projects...
];
```

**Available gradient colors:**
- `cyan` - Cyan to blue
- `green` - Green shades
- `purple` - Purple to pink
- `blue` - Blue to indigo
- `orange` - Orange to red
- `yellow` - Yellow to orange
- `gray` - Gray shades

**To add a new project:**
1. Copy an existing project object
2. Update all fields
3. Choose a gradient color
4. Save!

**Projects Styling:**
File: `src/components/Projects.css`
- Category badge colors: Lines 46-76
- Card hover effects: Lines 38-42

---

### 6. Leadership Section

**File:** `src/components/Leadership.jsx`

```javascript
// Lines 6-20 - Update achievements
const achievements = [
  {
    icon: '👥',                    {/* ← Emoji */}
    title: 'Team Leadership',      {/* ← Title */}
    description: 'Leading a team of 10+ developers...'  {/* ← Description */}
  },
  // Add more achievements...
];
```

---

### 7. Education Section

**File:** `src/components/Education.jsx`

```javascript
// Lines 28-35 - Update education
<h3 className="education-degree">
  Bachelor of Science in Computer Science  {/* ← Your degree */}
</h3>
<p className="education-institution">
  University Graduate  {/* ← Your university */}
</p>
<p className="education-description">
  Comprehensive study in computer science...  {/* ← Description */}
</p>
```

---

### 8. Contact Section

**File:** `src/components/Contact.jsx`

```javascript
// Lines 27-43 - Update contact info
const contactInfo = [
  {
    icon: ...,
    title: 'Email',
    value: 'asfandyar@example.com'  {/* ← Your email */}
  },
  {
    icon: ...,
    title: 'Location',
    value: 'Peshawar, Pakistan'  {/* ← Your location */}
  }
];

// Lines 45-47 - Update social links
const socialLinks = [
  { name: 'LinkedIn', label: 'in' },   {/* ← Add real links */}
  { name: 'GitHub', label: 'gh' },
  { name: 'Twitter', label: 'tw' }
];

// To add real links, change line 105:
href="#"  {/* ← Replace with your actual URL */}
```

**Contact Form:**
The form is working! It shows an alert on submit. To connect it to a backend:
1. Replace the `handleSubmit` function (line 15)
2. Add your API endpoint
3. Handle form submission

---

## 🎨 Styling Customization

### Change Colors

**Method 1: Global Color Replace**

Open `src/index.css` and use Find & Replace:

```
Find: #22d3ee (cyan)
Replace with: YOUR_COLOR

Find: #3b82f6 (blue)
Replace with: YOUR_COLOR
```

**Method 2: Component-Specific Colors**

Each component has its own CSS file. Example:

`src/components/Hero.css`
```css
/* Line 130 - Primary button gradient */
background: linear-gradient(to right, #22d3ee, #3b82f6);
/*                                    ↑ cyan   ↑ blue */

/* Change to your colors: */
background: linear-gradient(to right, #YOUR_COLOR_1, #YOUR_COLOR_2);
```

### Change Fonts

**File:** `src/index.css`

```css
/* Line 1 - Font import */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

/* Replace with your fonts from Google Fonts */
```

Then update in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
  display: ['YourDisplayFont', 'sans-serif'],
}
```

### Change Animation Speed

In any component CSS file:

```css
transition: all 0.3s ease;
/*              ↑ change this number */

/* Slower: 0.5s, 0.7s, 1s */
/* Faster: 0.1s, 0.15s, 0.2s */
```

---

## 🖼️ Adding Images

### Profile Photo

1. Add image to `public/assets/images/profile.jpg`
2. In `src/components/About.jsx`, add:

```javascript
<img 
  src="/assets/images/profile.jpg" 
  alt="Asfandyar Hussain"
  className="profile-photo"
/>
```

3. Style it in `About.css`

### Project Screenshots

1. Add images to `public/assets/projects/`
2. In each project object in `Projects.jsx`:

```javascript
{
  title: 'Project Name',
  image: '/assets/projects/project-screenshot.jpg',  {/* ← Add this */}
  // ... other fields
}
```

3. Display in JSX:

```javascript
<img src={project.image} alt={project.title} />
```

---

## 🔧 Advanced Customization

### Add New Section

1. **Create component files:**
```bash
src/components/NewSection.jsx
src/components/NewSection.css
```

2. **Create the component:**
```javascript
// NewSection.jsx
import React from 'react';
import './NewSection.css';

const NewSection = () => {
  return (
    <section id="newsection" className="newsection-section">
      <div className="container-custom">
        <h2>New Section</h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

3. **Import in App.jsx:**
```javascript
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      {/* ... */}
      <NewSection />  {/* ← Add here */}
      <Contact />
    </div>
  );
}
```

4. **Add to navigation** in `Navigation.jsx`:
```javascript
const navItems = [
  // ... existing items
  { id: 'newsection', label: 'New Section' }  {/* ← Add here */}
];
```

---

## ✅ Customization Checklist

- [ ] Update name and title in Hero
- [ ] Update about bio and stats
- [ ] Add your skills
- [ ] Add work experience
- [ ] Add your projects
- [ ] Update contact email and location
- [ ] Add social media links
- [ ] Change colors (optional)
- [ ] Change fonts (optional)
- [ ] Add images (optional)
- [ ] Test all sections
- [ ] Test on mobile

---

## 💡 Pro Tips

1. **Save Often**: Press `Ctrl+S` (or `Cmd+S`) after each change
2. **Test in Browser**: Changes appear automatically in `http://localhost:3000`
3. **Use Comments**: Add `{/* notes */}` in JSX or `/* notes */` in CSS
4. **Keep Backups**: Save a copy before making major changes
5. **One Change at a Time**: Easier to track what works

---

## 🆘 Common Questions

**Q: How do I change the order of sections?**
A: Rearrange imports in `src/App.jsx`

**Q: Can I remove a section?**
A: Yes! Just delete/comment out the import in `App.jsx`

**Q: How do I change button text?**
A: Find the button in the component and change the text inside the tags

**Q: The changes aren't showing?**
A: Make sure you saved the file and the dev server is running

**Q: How do I undo changes?**
A: Use `Ctrl+Z` (or `Cmd+Z`) in your editor

---

## 🎉 You're Ready!

You now know exactly where to make changes. Start customizing and make this portfolio truly yours!

**Remember:** The portfolio looks professional by default. Small, personal touches make it unique! ✨
