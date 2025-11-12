# 🚀 Blendwit - Modern Tech Company Website

A stunning, fully responsive website for Blendwit technology company featuring advanced animations, interactive carousels, and a beautiful dark/light theme system.

**Your Tech Mate 🤝💻**

---

## ✨ Features

### 🎨 **Design & UI**
- **Modern, Professional Design** - Clean aesthetics with tech-inspired geometric patterns
- **Dark/Light Theme Toggle** - Seamless theme switching with automatic logo adaptation
- **Beautiful Animations** - Scroll-triggered fade-ins, floating icons, geometric backgrounds
- **Gradient Accents** - Eye-catching gradients (Yellow → Red → Green → Blue)
- **Tech Geometric Patterns** - Hexagons, grids, circuits, radar scans in backgrounds
- **Loader Screen** - 2-second minimum branded loading experience

### 📱 **Fully Responsive**
- **6 Breakpoints** - Optimized for all screen sizes:
  - Extra Large (1400px+)
  - Desktop (1024px - 1399px)
  - Tablets (768px - 1023px)
  - Mobile Landscape (640px - 767px)
  - Mobile Portrait (480px - 639px)
  - Small Mobile (< 480px)
- **Adaptive Layouts** - Grid columns adjust automatically
- **Mobile Navigation** - Hamburger menu for small screens
- **Touch-Optimized** - Swipe support for carousels

### 🎯 **Interactive Elements**
- **Auto-Sliding Carousels** - Portfolio & Testimonials with smooth transitions
- **Service Inquiry Modal** - Pop-up form for service requests with EmailJS integration
- **Hover Effects** - Cards lift, icons bounce, colors change
- **Smooth Scrolling** - Animated navigation between sections
- **Active Navigation** - Auto-highlights current section
- **Scroll Animations** - Elements fade in as you scroll

### 🔧 **Technical Features**
- **Pure Vanilla JavaScript** - No frameworks, lightweight
- **CSS Variables** - Easy theme customization
- **Intersection Observer** - Efficient scroll animations
- **EmailJS Integration** - Send emails without backend
- **Optimized Performance** - Fast loading, smooth 60fps animations
- **SEO Friendly** - Semantic HTML, meta tags

---

## 📂 File Structure

```
blendwit-website/
│
├── index.html                   # Main website page
├── privacy-policy.html          # Privacy policy page
├── terms-of-service.html        # Terms of service page
├── styles.css                   # All styles (3400+ lines)
├── script.js                    # All interactivity (900+ lines)
├── README.md                    # This file
│
└── assets/
    ├── images/
    │   ├── logo-black.png       # Logo for light theme navigation
    │   ├── logo-white.png       # Logo for dark theme navigation
    │   ├── logo-colorful.png    # Main colorful logo (footer, loader, "Who We Are")
    │   ├── main-logo.png        # Alias for logo-colorful.png
    │   ├── b-logo.png          # Small "B" logo for team/testimonials placeholders
    │   └── avatar.png          # Hero section avatar image
    │
    └── icons/
        └── (favicons - to be added)
```

---

## 🎨 Theme System

### **Logo Usage by Theme:**

| Location | Light Theme | Dark Theme |
|----------|-------------|------------|
| **Navigation** | `logo-black.png` | `logo-white.png` |
| **Footer** | `logo-colorful.png` | `logo-colorful.png` |
| **Who We Are Section** | `main-logo.png` (colorful) | `main-logo.png` (colorful) |
| **Loader Screen** | `logo-colorful.png` | `logo-colorful.png` |

### **Theme Toggle:**
- Located in the top-right navigation
- Icon: 🌙 (light mode) / ☀️ (dark mode)
- Smooth transition between themes
- Saves preference to localStorage
- Auto-switches logos based on theme

---

## 📄 Page Sections

### 1. **Hero Section**
- Gradient background with tech patterns
- Avatar with pulsing "Your Tech Mate" badge
- Call-to-action buttons
- Animated stats (500+ Projects, 98% Success, 50+ Clients)
- Scroll-down indicator

### 2. **About Us (Who We Are)**
- Split layout with main colorful logo
- Floating/morphing geometric shapes around logo
- Company description
- Animated on scroll (logo from left, text from right)

### 3. **Services (What We Do)**
- 6 service cards in responsive grid:
  - 💻 Web Development
  - 📱 Mobile Development
  - ☁️ Cloud Solutions
  - 🤖 AI & Machine Learning
  - 🎨 UI/UX Design
  - 🔒 Cybersecurity
- Floating icons with bounce animation
- Each card opens service inquiry modal
- Background glow on hover
- "Inquire Now →" button appears on hover

### 4. **Portfolio (Our Work)**
- **Auto-sliding carousel** (4 seconds per slide)
- 8 project showcases
- Multi-slide preview layout (70% main, 30% preview)
- Arrow navigation (← →)
- Dot indicators
- Keyboard support (Arrow keys)
- Touch/swipe enabled
- Pause on hover
- Smooth 0.8s transitions
- Projects:
  1. E-Commerce Platform
  2. Health & Fitness App
  3. Predictive Analytics Dashboard
  4. Enterprise Cloud Migration
  5. UI/UX Design System
  6. Blockchain Payment System
  7. IoT Monitoring Platform
  8. Machine Learning API

### 5. **Team (Who Made It)**
- **Static 4-column grid** (not carousel)
- Team members:
  - John Smith - CEO & Founder
  - Sarah Johnson - CTO
  - Michael Chen - Lead Designer
  - Emily Rodriguez - Head of Engineering
- Circular avatars with border
- Social media links (LinkedIn, Twitter, GitHub/Dribbble)
- Hover effects: Card lifts, border changes to blue
- Responsive: 4 cols → 2 cols → 1 col

### 6. **Testimonials (What Users Say)**
- **Auto-sliding carousel** (5 seconds per slide)
- Large quote mark watermark
- 5-star ratings
- Client photo, name, company
- Smooth 0.8s transitions
- Dot navigation
- Pause on hover

### 7. **Contact (Get In Touch)**
- Split layout: Form + Info
- Contact form fields:
  - Name, Email, Subject, Message
  - Send button
- Contact information:
  - Email: contact@blendwit.com
  - Phone: +977 9843137383
  - Location: Kathmandu, Nepal
- Social media icons

### 8. **Footer**
- Dark gradient background (#0f172a → #1a202c)
- Colorful logo (always)
- "Your Tech Mate 🤝💻" tagline (gradient text)
- 4 columns:
  1. About + Social links
  2. Quick Links
  3. Services (all open inquiry modal)
  4. Contact Info
- Bottom bar: Copyright + Privacy/Terms links
- Subtle radial gradient overlays

---

## 🎬 Animations & Effects

### **Scroll Animations (15+ elements)**
- `.fade-in-up` - Elements fade in from bottom
- `.fade-in-left` - Elements fade in from left
- `.fade-in-right` - Elements fade in from right
- `.scale-in` - Elements scale up from 85%

**Applied to:**
- About section (logo + text)
- All 6 service cards
- Hero stats
- Team members (4 cards)
- Portfolio carousel container
- Testimonials carousel container
- Contact form

### **Geometric Background Animations**
Each section has unique animated tech patterns:

- **Hero:** Hexagon pattern + diagonal grid
- **About:** 4 layers (hexagons, 3D grid, dots network, circuit)
- **Services:** Octagon grid + radar scan
- **Portfolio:** Data radar (conic gradient)
- **Team:** Hexagonal mesh + multi-grid
- **Testimonials:** Conic tech pattern
- **Contact:** Triangular grid

### **Element Animations**
- **Service Icons:** Floating bob (3s loop) + bounce on hover
- **Main Logo:** Gentle float with rotation (4s loop)
- **Logo Container:** Morphing shapes, pulsing glows
- **Navigation:** Underline + dot appear on active
- **Cards:** Lift on hover with shadow elevation
- **Carousel:** Auto-play with smooth transitions

---

## 🎠 Carousels

### **Portfolio Carousel**
- **Speed:** Auto-slide every 4 seconds
- **Layout:** 70% main slide + 30% preview
- **Slides:** 8 projects
- **Navigation:** Arrows, dots, keyboard
- **Features:** Pause on hover, smooth loop

### **Testimonials Carousel**
- **Speed:** Auto-slide every 5 seconds
- **Layout:** 65% main slide + 35% preview
- **Features:** Large quote marks, 5-star ratings
- **Navigation:** Dots only
- **Features:** Pause on hover, smooth loop

---

## 📧 Service Inquiry Modal

### **Trigger Points:**
- Click any service card in "What We Do" section
- Click any service link in footer

### **Modal Features:**
- Blur background overlay
- Slide-in animation
- Professional form with fields:
  - Full Name *
  - Email Address *
  - Phone Number
  - Company Name
  - Project Details *
  - Estimated Budget (dropdown)
- Success message with checkmark animation
- Close via: X button, ESC key, click outside

### **Email Integration (EmailJS)**
When inquiry is submitted, 2 emails are sent:
1. **To Blendwit** - Inquiry notification with all details
2. **To Client** - Confirmation that inquiry was received

**Setup Required:** See EmailJS section below

---

## 🖼️ Image Setup

### **Required Images:**

Save these images to `assets/images/` folder:

1. **logo-black.png** - Black logo for light theme navigation
2. **logo-white.png** - White logo for dark theme navigation  
3. **logo-colorful.png** - Your main colorful logo (yellow, red, green, blue)
4. **main-logo.png** - Copy of logo-colorful.png (or symlink)
5. **b-logo.png** - Small "B" icon (for team/testimonial placeholders)
6. **avatar.png** - Hero section avatar/mascot image

### **Optional Favicons:**

Save to `assets/icons/` folder:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

---

## 📧 EmailJS Setup (5 Minutes)

The service inquiry modal uses EmailJS to send emails without a backend.

### **Step 1: Create EmailJS Account**
1. Go to https://www.emailjs.com/
2. Sign up for FREE account
3. Verify your email

### **Step 2: Connect Email Service**
1. In EmailJS dashboard → "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow connection instructions
5. Note your **Service ID**

### **Step 3: Create Email Templates**

**Template 1 - To Blendwit (Inquiry Notification):**
```
Subject: New Service Inquiry - {{service}}

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}
Service: {{service}}
Budget: {{budget}}

Project Details:
{{message}}
```

**Template 2 - To Client (Confirmation):**
```
Subject: We Received Your Inquiry - Blendwit

Hello {{name}},

Thank you for your interest in our {{service}} services!

We've received your inquiry and our team will review it shortly. 
We'll get back to you within 24 hours.

Best regards,
Blendwit Team
contact@blendwit.com
+977 9843137383
```

Note your **Template IDs** for both.

### **Step 4: Update Script.js**

Open `script.js` and find the EmailJS configuration section (around line 1100):

```javascript
// Replace these with your actual IDs:
emailjs.init('YOUR_PUBLIC_KEY');              // Your Public Key
emailjs.send('YOUR_SERVICE_ID',               // Your Service ID
    'YOUR_TEMPLATE_ID_TO_BLENDWIT',          // Template 1 ID
    templateParams)

emailjs.send('YOUR_SERVICE_ID',               // Your Service ID
    'YOUR_TEMPLATE_ID_TO_CLIENT',            // Template 2 ID
    templateParams)
```

Replace:
- `YOUR_PUBLIC_KEY` - From EmailJS → Account → API Keys
- `YOUR_SERVICE_ID` - From Step 2
- `YOUR_TEMPLATE_ID_TO_BLENDWIT` - Template 1 ID
- `YOUR_TEMPLATE_ID_TO_CLIENT` - Template 2 ID

### **Step 5: Test**
1. Click any service card
2. Fill out the inquiry form
3. Click "Send Inquiry"
4. Check your email!

---

## 🎨 Brand Colors

### **Primary Colors (from your logo):**
```css
--color-yellow: #FFC107;   /* Yellow */
--color-red: #E53935;      /* Red */
--color-green: #4CAF50;    /* Green */
--color-blue: #2196F3;     /* Blue */
```

### **Gradients:**
```css
/* Full Gradient (used throughout) */
linear-gradient(135deg, 
    #FFC107 0%,   /* Yellow */
    #E53935 25%,  /* Red */
    #4CAF50 50%,  /* Green */
    #2196F3 100%  /* Blue */
)

/* Primary Gradient */
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### **Theme Colors:**

**Light Mode:**
- Background: `#ffffff` (white)
- Background Alt: `#f8f9fa` (light gray)
- Text: `#1a202c` (dark)
- Card Background: `#ffffff`

**Dark Mode:**
- Background: `#0f0f1a` (very dark blue)
- Background Alt: `#1a1a2e` (dark blue)
- Text: `#e5e7eb` (light)
- Card Background: `#1e1e30`

---

## 🔧 Customization Guide

### **Updating Contact Information**

**In `index.html` - Contact Section:**
```html
<p>Email: contact@blendwit.com</p>      <!-- Update email -->
<p>Phone: +977 9843137383</p>           <!-- Update phone -->
<p>Location: Kathmandu, Nepal</p>       <!-- Update location -->
```

**In Footer:**
- Same contact info appears
- Update in both places

### **Adding/Removing Services**

Edit the services grid in `index.html`:
```html
<div class="service-card service-inquiry-link fade-in-up" 
     data-service="Your Service Name" 
     style="cursor: pointer;">
    <div class="service-icon">🎯</div>
    <h3>Your Service Name</h3>
    <p>Description of your service</p>
    <ul class="service-list">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
    <div class="service-inquiry-btn">Inquire Now →</div>
</div>
```

### **Updating Team Members**

Edit team grid in `index.html`:
```html
<div class="team-member fade-in-up">
    <div class="member-image-wrapper">
        <div class="member-image">
            <img src="assets/images/member-photo.jpg" alt="Name">
        </div>
    </div>
    <div class="member-info">
        <h3>Member Name</h3>
        <span class="member-role">Job Title</span>
        <div class="member-social">
            <a href="linkedin-url"><i class="fab fa-linkedin-in"></i></a>
            <a href="twitter-url"><i class="fab fa-twitter"></i></a>
            <a href="github-url"><i class="fab fa-github"></i></a>
        </div>
    </div>
</div>
```

### **Adding Portfolio Projects**

Add more projects to the carousel in `index.html`:
```html
<div class="portfolio-slide">
    <div class="portfolio-item">
        <div class="portfolio-image-container">
            <img src="assets/images/project.jpg" alt="Project Name">
        </div>
        <div class="portfolio-info-card">
            <div class="portfolio-header">
                <span class="portfolio-category">Category</span>
                <span class="portfolio-number">09</span>
            </div>
            <h3>Project Name</h3>
            <p>Project description</p>
            <a href="#" class="portfolio-view-link">View Project →</a>
        </div>
    </div>
</div>
```

### **Customizing Colors**

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2196F3;
    --color-yellow: #FFC107;
    --color-red: #E53935;
    --color-green: #4CAF50;
    --color-blue: #2196F3;
    /* Update these to match your brand */
}
```

---

## 🌐 Social Media Links

Update these URLs in `index.html` (Contact section and Footer):

```html
<!-- Facebook -->
<a href="https://www.facebook.com/profile.php?id=61555794380386">

<!-- Instagram -->
<a href="https://www.instagram.com/blendwittech/">

<!-- Twitter/X -->
<a href="https://x.com/Blendwittech">

<!-- LinkedIn -->
<a href="https://www.linkedin.com/company/tech-blendwit/">

<!-- GitHub -->
<a href="https://github.com/BlendWitTech">
```

---

## ⚙️ Animation Customization

### **Adjusting Carousel Speed**

In `script.js`, find these lines:

```javascript
// Portfolio - Currently 4 seconds
let autoPlayInterval = setInterval(nextSlide, 4000);

// Testimonials - Currently 5 seconds
let testimonialAutoPlay = setInterval(nextTestimonial, 5000);
```

Change the numbers (in milliseconds):
- 3000 = 3 seconds (faster)
- 5000 = 5 seconds (slower)

### **Disabling Animations**

To disable scroll animations, comment out in `script.js`:
```javascript
// Comment these lines to disable animations:
// initScrollAnimations();
```

Or remove animation classes from HTML:
```html
<!-- Remove fade-in-up, fade-in-left, etc. -->
<div class="service-card">
```

---

## 🚀 Deployment

### **Option 1: Static Hosting**
Upload all files to any static hosting service:
- **Netlify** (Free, drag & drop)
- **Vercel** (Free, git integration)
- **GitHub Pages** (Free)
- **Cloudflare Pages** (Free)

### **Option 2: Traditional Hosting**
1. Upload files via FTP
2. Point domain to hosting
3. Ensure server serves HTML files

### **Option 3: Local Testing**
Simply open `index.html` in any modern browser!

---

## 🛠️ Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | 90+ |

**Features Used:**
- CSS Grid & Flexbox
- CSS Variables
- Intersection Observer API
- ES6+ JavaScript
- CSS backdrop-filter
- RequestAnimationFrame

---

## 📱 Responsive Breakpoints

```css
/* Extra Large Desktops */
@media (min-width: 1400px)
  - Max container: 1320px

/* Large Tablets/Small Laptops */
@media (max-width: 1199px)
  - Services: 2 columns
  - Adjusted hero proportions

/* Tablets */
@media (max-width: 1023px)
  - Hero: Single column, centered
  - About: Single column
  - Team: 2 columns

/* Mobile Landscape */
@media (max-width: 767px)
  - Services: Single column
  - Reduced padding
  - Hero stats: 2 columns

/* Mobile Portrait */
@media (max-width: 639px)
  - Mobile menu activated
  - Portfolio: Full width slides
  - Footer: Single column

/* Small Mobile */
@media (max-width: 479px)
  - Compact text sizes
  - Smaller buttons
  - Team avatar: 90px
```

---

## 🎯 Performance Optimizations

- **No External Dependencies** - Pure vanilla JS
- **Optimized Animations** - GPU-accelerated transforms
- **Lazy Loading Ready** - Data-src attributes prepared
- **Efficient Observers** - Unobserve after animation
- **CSS Variables** - Fast theme switching
- **Minimal Repaints** - Transform/opacity only
- **RequestAnimationFrame** - Smooth 60fps

---

## 🔐 Privacy & Legal Pages

- **privacy-policy.html** - Comprehensive privacy policy
- **terms-of-service.html** - Terms of service
- Linked in footer
- Professional, complete content
- Update with your company details

---

## 📝 To-Do Before Launch

### **1. Add Your Images**
- [ ] Save all logo variations (black, white, colorful)
- [ ] Add favicon files
- [ ] Add team member photos
- [ ] Add project screenshots for portfolio
- [ ] Add testimonial client photos

### **2. Setup EmailJS**
- [ ] Create EmailJS account
- [ ] Configure email service
- [ ] Create 2 email templates
- [ ] Update IDs in script.js

### **3. Update Content**
- [ ] Review all text content
- [ ] Update contact information
- [ ] Add real team members
- [ ] Add real projects
- [ ] Add real testimonials
- [ ] Update privacy policy & terms with your details

### **4. Test Everything**
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Test all form submissions
- [ ] Test theme toggle
- [ ] Test all navigation
- [ ] Test service inquiry modal
- [ ] Verify all links work
- [ ] Check responsive on all screen sizes

### **5. SEO & Meta Tags**
- [ ] Update page title
- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Create sitemap.xml
- [ ] Create robots.txt

---

## 💡 Tips & Best Practices

### **Image Optimization**
- Use WebP format for smaller file sizes
- Compress images before uploading
- Recommended sizes:
  - Logos: 500px max width
  - Team photos: 400x400px
  - Portfolio: 1200x800px
  - Avatar: 600x600px

### **Content Writing**
- Keep service descriptions concise
- Use action-oriented language
- Highlight benefits, not just features
- Include specific numbers/metrics
- Make CTAs clear and compelling

### **Performance**
- Minimize external scripts
- Use system fonts as fallback
- Optimize images
- Enable browser caching
- Use CDN for Font Awesome

---

## 🎨 Design Philosophy

This website follows modern tech company design trends:

- **Minimalism** - Clean, uncluttered layouts
- **Geometric Patterns** - Tech-inspired backgrounds
- **Bold Typography** - Strong hierarchy
- **Smooth Animations** - Professional, not distracting
- **Color Psychology** - Blue (trust), Green (growth), Yellow (innovation)
- **White Space** - Breathing room for content
- **Consistent Branding** - Logo usage, color scheme

---

## 🔄 Updating the Website

### **Regular Updates**
1. Add new projects to portfolio
2. Update team members if changes
3. Add new testimonials
4. Keep services current
5. Update stats in hero section

### **Seasonal Updates**
- Holiday messages
- Special promotions
- Event announcements
- Blog integration

---

## 🐛 Troubleshooting

### **Animations Not Working?**
- Check browser console (F12) for errors
- Ensure JavaScript is enabled
- Clear browser cache (Ctrl+F5)
- Check that animation classes are on elements

### **Logos Not Showing?**
- Verify image files exist in `assets/images/`
- Check file names match exactly (case-sensitive)
- Ensure images are .png format
- Check browser console for 404 errors

### **Theme Toggle Not Working?**
- Check localStorage is enabled
- Clear browser storage
- Check JavaScript console for errors

### **EmailJS Not Sending?**
- Verify all 3 IDs are correct
- Check EmailJS dashboard for quota
- Look for errors in browser console
- Test with EmailJS test feature first

### **Carousel Issues?**
- Ensure slides have `.portfolio-slide` class
- Check that carousel container has correct ID
- Verify JavaScript is not blocked
- Check console for errors

---

## 📞 Support & Contact

**Company:** Blendwit  
**Email:** contact@blendwit.com  
**Phone:** +977 9843137383  
**Location:** Kathmandu, Nepal

**Social Media:**
- Facebook: https://www.facebook.com/profile.php?id=61555794380386
- Instagram: https://www.instagram.com/blendwittech/
- Twitter: https://x.com/Blendwittech
- LinkedIn: https://www.linkedin.com/company/tech-blendwit/
- GitHub: https://github.com/BlendWitTech

---

## 📜 License

This website is proprietary to Blendwit. All rights reserved.

---

## 🙏 Credits

**Built By:** Blendwit Team  
**Design Inspiration:** Modern tech company websites  
**Icons:** Font Awesome (Free)  
**Fonts:** Google Fonts (Inter, Space Grotesk)  
**Email Service:** EmailJS

---

## 🔄 Version History

**v1.0.0** - Initial Release
- Complete website with all sections
- Dark/light theme system
- 2 auto-sliding carousels
- Service inquiry modal
- Scroll animations
- Fully responsive design
- Tech geometric patterns
- EmailJS integration ready

---

## 🚀 Quick Start

```bash
# 1. Ensure you have the folder structure
blendwit-website/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
        ├── logo-black.png
        ├── logo-white.png
        ├── logo-colorful.png
        ├── main-logo.png
        ├── b-logo.png
        └── avatar.png

# 2. Open in browser
Simply double-click index.html
OR
Use a local server (Live Server extension in VS Code)

# 3. Customize
- Add your images
- Update text content
- Setup EmailJS
- Deploy!
```

---

**Built with ❤️ by the Blendwit Team**

**Your Tech Mate** 🤝💻
