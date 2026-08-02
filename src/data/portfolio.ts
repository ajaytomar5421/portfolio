import profileImg from "@/assets/profile.jpg";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiPostman,
  SiAnthropic,
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

export const personal = {
  name: "Ajay Tomar",
  tagline:
    "Aspiring Full Stack Java Developer | React Developer | Spring Boot Enthusiast | Problem Solver",
  location: "Khoda Sector 62A, Noida, Uttar Pradesh, India",
  email: "ajaytomar80060@gmail.com",
  phone: "+91 6396595226",
  linkedin: "https://www.linkedin.com/in/ajay-tec",
  github: "https://github.com/ajaytomar5421",
  profileImg,
  resumeUrl: "/resume.pdf",
  roles: [
    "Aspiring Full Stack Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Java Programmer",
    "Software Engineer",
  ],
};

export const summary =
  "I am a Computer Science graduate who enjoys building modern web applications using Java, Spring Boot, React, and REST APIs. I like exploring new technologies, solving programming problems, and continuously improving my development skills. I am focused on writing clean, maintainable code and growing as a full stack engineer.";

export const objective =
  "To join a forward-thinking engineering team as a software developer where I can apply my Java, Spring Boot, and React skills to build reliable, user-focused products, learn from experienced engineers, and grow into a well-rounded full stack developer.";

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "2022 – 2026",
    detail: "CGPA: 8.03",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Java", Icon: FaJava, color: "#f89820" },
      { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
      { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572b6" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", Icon: FaReact, color: "#61dafb" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", Icon: FaJava, color: "#f89820" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6db33f" },
      { name: "REST APIs", Icon: TbApi, color: "#a78bfa" },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MySQL", Icon: FaDatabase, color: "#64748b" }],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", Icon: VscVscode, color: "#3b82f6" },
      { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
      { name: "Git", Icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", Icon: FaGithub, color: "#ffffff" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "ChatGPT", Icon: RiOpenaiFill, color: "#10a37f" },
      { name: "Claude", Icon: SiAnthropic, color: "#d97757" },
    ],
  },
];

export const internship = {
  company: "Softpro India",
  duration: "2 Months",
  description:
    "Gained exposure to real-world software development practices, collaborated on structured learning assignments, and strengthened my understanding of Java and web development fundamentals in a professional setting.",
};

export const projects = [
  {
    title: "Product Management CRUD Application",
    description:
      "A full-stack CRUD application built with a React.js frontend and Java Spring Boot backend. Users can create, read, update, and delete Product records through a clean, responsive interface backed by REST APIs.",
    features: [
      "Create Product",
      "Read Product Details",
      "Update product",
      "Delete Product",
      "REST API Integration",
      "Responsive UI",
    ],
    stack: ["React", "Java", "Spring Boot", "Tailwind CSS", "REST API"],
    github: "https://github.com/ajaytomar5421",
    demo: null,
  },
];

export const achievements = [
  "Passionate Java Learner",
  "Consistent Technology Learner",
  "Actively Building Development Skills",
];

export const codingProfiles = [
  {
    name: "GitHub",
    url: "https://github.com/ajaytomar5421",
    Icon: FaGithub,
    available: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ajay-tec",
    Icon: FaLinkedin,
    available: true,
  },
  { name: "LeetCode", url: null, Icon: SiLeetcode, available: false },
  { name: "HackerRank", url: null, Icon: SiHackerrank, available: false },
  { name: "GeeksforGeeks", url: null, Icon: SiGeeksforgeeks, available: false },
];

export const softSkills = [
  "Problem Solving",
  "Quick Learner",
  "Team Collaboration",
  "Adaptability",
  "Communication",
  "Time Management",
  "Analytical Thinking",
];

export const interests = [
  "Full Stack Development",
  "Backend Development",
  "Learning New Technologies",
  "Problem Solving",
  "Software Engineering",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Internship", href: "#internship" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
