export const profile = {
  name: "Shaik Farheen",
  short: "Farheen",
  location: "Hyderabad",
  email: "reachout2shaikfarheen@gmail.com",
  phone: "9989810055",
  github: "https://github.com/Fari-2006",
  linkedin: "https://bit.ly/shaik-farheen",
  summary:
    "I'm an entry-level professional with a strong foundation in software development, data science and IoT, built through academic work and hands-on technical projects. I work comfortably with Python, Java and SQL, and build backends with Flask and FastAPI. I'm eager to bring that foundation into a challenging role where I can contribute to innovative solutions.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  { label: "CSE (IoT)", value: "VNR VJIET" },
  { label: "Data Science", value: "IIT Madras" },
  { label: "Currently Learning", value: "DSA  | AI/ML" },
  { label: "Looking For", value: "Entry-level Opportunities" },
];

export const education = [
  {
    degree: "Bachelor of Technology in CSE (IoT)",
    school: "VNR Vignana Jyothi Institute of Engineering and Technology",
    period: "2024 – 2028",
    details: ["CGPA: 8.61"],
  },
  {
    degree: "BS in Data Science and Applications",
    school: "IIT Madras",
    period: "2024 – 2028",
    details: ["Completed 44 credits", "Fundamental in Data Science: 32 credits", "CGPA: 8.25"],
  },
  {
    degree: "Intermediate",
    school: "Sri Chaitanya Junior College",
    period: "2022 – 2024",
    details: ["Percentage: 94.6%"],
  },
  {
    degree: "SSC",
    school: "Narayana Olympiad School",
    period: "2021 – 2022",
    details: ["GPA: 9.5"],
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "Java"] },
  { title: "Backend & APIs", items: ["FastAPI", "Flask", "RESTful APIs"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL"] },
  { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "ReactJS"] },
  {
    title: "Data Analytics & Visualization",
    items: ["Power BI", "NumPy", "Pandas"],
  },
];

export type Project = {
  index: string;
  title: string;
  subtitle?: string;
  tech: string[];
  description: string;
  extra?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Trekking Management Application",
    subtitle: "IIT Madras Modern Application Development (MAD1) Capstone Project",
    tech: ["Python", "Flask", "SQLite", "SQLAlchemy", "HTML/CSS", "Jinja2"],
    description:
      "Designed a centralized MVC web platform for managing trekking activities, user registrations, bookings, and staff operations.",
    extra:
      "Integrated SQLAlchemy ORM layers over SQLite database infrastructure to reduce manual data redundancy.",
  },
  {
    index: "02",
    title: "Re-plate — Smart Food Redistribution",
    tech: ["Java", "JavaScript", "CSS", "React", "JWT Authentication", "MongoDB"],
    description:
      "Smart Food Redistribution mobile app connecting common people, restaurants and NGOs to reduce food wastage.",
  },
  {
    index: "03",
    title: "Hyperspectral Food Inspection",
    tech: ["Python", "OpenCV", "Scikit-learn", "Streamlit / Flask", "Raspberry Pi"],
    description:
      "A compact hyperspectral imaging system that captures spatial and spectral data simultaneously across 400–1000 nm, enabling real-time, non-destructive detection of physical, chemical and biological contaminants in food products on production lines.",
  },
  {
    index: "04",
    title: "Seed Planting Robot",
    tech: ["Python", "Arduino IDE"],
    description: "An IoT-enabled autonomous robot designed to automate the seed sowing process.",
    highlights: [
      "Won in Ignite — National Level Project Expo conducted at Narsimha Reddy Engineering College.",
    ],
  },
];

export const achievements = [
  {
    kind: "win" as const,
    title: "Won in IDEATHON",
    org: "CBIT College",
  },
  {
    kind: "win" as const,
    title: "Won in Ignite — National Level Project Expo",
    org: "Narsimha Reddy Engineering College",
  },
  {
    kind: "mark" as const,
    title: "Semi Finalist — CodeVerse",
    org: "Turning Hut, the programming club of VNR VJIET",
  },
  {
    kind: "mark" as const,
    title: "Participant — NextGen-AI Hackathon",
    org: "St Peter Engineering College",
  },
  {
    kind: "mark" as const,
    title: "Participant — IDEATHON",
    org: "Programming Club of VNR VJIET",
  },
];

export const focusAreas = [
  {
    title: "Software Development",
    items: ["Python", "Java", "React", "Flask", "FastAPI"],
  },
  {
    title: "Data Science",
    items: ["Python", "NumPy", "Pandas", "Power BI", "Scikit-learn"],
  },
  { title: "IoT", items: ["Raspberry Pi", "Arduino IDE"] },
];
