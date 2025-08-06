# Saurabh Maurya - Portfolio

A modern, responsive portfolio website built with Next.js, inspired by the design of [Prasen.dev](https://www.prasen.dev/).

## 🚀 Features

- **Modern Design**: Clean and professional design inspired by Prasen.dev
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Built-in dark mode support
- **Fast Performance**: Optimized with Next.js 14
- **SEO Optimized**: Proper meta tags and structured data
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React & React Icons
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/ (future components)
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following in `src/app/page.tsx`:

- **Profile Image**: Replace the Cloudinary URL with your image
- **Name & Title**: Update your name and professional title
- **About Section**: Modify the about text to match your background
- **Skills**: Add or remove skills from the skills array
- **Projects**: Update project details, links, and descriptions
- **Social Links**: Update your social media links

### Styling

The design uses Tailwind CSS with custom components defined in `src/app/globals.css`. You can:

- Modify color schemes in the CSS variables
- Update component styles in the `@layer components` section
- Add new utility classes as needed

### Projects

Projects are defined in the `projects` array with the following structure:

```typescript
{
  name: "Project Name",
  repo: "GitHub Repository URL",
  site: "Live Site URL (or '#' if not deployed)",
  description: "Project description",
  techStack: ["Tech1", "Tech2", "Tech3"],
  type: "Web 2" | "Web 3",
  featured: boolean
}
```

## 🎨 Design Features

- **Hero Section**: Clean introduction with profile image
- **About Section**: Personal background and interests
- **Skills Section**: Technology stack display
- **Featured Projects**: Highlighted projects in a grid layout
- **All Projects**: Complete project showcase
- **Contact Section**: Social media links and contact information
- **Responsive Design**: Mobile-first approach

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy loading for better performance
- SEO optimized with proper meta tags

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [Prasen.dev](https://www.prasen.dev/)
- Icons from [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ by Saurabh Maurya
