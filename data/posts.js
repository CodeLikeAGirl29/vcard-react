// Edit this file to add, remove, or update blog posts.
// `body` is an array of paragraphs — add more strings for a longer post.

const posts = [
  {
    slug: "why-i-built-fl-re-drill",
    cover: "/blog/why-i-built-fl-re-drill.jpg",
    title: "Why I Built FL RE Drill",
    date: "June 2026",
    tag: "Web Development",
    excerpt:
      "Studying for the Florida Real Estate exam revealed a massive gap in modern, efficient study tools—so I built a custom, interactive web application to fix it.",
    body: [
      "Studying for the Florida Real Estate Sales Associate Licensing Exam can feel like trying to memorize a dry legal encyclopedia. Between mastering complex property math, state statutes, disclosure laws, and closing statement mechanics, the sheer volume of material is overwhelming. While preparing for the exam myself, I quickly grew frustrated with existing study resources. Most online practice systems were locked behind rigid paywalls, featured outdated interface designs, or lacked dynamic feedback. Flashcard apps were often cluttered with irrelevant general trivia rather than Florida-specific legal definitions. I realized I didn't just need to read more textbook chapters—I needed a fast, focused, and intuitive drill tool that allowed me to rapidly test memory retention on real-world test scenarios.",

      "To solve this, I designed and developed FL RE Drill (fl-re-drill.netlify.app), a targeted web application built specifically for rapid-fire exam prep. Leveraging modern frontend architecture with Next.js, React, and Tailwind CSS, I prioritized a distraction-free, responsive user experience that works seamlessly on desktop and mobile. The core functionality revolves around randomized card decks and categorized quiz modules, allowing users to drill down into specific weak spots—like Florida Statute Chapter 475 rules, agency relationships, or property tax calculations. One of the primary engineering challenges was organizing the question data and state logic to ensure seamless state management without performance lag, giving instant feedback on incorrect answers along with detailed explanations of the underlying legal concept.",

      "Building FL RE Drill turned a challenging exam preparation journey into an empowering practical engineering project. It bridges the gap between high-yield real estate theory and modern software design, providing an active-recall framework that makes studying far more efficient. The app is live and actively helping learners cut through the noise, lock in key concepts, and walk into exam day with genuine confidence. As I continue updating the question bank and refining the user interface based on real feedback, FL RE Drill remains a proud testament to using code to solve immediate, real-world problems.",
    ],
  },
  {
    slug: "lessons-from-4-years-freelancing",
    cover: "/blog/lessons-from-4-years-freelancing.jpg",
    title: "Lessons From 4+ Years of Freelancing as a Developer & Designer",
    date: "June 2026",
    tag: "Career",
    excerpt:
      "Navigating four years of freelance web development taught me that clean code is only half the battle—the real magic lies in clear communication, business alignment, and structured problem-solving.",
    body: [
      "When you transition into freelancing as a frontend developer and designer, it’s easy to assume your primary job is writing spotless JavaScript or crafting pixel-perfect CSS layouts. Over four years of running my own client projects, I learned very quickly that technical execution is only a fraction of what makes a freelance business successful. Operating independently forces you to wear every hat simultaneously: account manager, project planner, UI/UX researcher, and copy editor. It teaches you adaptability, accountability, and resilience in ways a traditional, siloed corporate role rarely can.",

      "One of the biggest breakthroughs in my freelance journey came while working on custom web solutions for local small businesses. I realized that clients rarely come to you asking for 'Next.js rendering' or 'PostgreSQL database isolation.' They come to you because their current online presence isn't generating leads, their internal operations are bogged down by manual processes, or their brand doesn't reflect the quality of their service. I shifted my entire approach from simply 'building websites' to diagnosing core business bottlenecks and engineering custom digital utilities that drive real operational efficiency.",

      "Today, those hard-earned years of freelancing directly shape how I approach every software project and client relationship. I prioritize transparent communication, clear scoping, and accessible design systems from day one. Whether I’m building multi-tenant management tools, specialized compliance portals, or sleek marketing interfaces, I treat every project as a strategic partnership—ensuring the final product isn't just functional, but delivers measurable value and an exceptional user experience.",
    ],
  },
  {
    slug: "from-code-to-real-estate",
    cover: "/blog/from-code-to-real-estate.jpg",
    title: "From Code to Real Estate — and Back",
    date: "May 2026",
    tag: "Career",
    excerpt:
      "Stepping into the world of real estate revealed surprising parallels to software development—and ultimately made me a sharper, more strategic developer.",
    body: [
      "At first glance, software engineering and real estate seem to occupy completely different universes. One takes place behind screens in code editors, dealing with logic syntax, APIs, and component structures; the other thrives on localized market analytics, face-to-face negotiations, contract disclosures, and physical property inspections. Yet, when I dove headfirst into the real estate industry, I was drawn to the same fundamental thrill that brought me to development: unpacking complex systems, understanding structural value, and guiding people through high-stakes decisions.",

      "What surprised me most was how directly my background in web development and systems design transferred to real estate. Analyzing local property market data, reviewing HOA compliance frameworks, and evaluating investment margins rely on the exact same systematic, analytical mindset used to debug application logic or architect a database schema. Furthermore, my UI/UX and digital marketing experience allowed me to evaluate property marketing strategies with a critical lens, spotting immediately where digital presentation and localized lead generation systems were falling short.",

      "Bridging these two worlds has given me a uniquely powerful perspective. Rather than choosing between technology and real estate, I’ve found that they complement each other perfectly. Understanding real estate domain knowledge enables me to build smarter, highly specialized tools for the industry—like interactive study drills, compliance portals, and real estate management platforms. Ultimately, this crossover has reinforced my core strengths: solving intricate problems, translating complex technical or legal ideas into clear solutions, and building software that addresses real market needs.",
    ],
  },
  {
    slug: "architecting-multi-tenant-condo-compliance-portal",
    cover: "/blog/architecting-multi-tenant-condo-compliance-portal.jpg",
    title:
      "Architecting a Multi-Tenant Compliance Portal for Florida HOA Rules",
    date: "April 2026",
    tag: "Full-Stack Dev",
    excerpt:
      "How I engineered a Next.js and Supabase multi-tenant web application featuring strict data isolation barriers and dynamic role routing for Florida HOA and condo compliance.",
    body: [
      "Florida's property management landscape operates under strict legal compliance frameworks, requiring HOAs and condominium associations to maintain up-to-date document access, board meeting records, and resident disclosures. Managing these requirements across multiple distinct residential communities requires software that guarantees high security, strict data isolation, and frictionless user access for property managers, board members, and residents alike.",

      "To tackle this problem, I engineered a full-stack multi-tenant web portal using Next.js, TypeScript, Tailwind CSS, and Supabase with PostgreSQL. The core architectural challenge was enforcing strict multi-tenancy at the database level. Utilizing Supabase Row Level Security (RLS) policies and Next.js proxy middleware, I built data isolation barriers ensuring that users from one housing community can never access or query data from another. Additionally, I implemented dynamic role-based routing to seamlessly route administrators to management dashboards while providing residents with a simplified document access view.",

      "Designing this compliance portal reinforced the importance of security-first full-stack architecture. Building software that handles real-world legal and property management data demands a rock-solid foundation where user roles, database permissions, and UI states align perfectly. The resulting system simplifies complex regulatory record-keeping while offering property managers a scalable, centralized platform to govern multi-community operations with ease.",
    ],
  },
  {
    slug: "optimizing-local-web-performance-ski-barn",
    cover: "/blog/optimizing-local-web-performance-ski-barn.jpg",
    title:
      "High-Performance Web Design for Local Marine Services: The Ski Barn Case Study",
    date: "March 2026",
    tag: "Web Development",
    excerpt:
      "A look at how redesigning and deploying a modern web interface for Ski Barn brought fast loading speeds, localized SEO, and clear customer conversion pathways to a coastal marine repair business.",
    body: [
      "For specialized service businesses—like coastal personal watercraft (PWC) and jet ski mechanics—a local business website serves as the ultimate digital storefront. Potential customers searching for emergency marine repairs on their phones need instant answers, clear service offerings, and frictionless contact options. When developing the digital interface for Ski Barn (ski-barn.com), my focus was creating a high-performance visual experience tailored directly to local marine watercraft owners.",

      "The project required balancing rich visual elements with lightning-fast performance. Using Next.js and Tailwind CSS deployed on Vercel, I structured the site to optimize asset loading, ensuring high-resolution imagery of watercraft and marine repair work loaded instantly without hurting mobile PageSpeed scores. I implemented structured schema markup for localized SEO, crafted custom action buttons for instant call/service scheduling, and established a responsive design system that looks crisp across desktop monitors and mobile devices out on the water.",

      "The end result is a streamlined digital platform that bridges the gap between high-quality local craftsmanship and modern web standards. By prioritizing mobile performance, clear UI hierarchy, and localized search visibility, the Ski Barn web interface demonstrates how strategic front-end engineering helps local service businesses stand out in competitive coastal markets.",
    ],
  },
  {
    slug: "engineering-a-responsive-vcard-portfolio",
    cover: "/blog/engineering-a-responsive-vcard-portfolio.jpg",
    title:
      "Engineering a Sleek, Modern vCard Portfolio with Next.js & Tailwind",
    date: "June 2026",
    tag: "UI/UX & Web Dev",
    excerpt:
      "A deep dive into building an interactive, component-driven vCard portfolio engineered for speed, clean UX, and seamless dynamic content rendering.",
    body: [
      "In a crowded digital landscape, a developer's portfolio needs to balance personality, technical capability, and effortless navigation. Rather than building a traditional, long-scrolling landing page, I wanted to create a sleek, component-driven vCard portfolio layout that feels like a polished desktop application. The goal was to provide visitors with a fast, interactive interface to explore my software projects, professional background, case studies, and writing without dealing with slow page reloads or cluttered layouts.",

      "Built using Next.js, React, and Tailwind CSS, the application relies on a modular tab architecture for instant view switching between About, Resume, Projects, and Blog sections. One of the main front-end considerations was ensuring fluid responsiveness across screen sizes. Using Tailwind's flexible grid and layout utilities, the interface dynamically transitions from a dual-pane desktop layout—complete with a fixed profile sidebar—into an intuitive mobile view. I also integrated Lucide icons, custom crop-mark aesthetics, and micro-interactions on cards to give the entire site a distinct, tactile design identity.",

      "Designing and refining this vCard portfolio reinforced the value of treating your own site as a flagship product. By focusing on clean component architecture, semantic markup, and optimized rendering with Next.js, the project provides a lightweight, highly extensible foundation. It serves as both a central hub for my work and a practical showcase of front-end engineering, clean typography, and modern UI performance.",
    ],
  },
];

export default posts;
