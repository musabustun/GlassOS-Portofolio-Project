import { AppID, FileNode, Project } from './types';

export const WALLPAPER_URL = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop";
// Changed to a reliable vertical abstract wallpaper for mobile
export const MOBILE_WALLPAPER_URL = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop";

export const PROJECTS: Project[] = [
  {
    title: "Next.js E-Commerce",
    description: "A full-featured headless e-commerce platform built with Next.js 14 and Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "#"
  },
  {
    title: "Nuxt.js Dashboard",
    description: "High-performance analytics dashboard using Nuxt 3 and Vue.js composition API.",
    tags: ["Nuxt.js", "Vue", "Tailwind"],
    link: "#"
  },
  {
    title: "GlassOS Portfolio",
    description: "The website you are currently browsing. A recursive masterpiece simulating an OS.",
    tags: ["React", "Framer Motion", "Gemini API"],
    link: "#"
  }
];

export const FILE_SYSTEM: FileNode[] = [
  {
    id: 'root',
    name: 'Macintosh HD',
    type: 'folder',
    children: [
      {
        id: 'documents',
        name: 'Documents',
        type: 'folder',
        children: [
          { id: 'resume_pdf', name: 'Resume.pdf', type: 'file', content: 'PDF Content...' },
          { id: 'project_specs', name: 'Project_Specs.docx', type: 'file', content: 'Specs for next big thing.' }
        ]
      },
      {
        id: 'development',
        name: 'Development',
        type: 'folder',
        children: PROJECTS.map((p, i) => ({
          id: `proj-${i}`,
          name: p.title,
          type: 'file',
          content: p.description
        }))
      },
      {
        id: 'system',
        name: 'System',
        type: 'folder',
        children: [
          { id: 'logs', name: 'sys.log', type: 'file', content: 'System boot... OK\nUser: Musab Yusuf Üstün' }
        ]
      }
    ]
  }
];

export const RESUME_DATA = {
  name: "Musab Yusuf Üstün",
  role: "Software Engineer & Full-Stack Developer",
  summary: "Born in 2007, I am a passionate Software Engineer specializing in the modern web ecosystem. I build high-performance applications using Next.js and Nuxt.js, combining technical precision with fluid user experiences.",
  experience: [
    {
      company: "Freelance / Open Source",
      role: "Full-Stack Developer",
      period: "2021 - Present",
      description: "Developed multiple high-impact web applications. Expert in transitioning legacy systems to modern React/Vue frameworks."
    },
    {
      company: "Personal Projects",
      role: "Lead Developer",
      period: "2020 - 2021",
      description: "Started coding journey, creating tools and libraries for the developer community."
    }
  ],
  skills: ["Next.js", "Nuxt.js", "React", "Vue.js", "TypeScript", "Node.js", "Tailwind CSS"]
};