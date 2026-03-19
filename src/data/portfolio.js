// =============================================
// Portfolio Data — B. Nitheesh Kumar
// =============================================

export const personal = {
  name: "B. Nitheesh Kumar",
  firstName: "Nitheesh",
  displayName: "Nitheesh Kumar",
  initials: "NK",
  title: "Full Stack Developer",
  subtitle: "MERN Stack Engineer",
  tagline: "Building scalable, user-centric web applications with clean code and modern design.",
  bio: "Passionate Full Stack Developer with 2+ years of experience building scalable web applications, particularly in the healthcare domain. Skilled in the MERN stack, I focus on creating clean, user-friendly, and high-performance applications. I enjoy solving real-world problems through code and continuously improving my development skills.",
  bioExtended: [
    "With hands-on experience at Tata Consultancy Services, I've contributed to enterprise healthcare platforms that serve thousands of users daily — focusing on performance, accessibility, and clean code.",
    "I'm driven by the belief that great software should be both functional and beautiful. Whether building RESTful APIs or pixel-perfect UIs, I bring the same commitment to quality and craftsmanship.",
    "When I'm not coding, I'm exploring new technologies, building side projects, or thinking about the next SaaS product to bring to life.",
  ],
  location: "Chennai, India",
  email: "nitheeshksr@gmail.com",
  phone: "+91 8681867612",
  github: "https://github.com/nitheesh0629",
  linkedin: "https://www.linkedin.com/in/nitheesh-kumar-0a26a1242",
  resume: "/resume.pdf",
  availableForWork: true,
};

export const education = [
  {
    id: 1,
    degree: "B.E. Computer Science Engineering",
    institution: "Rajalakshmi Engineering College",
    shortInstitution: "REC, Chennai",
    year: "July 2020 – May 2024",
    achievement: "CGPA: 8.20 / 10",
    description:
      "Studied core computer science fundamentals including data structures, algorithms, software engineering principles, object-oriented programming, and modern web technologies. Completed multiple academic projects applying full-stack development.",
    highlights: [
      "Graduated with First Class Distinction",
      "Specialized in web technologies and software engineering",
      "Strong foundation in algorithms, data structures, and system design",
    ],
  },
  {
    id: 2,
    degree: "High School (Class XII)",
    institution: "Kendriya Vidyalaya Air Force Station School",
    shortInstitution: "KV AFS School",
    year: "June 2018 – May 2020",
    achievement: "76.4%",
    description:
      "Completed higher secondary education with a focus on Science stream, building a strong analytical foundation that later supported engineering studies.",
    highlights: [
      "Science stream with strong academic performance",
    ],
  },
  {
    id: 3,
    degree: "Secondary School (Class X)",
    institution: "Kendriya Vidyalaya Air Force Station School",
    shortInstitution: "KV AFS School",
    year: "June 2017 – May 2018",
    achievement: "62.8%",
    description: "Completed secondary schooling with a well-rounded academic foundation.",
    highlights: [],
  },
];

export const skillGroups = [
  {
    id: 1,
    category: "Languages",
    icon: "Code2",
    color: "#F59E0B",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 72 },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    icon: "Monitor",
    color: "#3B82F6",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5 & CSS3", level: 88 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    id: 3,
    category: "Backend",
    icon: "Server",
    color: "#10B981",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    id: 4,
    category: "Tools & DevOps",
    icon: "Wrench",
    color: "#8B5CF6",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Agile / Scrum", level: 80 },
    ],
  },
];

export const techStack = [
  { name: "React.js", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Express.js", emoji: "⚡" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "JavaScript", emoji: "🟡" },
  { name: "Java", emoji: "☕" },
  { name: "Git", emoji: "🔀" },
  { name: "REST APIs", emoji: "🔌" },
];

export const experience = [
  {
    id: 1,
    title: "Systems Engineer",
    company: "Tata Consultancy Services",
    companyShort: "TCS",
    duration: "Jul 2024 – Present",
    type: "Full-time",
    location: "Chennai, India",
    domain: "Healthcare",
    description:
      "Developing and maintaining enterprise-grade frontend web applications for healthcare systems at one of India's largest IT services companies.",
    achievements: [
      "Developed and maintained enterprise frontend web applications for healthcare systems serving thousands of daily active users.",
      "Built responsive, accessible, and high-performance UI components using React.js, improving user engagement and satisfaction metrics.",
      "Collaborated cross-functionally with backend teams to seamlessly integrate RESTful APIs built on Node.js and Express.js.",
      "Optimized application performance by eliminating redundant re-renders and implementing efficient component-level state management.",
      "Participated actively in Agile ceremonies — sprint planning, daily standups, retrospectives, and peer code reviews.",
    ],
    techUsed: ["React.js", "Node.js", "Express.js", "JavaScript", "REST APIs", "Git"],
  },
  {
    id: 2,
    title: "Intern",
    company: "Tata Elxsi",
    companyShort: "Tata Elxsi",
    duration: "Oct 2023 – Jun 2024",
    type: "Internship",
    location: "Chennai, India",
    domain: "Automotive / Embedded Systems",
    description:
      "Contributed to an automotive software project at Tata Elxsi, gaining hands-on exposure to real-world industry practices in a professional engineering environment.",
    achievements: [
      "Worked on the Park by Memory feature using the Iceoryx inter-process communication middleware.",
      "Gained hands-on experience in automotive software development and real-world industry engineering practices.",
      "Collaborated with experienced engineers to understand production-grade software development workflows.",
    ],
    techUsed: ["C++", "Iceoryx", "Automotive Software", "IPC"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Healthcare Web Application",
    emoji: "🏥",
    tagline: "Enterprise healthcare platform for clinical workflow management.",
    description:
      "A full-stack healthcare web platform built for real-world clinical environments. Designed with usability and scalability at its core, the application streamlines clinical workflows, enhances patient data accessibility, and provides healthcare professionals with a clean, responsive interface for managing day-to-day operations.",
    highlights: [
      "Responsive UI optimized for clinical professionals",
      "Patient data management and real-time tracking",
      "Seamless API integration for live data sync",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/nitheesh0629",
    demo: null,
    featured: true,
    category: "Healthcare",
    accentColor: "#3B82F6",
  },
  {
    id: 2,
    name: "Clinic Appointment Booking",
    emoji: "📅",
    tagline: "Smart booking system with automated WhatsApp notifications.",
    description:
      "A smart clinic appointment booking platform that bridges the gap between clinics and patients. Patients can schedule, reschedule, or cancel appointments online, while automated WhatsApp Business API notifications ensure timely confirmations and reminders — significantly reducing no-shows and manual coordination overhead for clinic staff.",
    highlights: [
      "Online appointment scheduling with real-time slot availability",
      "Automated WhatsApp notifications for confirmations & reminders",
      "Clinic dashboard for managing appointments and patients",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WhatsApp Business API"],
    github: "https://github.com/nitheesh0629",
    demo: null,
    featured: true,
    category: "HealthTech",
    accentColor: "#10B981",
  },
  {
    id: 3,
    name: "Scrum Board — Jira Alternative",
    emoji: "📋",
    tagline: "Lightweight project management for agile development teams.",
    description:
      "A clean, fast, and intuitive Scrum board built as a modern alternative to Jira. Designed for small to mid-size development teams, it features drag-and-drop task management across sprint columns, backlog management, sprint planning and tracking, and team collaboration — delivering the essentials without enterprise complexity.",
    highlights: [
      "Drag-and-drop sprint board with Kanban columns",
      "Sprint planning, backlog management, and task tracking",
      "Team collaboration with progress visibility",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Drag & Drop API"],
    github: "https://github.com/nitheesh0629",
    demo: null,
    featured: true,
    category: "Productivity",
    accentColor: "#8B5CF6",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    icon: "☕",
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
  {
    id: 2,
    title: "Atlassian Agile Project Management",
    issuer: "Atlassian",
    icon: "📋",
    color: "#0052CC",
    bg: "#EFF6FF",
  },
];

export const achievements = [
  {
    id: 1,
    title: "150+ LeetCode Problems",
    description: "Solved 150+ problems on LeetCode in data structures and algorithms, sharpening problem-solving skills.",
    icon: "Code2",
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
  {
    id: 2,
    title: "Junior Typewriting Distinction",
    description: "Awarded Distinction in Junior Typewriting Certification, demonstrating strong typing speed and accuracy.",
    icon: "Award",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
];

export const interests = [
  {
    id: 1,
    title: "Building SaaS Products",
    description:
      "Passionate about ideating and building software-as-a-service products that solve real-world problems at scale.",
    icon: "Rocket",
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
  {
    id: 2,
    title: "Learning New Technologies",
    description:
      "Always exploring the latest advancements in web development, cloud computing, and software engineering best practices.",
    icon: "BookOpen",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    id: 3,
    title: "Problem Solving & Coding",
    description:
      "Enjoy tackling algorithmic challenges, building side projects, and pushing the boundaries of what's possible with code.",
    icon: "Code2",
    color: "#10B981",
    bg: "#F0FDF4",
  },
  {
    id: 4,
    title: "Modern UI/UX Design",
    description:
      "Deeply interested in crafting intuitive, accessible, and visually polished digital experiences that delight users.",
    icon: "Palette",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
];
