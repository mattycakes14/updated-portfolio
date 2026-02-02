// Connect icons
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/resume.png";
import linkedInIcon from "../assets/linked.png";
import github from "../assets/github.png";
import clad from "../assets/clad.jpg";
import eatTogether from "../assets/eat_together.jpg";
import webImpact from "../assets/web_impact.jpg";
import x from "../assets/x.png";
import cladMedia from "../assets/clad_media.png";
import eatMedia from "../assets/eat_media.png";
import impactMedia from "../assets/impact_media.png";

export const experiences = [
  {
    id: 1,
    projectName: "Clad Labs (YC F25)",
    projectDescription:
      "YC-backed startup democratizing code generation tools for developers. Built backend systems for ad content processing and personalized recommendation pipelines using LangGraph and Supabase.",
    externalLink: "https://www.cladlabs.ai/",
    icon: clad,
    media: cladMedia,
  },
  {
    id: 2,
    projectName: "Eat Together",
    projectDescription:
      "Student organization connecting UW students through shared meals. Developed a mobile app with restaurant discovery features, matching algorithms, and swipe-based UI serving 500+ users across 200+ meetups.",
    externalLink: "https://www.eat-together.org/about",
    icon: eatTogether,
    media: eatMedia,
  },
  {
    id: 3,
    projectName: "Web Impact – iMuslims",
    projectDescription:
      "RSO building web solutions for campus clubs and nonprofits. Created dynamic member showcase pages and integrated headless CMS for client content management using Next.js.",
    externalLink: "https://imuslims.vercel.app/",
    icon: webImpact,
    media: impactMedia,
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
      "Go",
      "Swift",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Flask",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Selenium",
      "Expo Go",
      "Tailwind",
      "BeautifulSoup",
      "LangChain",
      "NumPy",
      "TensorFlow",
      "PyTorch",
      "Transformers",
      "HuggingFace",
      "FAISS",
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      "Firebase",
      "Supabase",
      "Redis",
      "Qdrant",
      "Pinecone",
      "Docker",
      "Alembic",
      "Git",
      "Postman",
      "Figma",
      "AWS (S3, EC2)",
    ],
  },
];

export const education = {
  university: {
    name: "University of Washington, Paul G. Allen School",
    degree: "Bachelor of Science: Computer Science",
    graduation: "Expected June 2027",
    gpa: "3.96/4.0",
    blurb: "Dean's List",
  },
  coursework: [
    "Object-Oriented Programming",
    "Data Structures and Parallelism",
    "Hardware/Software Interface",
    "Linear Algebra",
    "Multivariable Calculus",
    "Probability & Computational Complexity",
  ],
  activities: [
    {
      name: "Lead Developer @ Eat Together",
      description:
        "Led development of a React Native mobile app serving 500+ UW students. Conducted user research to identify key decision factors (dietary restrictions, cuisine preferences, group dynamics) and built a Tinder-style swipe interface for restaurant discovery. Integrated Yelp API with dynamic query construction based on user preferences, implemented CRUD operations for favorites, and collaborated with designers on technical constraints and UI iterations.",
    },
    {
      name: "Full-Stack Engineer & Webmaster @ UW Medicine",
      description:
        "Architecting two integrated systems for UW Medicine's student-ran organization (supporting 300+ people annually): (1) a public-facing web application with CMS features for blog posts, events showcase, and leadership applications, and (2) an internal volunteer operations platform handling authentication, event signups across 6 weekly sites, automated metrics tracking (service hours, patients served), and biannual report generation. Building end-to-end with Next.js, PostgreSQL, and Supabase while collaborating with medical leadership to replace their legacy WeJoin system.",
    },
    {
      name: "Frontend Developer @ UW Web Impact",
      description:
        "Collaborated with iMuslims (50+ students representing Muslims in Technology) on web presence strategy, translating mission statements and content requirements into technical specifications. Built dynamic board member pages and event listings in Next.js, integrated Sanity CMS for non-technical stakeholders to manage content updates independently, and worked with design teams to implement responsive UI components for organization showcases and third-party service integrations.",
    },
    {
      name: "Marketing Officer @ SWECC",
      description:
        "Produced and edited promotional video content (Instagram Reels, event skits) to make tech more accessible and welcoming to UW students. Grew social media reach to 10K+ views per reel and increased meeting attendance by showcasing community culture and reducing intimidation barriers for newcomers exploring CS.",
    },
    {
      name: "Entrepreneur @ CSEED BuildSpace Cohort",
      description:
        "Prototyped and pitched a marketplace MVP connecting UW students with freelance barbers and artists. Built a React Native mobile app with artist discovery dashboard, real-time chat interface, and user profiles. Implemented Firebase Authentication for user accounts, Firestore for profile data and reviews, and Firebase Storage for media assets. Demoed working product to cohort and potential users.",
    },
    {
      name: "Contributor @ I2 (Interactive Intelligence)",
      description:
        "Contributing to UW's student-led NeuroAI research organization exploring intersections of neuroscience and artificial intelligence. Completed computational assignments in Jupyter notebooks implementing neural network architectures, analyzing biological learning mechanisms, and experimenting with bio-inspired algorithms for cognitive modeling.",
    },
  ],
};

export const connect = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/matt-lau-7b482531b/",
    icon: linkedInIcon,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:mlau@uw.edu",
    icon: emailIcon,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/mattycakes14",
    icon: github,
  },
  {
    id: 4,
    name: "Twitter",
    link: "https://x.com/realmattlau14",
    icon: x,
  },
  {
    id: 5,
    name: "Resume",
    link: "/Matt_Lau_Feb_2026_Res.pdf",
    icon: resumeIcon,
  },
];
