export const portfolioData = {
  personal: {
    name: "B. S. Premswaroop",
    role: "Aspiring Software Developer & AI/ML Engineer",
    degree: "B.E. in Computer Science and Engineering (AI & ML)",
    institution: "A.J. Institute of Engineering and Technology, Mangaluru",
    expectedGraduation: "2027",
    cgpa: "8.08 (7th Semester)",
    location: "Mangaluru, Karnataka, India",
    email: "prem.swaroop206@gmail.com",
    phone: "+91 8277536401",
    linkedin: "https://linkedin.com/in/prem-swaroop",
    github: "https://github.com/premswaroop", // placeholder customizable link
    resumePdf: "/Premswaroop_Resume.pdf",
    shortBio: "Computer Science (AI & ML) undergraduate with strong competencies in Python, full-stack web development, relational and NoSQL databases, and intelligent system architectures. Passionate about engineering high-impact software solutions that bridge scalable backends with intuitive user interfaces.",
    aim: "To begin my professional career in a growth-oriented organization where I can apply my knowledge of programming, web technologies, databases, and problem-solving to develop practical and innovative solutions.",
    contribution: "To contribute through my technical skills, willingness to learn, effective communication, and ability to work collaboratively while continuously improving my knowledge and adapting to new technologies.",
    careerFocus: [
      "Software Developer",
      "Python Developer",
      "Web Developer",
      "AI/ML Engineer",
      "Data / AI Intern",
      "Graduate Engineer Trainee"
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Fluent" },
      { name: "Kannada", level: "Fluent" }
    ],
    hobbies: ["Dancing", "Exploring Emerging Technologies", "Competitive Problem Solving"]
  },

  skills: {
    programming: [
      { name: "Python", details: "OOP, Data Structures, Scripting, Standard Libraries", badge: "Primary" },
      { name: "C", details: "Procedural Programming, Memory Concepts, Problem Solving", badge: "Core" },
      { name: "JavaScript", details: "ES6+, DOM Manipulation, Async/Await, Web APIs", badge: "Web" }
    ],
    webDevelopment: [
      { name: "FastAPI", details: "High-performance Python REST APIs, Pydantic, Swagger", badge: "Backend" },
      { name: "React.js", details: "Component Architecture, Hooks, State Management, Vite", badge: "Frontend" },
      { name: "HTML5 & CSS3", details: "Semantic Markup, Flexbox, Grid, Responsive Design", badge: "Core UI" },
      { name: "Full-Stack Integration", details: "RESTful Endpoints, Client-Server Sync, CORS, JSON", badge: "Full-Stack" }
    ],
    databases: [
      { name: "SQL", details: "Relational Queries, Joins, Triggers, Integrity Constraints", badge: "Relational" },
      { name: "SQLite", details: "Embedded Database Architecture, Fast Query Optimization", badge: "Lightweight" },
      { name: "MongoDB", details: "Document Storage, BSON Data Models, NoSQL Concepts", badge: "NoSQL" }
    ],
    tools: [
      { name: "VS Code", details: "Primary IDE, Extensions, Integrated Debugging", badge: "Tooling" },
      { name: "Anti-Gravity", details: "Advanced Agentic Coding Environment & Workspaces", badge: "AI Dev" },
      { name: "Git & GitHub", details: "Version Control, Branching, Collaborative Workflows", badge: "VCS" },
      { name: "Microsoft Excel", details: "Data Analysis, Formulas, Reporting & Formatting", badge: "Data Tool" },
      { name: "JSON", details: "Data Serialization & API Payload Structuring", badge: "Format" }
    ],
    professional: [
      { name: "Analytical Problem Solving", details: "Translating real-world problems into algorithmic structures" },
      { name: "Collaborative Teamwork", details: "Active communication, peer code review, and goal synchronization" },
      { name: "Technical Communication", details: "Clear technical documentation, reporting, and presentations" },
      { name: "Rapid Adaptability", details: "Eager to master emerging frameworks and evolving tech stacks" }
    ]
  },

  projects: [
    {
      id: "pathfinder-ai",
      title: "PathFinder AI — Intelligent Campus Placement ERP",
      subtitle: "Enterprise Placement Automation & AI-Driven Candidate Matching",
      category: "Full-Stack & AI ERP",
      featured: true,
      technologies: ["React.js", "FastAPI", "Python", "SQLite", "REST APIs"],
      summary: "A unified enterprise platform engineered to eliminate paper-based placement bottlenecks by connecting students, corporate recruiters, and Training & Placement Officers (TPOs) in a centralized, automated workflow.",
      description: "Traditional campus placement workflows rely on fragmented spreadsheets and manual record audits, causing communication delays and data redundancy. PathFinder AI introduces an automated ERP ecosystem equipped with AI-powered resume parsing, dynamic candidate ranking, and multi-tier role governance.",
      highlights: [
        "Architected role-based dashboards for Students, Corporate Recruiters, and TPO Administrators.",
        "Integrated an AI placement matching pipeline that parses resume attributes and ranks candidate suitability against job drive criteria.",
        "Engineered automated eligibility validation checking CGPA thresholds, backlogs, and departmental prerequisites.",
        "Designed and normalized an SQLite database schema comprising 6+ core entity tables (Students, Placement Drives, Applications, Recruiters, Admin, Audit Logs).",
        "Streamlined interview scheduling, drive progress tracking, and governance audit trails for institutional accountability."
      ],
      architecture: [
        { title: "Frontend Layer", desc: "Interactive, responsive React.js single-page application with modular role-based navigation." },
        { title: "Backend Services", desc: "FastAPI Python backend with asynchronous request routing and structured RESTful endpoints." },
        { title: "Data Storage", desc: "Normalized SQLite relational database with strict foreign keys and relational integrity." },
        { title: "AI Recommendation", desc: "Matching engine evaluating skill matrices, certifications, and academic performance." }
      ],
      github: "https://github.com/premswaroop/pathfinder-ai", // placeholder
      demo: "https://pathfinder-ai-preview.vercel.app", // placeholder
      isPlaceholderLinks: true
    },
    {
      id: "smart-expense-tracker",
      title: "Smart Expense Tracker — Personal Finance Management System",
      subtitle: "Daily Expense Analytics & Budget Optimization Platform",
      category: "Web & Backend",
      featured: true,
      technologies: ["Python", "FastAPI", "HTML5", "CSS3", "SQLite"],
      summary: "A responsive personal finance web application built to help users record, categorize, and monitor daily expenditures while gaining actionable visual insights into monthly spending trends.",
      description: "Managing personal expenditures without structured tracking often leads to budget overruns. The Smart Expense Tracker delivers a lightweight, reliable web portal with instant transaction logging, automated categorization, and real-time monthly spending summaries.",
      highlights: [
        "Implemented secure transaction CRUD operations allowing users to add, update, and categorize expenses in real-time.",
        "Developed custom categorization logic (Food, Travel, Education, Utilities, Entertainment) for granular budget tracking.",
        "Engineered an interactive summary dashboard displaying monthly expenditure totals and categorical breakdowns.",
        "Built lightweight backend services in FastAPI ensuring sub-second response times and zero bloat.",
        "Structured a resilient SQLite schema for historical spending persistence and aggregated query generation."
      ],
      architecture: [
        { title: "User Interface", desc: "Clean, responsive dashboard built with modern HTML5 and semantic CSS3 styling." },
        { title: "API Engine", desc: "FastAPI REST API managing transaction payloads and validation schemas." },
        { title: "Database Engine", desc: "SQLite transactional storage optimized for date-range aggregations." }
      ],
      github: "https://github.com/premswaroop/smart-expense-tracker", // placeholder
      demo: "https://expense-tracker-preview.vercel.app", // placeholder
      isPlaceholderLinks: true
    },
    {
      id: "healvision-ai",
      title: "HealVision AI — Health Tech Platform",
      subtitle: "National 24-Hour Hackathon Prototype (NEXATHON 2025)",
      category: "AI Prototype & Hackathon",
      featured: false,
      technologies: ["Python", "AI/ML", "Prototyping", "Rapid Full-Stack"],
      summary: "Conceptualized and engineered an intelligent healthcare accessibility platform within an intensive 24-hour sprint during NEXATHON 2025.",
      description: "Built under high-pressure competitive conditions at Shree Devi Institute of Technology, HealVision AI was designed to provide rapid health assessments and intelligent medical insights. The prototype combined intuitive UI flows with algorithmic problem-solving to present a workable health tech concept.",
      highlights: [
        "Collaborated under 24-hour countdown constraints to conceptualize, design, and code the full platform.",
        "Engineered core Python modules for health telemetry evaluation and preliminary data matching.",
        "Delivered a live project pitch and architectural defense before an expert judging panel."
      ],
      github: "https://github.com/premswaroop/healvision-ai", // placeholder
      demo: null,
      isPlaceholderLinks: true
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
      institution: "A.J. Institute of Engineering and Technology (AJIET)",
      location: "Mangaluru, Karnataka",
      affiliation: "Affiliated to VTU Belagavi | Approved by AICTE | Accredited by NAAC & NBA",
      duration: "2023 – Expected 2027",
      status: "Currently in 7th Semester",
      grade: "CGPA: 8.08",
      keyCoursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Python/C)",
        "Database Management Systems (DBMS)",
        "Artificial Intelligence & Machine Learning",
        "Full-Stack Web Development",
        "Operating Systems & Computer Networks"
      ]
    },
    {
      degree: "Pre-University Course (PUC)",
      field: "Science Stream (PCMB)",
      institution: "Expert P.U. College",
      location: "Mangaluru, Karnataka",
      duration: "Completed",
      grade: "Score: 83%",
      keyCoursework: ["Physics", "Chemistry", "Mathematics", "Biology"]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      field: "All Standard Subjects",
      institution: "Kendriya Vidyalaya N.O. 1, Panambur",
      location: "Mangaluru, Karnataka",
      duration: "Completed",
      grade: "Score: 89%",
      keyCoursework: ["Mathematics", "Science", "Social Science", "English", "Hindi"]
    }
  ],

  certifications: [
    {
      title: "Python Fundamentals & Mastering Python",
      issuer: "Infosys Springboard",
      year: "2024",
      badge: "Programming",
      description: "Comprehensive mastery of Python language fundamentals, object-oriented programming paradigms, memory models, standard library modules, and foundational data structures.",
      skills: ["Python", "OOP", "Data Structures", "Algorithm Design"]
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle Cloud Infrastructure (OCI)",
      year: "2025",
      badge: "Cloud Computing",
      description: "Demonstrated fundamental knowledge of public cloud concepts, core OCI architecture, cloud security, Identity and Access Management (IAM), compute, storage, and virtual networking.",
      skills: ["Cloud Architecture", "OCI Compute & Storage", "Cloud Security", "Networking"]
    },
    {
      title: "Introduction to MS Excel",
      issuer: "Microsoft • Simplilearn",
      year: "2025",
      badge: "Data Tools",
      description: "Hands-on certification in spreadsheet management, data formatting, lookup functions, structured formulas, and foundational data visualization.",
      skills: ["Spreadsheet Modeling", "Formulas & Functions", "Data Formatting", "Data Analysis"]
    }
  ],

  hackathons: [
    {
      title: "NEXATHON 2025 — National 24-Hour Hackathon",
      organizer: "Shree Devi Institute of Technology",
      year: "2025",
      role: "Core Developer & Presenter",
      project: "HealVision AI Health Platform",
      achievement: "Successfully conceptualized, prototyped, and deployed the HealVision AI health platform within a strict 24-hour sprint.",
      highlights: [
        "Rapid cross-functional collaboration and milestone management under high pressure.",
        "Engineered a functioning prototype addressing real-world digital healthcare needs.",
        "Presented solution architecture to a panel of academic and industry evaluators."
      ]
    },
    {
      title: "Empathy Encryption Hackathon",
      organizer: "Unsaid Talks Education Pvt. Ltd.",
      year: "2024 / 2025",
      role: "Collaborative Contributor",
      project: "Empathetic Social Impact Platform",
      achievement: "Co-created an empathetic technological solution designed to alleviate modern digital social-impact challenges.",
      highlights: [
        "Employed user-centric design thinking to map social-impact pain points into technical features.",
        "Collaborated on software architecture prioritizing accessibility, user trust, and digital wellbeing.",
        "Synthesized technical implementation with human-centered empathy principles."
      ]
    }
  ]
};
