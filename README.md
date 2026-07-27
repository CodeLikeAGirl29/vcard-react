# vcard-react 🚀

A fun CV card template for web developer's resume or personal portfolio page.

This project is a Next.js (App Router) + Tailwind CSS rebuild of a personal resume and case study page, following a classic vCard layout. It features a fixed profile sidebar next to a tabbed content area for About, Resume, Projects, Blog, and Contact sections.

[![CodeFactor](https://www.codefactor.io/repository/github/codelikeagirl29/vcard-react/badge)](https://www.codefactor.io/repository/github/codelikeagirl29/vcard-react)

![screenshot](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1785016033/vcard-react-screenshot_jwhrnt.png)

## 🌟 Features

- **Dynamic vCard Layout:** A persistent sidebar with profile information and navigation, complemented by a dynamic content area that switches sections without full page reloads.
- **Tabbed Content Navigation:** Seamlessly switch between 'About', 'Resume', 'Projects', 'Blog', and 'Contact' sections.
- **Centralized Data Management:** All personal information, experience, projects, and blog posts are managed from `data/resume.js` and `data/posts.js`.
- **Image Placeholders:** Intelligent image handling with placeholders that display until actual images are provided in the `public/` directory.
- **Responsive Design:** Built with Tailwind CSS for a fluid experience across all devices.
- **Blog Integration:** Individual, shareable pages for blog posts.
- **Project Showcase:** A visually appealing grid to display your projects with descriptions and links.
- **Contact Form:** An integrated form for easy communication.

## 🛠️ Tech Stack

- **Frontend Framework:** React, Next.js
- **Styling:** Tailwind CSS, CSS
- **Icons:** lucide-react, react-icons
- **Utilities:** `autoprefixer`, `postcss`

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CodeLikeAGirl29/vcard-react.git
   cd vcard-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## ▶️ Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open in your browser:**
   Navigate to `http://localhost:3000`.

### Editing Your Content

All your personal information, projects, and content can be easily updated by editing the files in the `data/` directory:

- **`data/resume.js`**: Contains all your personal details, contact information, experience, education, skills, projects, and social links.
- **`data/posts.js`**: Houses your blog post content, including titles, excerpts, and body paragraphs.

### Adding Real Images

Place your images in the `public/` directory at the paths referenced in your data files:

- **Profile Photo:** `public/profile.jpg` (referenced as `resume.photo`)
- **Project Screenshots:** `public/projects/<name>.png` (referenced in `data/resume.js` project entries)
- **Blog Covers:** `public/blog/<slug>.jpg` (referenced in `data/posts.js` entries)

## 📁 Project Structure

```
vcard-react/
├── app/
│   ├── blog/[slug]/page.js
│   ├── globals.css
│   └── layout.js
├── components/
│   ├── AboutTab.jsx
│   ├── BlogTab.jsx
│   ├── CaseStudies.jsx
│   ├── Contact.jsx
│   ├── CropMarks.jsx
│   ├── Experience.jsx
│   ├── Header.jsx
│   ├── ImpactStrip.jsx
│   ├── ProjectsGrid.jsx
│   ├── ProjectsTab.jsx
│   ├── ResumeTab.jsx
│   ├── SectionHead.jsx
│   ├── Sidebar.jsx
│   ├── SkillsAndEducation.jsx
│   ├── TechStack.jsx
│   ├── Thumbnail.jsx
│   └── iconUtils.js
├── data/
│   ├── posts.js
│   └── resume.js
├── public/
│   ├── profile.jpg
│   ├── projects/
│   │   ├── fl-re-drill.png
│   │   ├── gitprofile.png
│   │   ├── react-portfolio.png
│   │   ├── the-ski-barn.png
│   │   └── vcard-react.png
│   └── blog/
│       ├── architecting-multi-tenant-condo-compliance-portal.jpg
│       ├── engineering-a-responsive-vcard-portfolio.jpg
│       ├── from-code-to-real-estate.jpg
│       ├── lessons-from-4-years-freelancing.jpg
│       ├── optimizing-local-web-performance-ski-barn.jpg
│       └── why-i-built-fl-re-drill.jpg
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## 📚 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests where appropriate.

## 📄 License

This project is not licensed.

## 🔗 Important Links

- **Live Demo:** (Not provided in analysis, but typically hosted on Vercel or Netlify)
- **Author Profile:** [CodeLikeAGirl29](https://github.com/CodeLikeAGirl29)

---

<p align="center">
  © 2024 Lindsey Howard. All rights reserved.
  <br/>
  <a href="https://github.com/CodeLikeAGirl29/vcard-react">vcard-react</a> repository by Lindsey Howard.
  <br/>
  Built with ❤️ using Next.js and Tailwind CSS.
  <br/>
  <a href="https://github.com/CodeLikeAGirl29/vcard-react/fork">Fork</a> | <a href="https://github.com/CodeLikeAGirl29/vcard-react/stargazers">Star</a> | <a href="https://github.com/CodeLikeAGirl29/vcard-react/issues">Issue</a>
</p>

---

**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**
