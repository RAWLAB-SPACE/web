export type ExperienceSignal = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  status?: string;
  description: string;
  highlights: string[];
  stack: string[];
  accent: "violet" | "cyan" | "fuchsia";
};

export const experienceSignals: ExperienceSignal[] = [
  {
    id: "banco-chile",
    company: "Banco de Chile",
    role: "Frontend & Mobile Developer",
    period: "2021 — 2025",
    location: "Santiago, Chile",
    status: "Enterprise Banking",
    description:
      "Development of mobile banking experiences, scalable design systems and high-impact digital products used daily by thousands of users.",
    highlights: [
      "Mi Banco App",
      "Mi Pass",
      "Design System",
      "Lollapalooza campaign",
      "Teleton integrations",
      "Frontend workshops",
      "Technical documentation",
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Design Systems",
      "Jest",
      "APIs",
      "UX",
    ],
    accent: "violet",
  },
  {
    id: "lisit",
    company: "LISIT",
    role: "Senior Frontend & Mobile Developer",
    period: "2025 — Present",
    location: "Remote / Chile",
    status: "Architecture & Product Systems",
    description:
      "Frontend architecture, mobile systems and technical proposal development for enterprise and institutional platforms.",
    highlights: [
      "Integrapp",
      "Mobile Architecture",
      "Technical Estimations",
      "Client Proposals",
      "UX Systems",
      "React Native ecosystems",
    ],
    stack: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Architecture",
      "Figma",
      "Frontend Systems",
    ],
    accent: "cyan",
  },
  {
    id: "rawlab",
    company: "RAWLAB_",
    role: "Creative Engineering Lab",
    period: "Ongoing",
    location: "Independent",
    status: "Experimental Interface System",
    description:
      "Experimental frontend laboratory focused on cinematic interfaces, motion systems, visual storytelling and creative web experiences.",
    highlights: [
      "Interactive UI",
      "Motion Systems",
      "Creative Frontend",
      "Visual Identity",
      "Performance Optimization",
      "Experimental Design",
    ],
    stack: [
      "Next.js",
      "Framer Motion",
      "TailwindCSS",
      "Creative Coding",
      "Performance",
      "Visual Systems",
    ],
    accent: "fuchsia",
  },
];