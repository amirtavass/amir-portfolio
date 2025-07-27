# Amirreza Tavassoli - Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing my development skills and projects.

## 🌐 Live Demo

**[Visit Portfolio →](https://amir-portfolio-zeta.vercel.app/)**

## 📸 Screenshots

![Portfolio Preview](![alt text](image.png))

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Next.js for optimal loading speeds
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Interactive Portfolio** - Live demos of all projects
- **Contact Form** - Functional contact form for inquiries
- **Modular Components** - Clean, maintainable code architecture

## 🛠️ Built With

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/) + Custom CSS
- **Icons:** [Font Awesome](https://fontawesome.com/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Poppins, Lora)
- **Deployment:** [Vercel](https://vercel.com/)

## 🎯 Projects Showcased

1. **[GitHub Finder](https://github-finder-kappa-virid.vercel.app/)**

   - React application with GitHub API integration
   - Technologies: React, Tailwind CSS, GitHub API

2. **[MovieMate](https://movie-mate-brown.vercel.app/)**

   - Movie discovery app with search functionality
   - Technologies: React, CSS Modules, Movie API

3. **[Personal Portfolio](https://amirtavassoli.ir)**

   - This very website you're looking at
   - Technologies: Vanilla JavaScript, CSS3, HTML5

4. **[Arman Portfolio](https://arman-portfolio-alpha.vercel.app/)**
   - Professional portfolio with modern animations
   - Technologies: React, Next.js, Tailwind CSS, Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install React Icons** (if not already installed)

   ```bash
   npm install react-icons
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── components/
│   ├── About.js
│   ├── Contact.js
│   ├── Header.js
│   ├── Portfolio.js
│   ├── Skills.js
│   └── portfolio/
│       ├── PortfolioHeader.js
│       ├── ProjectCard.js
│       ├── ProjectGrid.js
│       └── PortfolioCallToAction.js
├── data/
│   └── projectsData.js
├── public/
│   ├── images/
│   └── css/
├── src/app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── README.md
```

## 🎨 Customization

### Adding New Projects

1. Add your project data to `data/projectsData.js`:

   ```javascript
   {
     id: 5,
     title: "Your Project Name",
     description: "Project description...",
     image: "/images/your-project.png",
     liveUrl: "https://your-project-url.com",
     technologies: ["React", "Node.js", "MongoDB"],
     features: ["Feature 1", "Feature 2", "Feature 3"]
   }
   ```

2. Add project screenshot to `public/images/`

### Updating Personal Information

- Edit `components/About.js` for bio information
- Update `components/Skills.js` for skills and technologies
- Modify `components/Contact.js` for contact details

### Styling

- Global styles: `src/app/globals.css`
- Component-specific styles: Inline styles in components
- Bootstrap classes for responsive design

## 📱 Responsive Breakpoints

- **Desktop:** 4 projects per row (xl)
- **Laptop:** 3 projects per row (lg)
- **Tablet:** 2 projects per row (md)
- **Mobile:** 1 project per row (sm)

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your GitHub repository to Vercel**
2. **Import your project**
3. **Deploy automatically** - Vercel will detect Next.js and configure everything

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 📧 Contact

- **Email:** amirtavass62@gmail.com
- **Website:** [amirtavassoli.ir](https://amirtavassoli.ir)
- **GitHub:** [amirtavass]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Bootstrap](https://getbootstrap.com/) for responsive utilities
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

---

**⭐ If you found this portfolio helpful, please give it a star!**
