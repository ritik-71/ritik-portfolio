import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Network,
  Server,
  Sparkles,
} from "lucide-react";

export const siteConfig = {
  name: "Ritik Kumar Singh",
  title: "Full Stack Developer | Software Engineer",
  description:
    "B.Tech Computer Science Engineering student at Lovely Professional University building secure full-stack systems with React, Next.js, Java, Spring Boot, REST APIs, and SQL databases.",
  email: "sinritik948@gmail.com",
  phone: "+91-9471496054",
  location: "India",
  resume: "/Ritik%20Kumar%20Singh.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ritik-71",
      icon: GitBranch,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ritik6171",
      icon: Network,
    },
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const skills = [
  { name: "C++", category: "DSA / Problem Solving", icon: FileCode2 },
  { name: "Java", category: "Backend Engineering", icon: Code2 },
  { name: "JavaScript", category: "Frontend Engineering", icon: Sparkles },
  { name: "Python", category: "Automation / AI", icon: BrainCircuit },
  { name: "R", category: "Analytics", icon: BrainCircuit },
  { name: "React JS", category: "Interactive UI", icon: Code2 },
  { name: "Next.js", category: "Full Stack Apps", icon: Server },
  { name: "Node JS", category: "API Runtime", icon: Server },
  { name: "Spring Boot", category: "REST APIs", icon: BriefcaseBusiness },
  { name: "MySQL", category: "Relational DB", icon: Database },
  { name: "MS SQL Server", category: "Enterprise DB", icon: Database },
  { name: "Postman", category: "API Testing", icon: Sparkles },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Java", "JavaScript", "Python", "R"],
  },
  {
    title: "Frameworks & Technologies",
    items: ["React JS", "Next.js", "Node JS", "Spring Boot", "REST API"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Material UI"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MS SQL Server"],
  },
  {
    title: "Core Concepts",
    items: ["Data Structures and Algorithms", "Problem Solving", "Responsive Web Design"],
  },
];

export const projects = [
  {
    title: "RTI Portal",
    description:
      "A full-stack RTI request management platform built during the NIC Rajya Sabha internship, featuring CRUD operations, filtering, authentication, admin workflows, RBAC, and dashboard-driven tracking.",
    stack: ["Next.js", "Java", "Spring Boot", "REST API", "MS SQL Server"],
    github: "https://github.com/ritik-71/RTI-Portal",
    live: "",
    period: "Jun 2025 - Aug 2025",
    highlights: ["RBAC security", "Admin dashboard", "Status workflows"],
  },
  {
    title: "Inventory Management System",
    description:
      "A responsive inventory operations system built for tracking product stock, categories, records, real-time status, dynamic tables, and structured forms.",
    stack: ["React", "Java", "REST API", "MySQL"],
    github: "https://github.com/ritik-71/Inventory-Management-System",
    live: "",
    period: "Jun 2025 - Aug 2025",
    highlights: ["Stock tracking", "Dynamic tables", "Real-time visualization"],
  },
  {
    title: "Facial Expression Detection AI",
    description:
      "An advanced AI model leveraging deep learning and computer vision to accurately detect and classify real-time human facial expressions from live video feeds.",
    stack: ["Python", "TensorFlow", "OpenCV", "Keras", "Deep Learning"],
    github: "https://github.com/ritik-71/Facial-Expression-Detection",
    live: "",
    period: "Jan 2025 - Apr 2025",
    highlights: ["Real-time detection", "CNN Architecture", "High accuracy"],
  },
  {
    title: "Developer Analytics Foundation",
    description:
      "A learning and certification-driven analytics track combining SAP Analytics Cloud, generative models, automation training, and Python/R fundamentals.",
    stack: ["SAP Analytics Cloud", "Python", "R", "UiPath", "Generative Models"],
    github: "https://github.com/ritik-71",
    live: "",
    period: "2025 - 2026",
    highlights: ["Analytics certified", "Automation training", "AI fundamentals"],
  },
];

export const experiences = [
  {
    company: "NIC Rajya Sabha Internship",
    role: "Project Intern",
    period: "Jun 2025 - Aug 2025",
    tech: ["Next.js", "Java", "Spring Boot", "REST API", "MS SQL Server"],
    contributions: [
      "Built and maintained backend APIs and dashboards for a data-driven RTI Portal to track information requests and appeals.",
      "Implemented role-based access control and secure data handling to strengthen application security.",
      "Improved application tracking and status workflows for administrative users.",
    ],
  },
  {
    company: "Vinculum Group Internship",
    role: "Project Intern",
    period: "Jun 2025 - Aug 2025",
    tech: ["Java", "React", "MySQL", "Business Systems"],
    contributions: [
      "Developed a web-based Inventory Management System for tracking product stock, categories, and records.",
      "Created responsive UI components for real-time data visualization and improved usability.",
      "Designed dynamic tables and structured forms to streamline inventory operations.",
    ],
  },
];

export const stats = [
  { label: "CGPA", value: "7.4" },
  { label: "Internships", value: "2" },
  { label: "Core Stack", value: "React + Java" },
];

export const education = [
  {
    institution: "Lovely Professional University",
    program: "B.Tech Computer Science and Engineering",
    period: "2022 - 2026",
    score: "CGPA: 7.4",
  },
  {
    institution: "R.P.S Public School",
    program: "Intermediate",
    period: "2020 - 2022",
    score: "72%",
  },
  {
    institution: "R.P.S Public School",
    program: "Matriculation",
    period: "2018 - 2020",
    score: "84%",
  },
];

export const certifications = [
  "Data Analyst - SAP Analytics Cloud Certified",
  "Automation Developer Associate Training - UiPath, 2026",
  "Generative Models for Developers - Infosys, 2025",
];
