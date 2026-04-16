export const portfolioData = {
  name: "Ravi Thakur",
  title: "Aspiring Full-Stack Developer",
  roles: [
    "Aspiring Full-Stack Developer",
    "Frontend Developer",
    "MERN Stack Learner",
    "UI/UX Focused Builder",
    "Problem Solver",
  ],
  tagline: "I build responsive, user-focused web applications with clean frontend craft and growing full-stack depth.",
  email: "ravith776@gmail.com",
  phone: "+91-9528395833",
  location: "Mathura, Uttar Pradesh, India",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/ravithakur776",
    linkedin: "https://linkedin.com/in/ravithakur776",
  },

  // ── About ──
  about: {
    intro: "I'm an aspiring full-stack developer with hands-on experience building frontend and full-stack web applications using HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, and MongoDB.",
    description: "My design background in UI/UX helps me create user-centric interfaces, while my current focus on DSA and practical projects is helping me grow toward entry-level software engineering and frontend roles. I enjoy building responsive products that feel clean, structured, and genuinely useful.",
    highlights: [
      { label: "Based in", value: "Mathura, UP 🇮🇳" },
      { label: "Focus", value: "Frontend + MERN Stack" },
      { label: "Currently", value: "Building Lions Fitness" },
      { label: "Practicing", value: "DSA & Problem Solving" },
    ],
    funFacts: [
      { emoji: "🎨", fact: "Graphic design background" },
      { emoji: "🧠", fact: "Daily DSA practice" },
      { emoji: "🛠️", fact: "Builds from scratch" },
      { emoji: "🌐", fact: "Open to remote work" },
    ],
    techHighlights: [
      "Next.js", "React.js", "Node.js",
      "Express.js", "MongoDB", "Tailwind CSS",
    ],
  },

  // ── Skills (used in Step 5) ──
  skills: {
    frontend: [
      { name: "Next.js / React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 86 },
      { name: "HTML5 / CSS3", level: 94 },
      { name: "Responsive Web Design", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 74 },
      { name: "Firebase", level: 85 },
      { name: "MongoDB", level: 72 },
      { name: "REST APIs", level: 80 },
    ],
    tools: [
      { name: "Git / GitHub", level: 86 },
      { name: "VS Code", level: 95 },
      { name: "Firebase Console", level: 82 },
      { name: "Vercel", level: 85 },
      { name: "Adobe Photoshop", level: 78 },
    ],
  },

  // ── Projects (used in Step 6) ──
  projects: [
    {
      id: 1,
      title: "Lions Fitness",
      description: "A full-stack gym management web app with role-based access for admin, trainer, and member dashboards, built with Next.js App Router, Firebase Auth, Firestore, and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "Firebase Auth", "Firestore"],
      github: "https://github.com/ravithakur776",
      live: "https://lions-fitness.vercel.app",
      featured: true,
      color: "#C04828",
    },
    {
      id: 2,
      title: "EcoFuture",
      description: "A sustainable packaging showcase website with category filtering, autocomplete search, Chart.js data visuals, and smooth scroll-triggered animations using pure JavaScript.",
      tags: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
      github: "https://github.com/ravithakur776",
      live: "#",
      featured: true,
      color: "#0ea5e9",
    },
    {
      id: 3,
      title: "Frontend Web Projects",
      description: "Two responsive websites developed from scratch using vanilla JavaScript, DOM manipulation, and event-driven UI patterns with mobile-first layouts and semantic HTML.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      github: "https://github.com/ravithakur776",
      live: "#",
      featured: false,
      color: "#8b5cf6",
    },
  ],

  // ── Experience (used in Step 7) ──
  experience: [
    {
      id: 1,
      role: "Graphic Designer",
      company: "Lakshya Academy",
      period: "2024 — March 2026",
      location: "Mathura, Uttar Pradesh, India",
      description: "Designed 50+ graphics for marketing campaigns, social media, and educational content, while producing promotional videos and applying UI/UX principles to create clearer, more engaging visual communication.",
      tags: ["Graphic Design", "UI/UX", "Video Editing"],
    },
    {
      id: 2,
      role: "Content Specialist / Marketing Intern",
      company: "Kshitiksha Foundation",
      period: "2024",
      location: "Remote",
      description: "Created structured content and marketing material in a remote professional setup, communicating technical and educational concepts clearly while working on schedule with stakeholders.",
      tags: ["Content Writing", "Marketing", "Communication"],
    },
  ],

  education: {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Dr. Bhim Rao Ambedkar University, Agra",
    year: "Graduated 2026",
  },

  certifications: [
    "Kshitiksha Foundation - Content Writing & Marketing Certification",
    "Apna College - MERN Stack & Data Structures and Algorithms (2025 - Present)",
  ],
};
