# 🏗️ BIM Developer Portfolio - Hossam Sabry

A modern, responsive portfolio website showcasing BIM development expertise, automation solutions, and digital construction projects.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://m2dawn.github.io/Portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 Features

### 🎨 Modern Design
- **Matte Blue/Black Theme** - Professional color scheme with smooth gradients
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging scroll reveals and hover effects
- **Particle Background** - Interactive animated particle network
- **Dark/Light Mode** - Theme toggle for user preference

### 📧 Contact Form
- **EmailJS Integration** - Fully functional contact form
- **Real-time Validation** - Client-side form validation
- **Email Notifications** - Receive messages directly to your inbox
- **Success Feedback** - Toast notifications and success messages

### 🗺️ Global Reach Section
- **Analytics Dashboard** - Visual representation of user distribution
- **Monthly Updates Badge** - Animated badge showing data freshness
- **Non-interactive Display** - Optimized for presentation

### 📊 Interactive Components
- **Skills Visualization** - Animated skill cards with 3D hover effects
- **Project Showcase** - Filterable project gallery
- **Experience Timeline** - Professional work history display
- **Blog Integration** - Technical articles and tutorials
- **Case Studies** - Detailed project breakdowns

### ⚡ Performance
- **Lazy Loading** - Images load on demand
- **Optimized Assets** - Minified CSS and JavaScript
- **Fast Load Times** - Optimized for performance
- **SEO Friendly** - Meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (optional, for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/M2Dawn/Portfolio.git
   cd Portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     Right-click index.html → "Open with Live Server"
     ```

3. **View the portfolio**
   - Navigate to `http://localhost:8000` (or the port shown)

## ⚙️ Configuration

### Email Setup (Contact Form)

The contact form uses **EmailJS** to send messages. To configure:

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)** (Free tier: 200 emails/month)

2. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Update the configuration:**
   Open `assets/js/enhancements.js` and update lines 211-213:
   ```javascript
   const SERVICE_ID = 'your_service_id';      // Your EmailJS Service ID
   const TEMPLATE_ID = 'your_template_id';    // Your EmailJS Template ID
   const PUBLIC_KEY = 'your_public_key';      // Your EmailJS Public Key
   ```

4. **Email Template Setup:**
   Create a template in EmailJS with these variables:
   ```
   Subject: New Contact from {{from_name}}
   
   Body:
   You received a new message from your portfolio!
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   ```

### Google Analytics

Update the Google Analytics tracking ID in `index.html` (line 27):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

### Personal Information

Update your details in `index.html`:
- Name and title (line 339-360)
- About section (line 443-459)
- Skills (line 497-707)
- Projects (line 742-1012)
- Experience timeline (line 2580-2644)
- Contact information (line 3145-3164)

## 📁 Project Structure

```
Portfolio/
├── assets/
│   ├── css/
│   │   ├── enhancements.css      # Additional styles and animations
│   │   └── blog-article.css      # Blog post styling
│   ├── js/
│   │   ├── enhancements.js       # Interactive features & form handling
│   │   └── blog-article.js       # Blog functionality
│   └── images/
│       └── analytics-map.png     # Global reach visualization
├── blog/
│   └── revit-api-getting-started.html
├── case-studies/
│   ├── bim-automation-tool.html
│   ├── clash-dashboard.html
│   └── dynamo-scripts.html
├── clash-dashboard/
│   ├── index.html
│   ├── dashboard.js
│   └── sample-data.csv
├── docs/
│   ├── PM3.pdf
│   └── PM4.pdf
├── index.html                     # Main portfolio page
├── blog.html                      # Blog listing page
├── favicon.svg                    # Site favicon
└── README.md                      # This file
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive features
- **Chart.js** - Skills visualization
- **EmailJS** - Contact form functionality

### Design
- **Google Fonts** - Inter & JetBrains Mono
- **Custom CSS Animations** - Smooth transitions and effects
- **Responsive Grid/Flexbox** - Mobile-first layout

### Tools
- **Git** - Version control
- **GitHub Pages** - Hosting
- **VS Code** - Development environment

## 🎨 Customization

### Color Scheme
The portfolio uses CSS custom properties for easy theming. Update in `index.html` (lines 50-71):

```css
:root {
  --primary: #3b82f6;           /* Main blue */
  --secondary: #60a5fa;         /* Light blue */
  --accent: #1e40af;            /* Dark blue */
  --bg-primary: #000000;        /* Black background */
  --bg-secondary: #0a0a0a;      /* Secondary background */
  --bg-card: #111111;           /* Card background */
  --text-primary: #e5e7eb;      /* Primary text */
  --text-secondary: #9ca3af;    /* Secondary text */
}
```

### Adding Projects
Add new projects in `index.html` within the projects section:

```html
<div class="project" data-category="automation">
  <div class="project-preview">
    <div class="project-preview-icon">
      <!-- Your SVG icon here -->
    </div>
  </div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Project description...</p>
    <div class="project-buttons">
      <a href="case-studies/your-project.html" class="btn">View Case Study</a>
    </div>
  </div>
</div>
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: `main` branch
   - Save and wait for deployment

3. **Access your site:**
   - `https://yourusername.github.io/Portfolio`

### Netlify

1. **Connect repository** to Netlify
2. **Build settings:**
   - Build command: (leave empty)
   - Publish directory: `/`
3. **Deploy!**

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time:** < 2 seconds
- **First Contentful Paint:** < 1 second
- **Interactive:** < 2.5 seconds

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hossam Sabry**
- BIM Developer & Digital Construction Specialist
- GitHub: [@M2Dawn](https://github.com/M2Dawn)
- Email: e.hossamsabry@gmail.com

## 🙏 Acknowledgments

- Icons and graphics: Custom SVG designs
- Fonts: Google Fonts (Inter, JetBrains Mono)
- Email service: EmailJS
- Analytics: Google Analytics
- Hosting: GitHub Pages

## 📈 Future Enhancements

- [ ] Add more case studies
- [ ] Implement blog search functionality
- [ ] Add project filtering by technology
- [ ] Create downloadable resume
- [ ] Add testimonials carousel
- [ ] Implement multi-language support
- [ ] Add more interactive demos

---

**Built with ❤️ for BIM innovation**

⭐ Star this repo if you find it helpful!
