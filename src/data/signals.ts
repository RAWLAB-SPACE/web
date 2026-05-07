import {
  FileText,
  FolderGit2,
  Camera,
  BriefcaseBusiness,
} from "lucide-react";

export const signals = [
  {
    label: "GitHub",
    title: "Technical activity",
    description:
      "Repositories, commits, build logs and experiments connected to RAWLAB_ systems.",
    href: "https://github.com/RAWLAB-SPACE",
    icon: FolderGit2,
  },
  {
    label: "Instagram",
    title: "Visual fragments",
    description:
      "Photography, movement, stories and social visual archive curated as a living collage.",
    href: "https://www.instagram.com/",
    icon: Camera,
  },
  {
    label: "LinkedIn",
    title: "Professional layer",
    description:
      "Frontend, mobile, design systems, architecture experience and technical profile.",
    href: "https://www.linkedin.com/in/adhesiboss/",
    icon: BriefcaseBusiness,
  },
  {
    label: "Documents",
    title: "Private access",
    description:
      "CV, case studies, technical profile and selected documents through controlled access.",
    href: "#documents",
    icon: FileText,
  },
];