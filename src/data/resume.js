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
      "Architected end-to-end ad content extraction and enrichment pipeline, boosting ad text coverage by 22% and web text by 33%. Built backend API proxies with LangGraph routing and Supabase state persistence for personalized ad recommendations.",
    externalLink: "https://www.cladlabs.ai/",
    icon: clad,
    media: cladMedia,
  },
  {
    id: 2,
    projectName: "Eat Together",
    projectDescription:
      "Integrated Yelp API with weighted selection algorithm for restaurant recommendations across 200+ meetups and 500+ users. Built interactive quiz and Tinder-style swipe interface in React Native with Firebase.",
    externalLink: "https://www.eat-together.org/about",
    icon: eatTogether,
    media: eatMedia,
  },
  {
    id: 3,
    projectName: "Web Impact – iMuslims",
    projectDescription:
      "Developed 'Meet Our Board' page using Next.js with dynamic member profiles and responsive design. Integrated Sanity CMS for self-service profile updates.",
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
        "Built a smart restaurant recommendation algorithm serving 500+ students. Matches users based on dietary restrictions, cuisine preferences, and group compatibility.",
    },
    {
      name: "Web Dev @ UDSM",
      description:
        "Revamping the web app for a student-run free clinic serving Seattle's homeless population. Collaborating with leadership to amplify their mission for healthcare equity.",
    },
    {
      name: "Developer @ Web Impact",
      description:
        "Developed a dynamic 'Meet Our Board' page for iMuslims, an on-campus organization. Focused on responsive design and accessibility.",
    },
    {
      name: "Builder @ CSEED BuildSpace Cohort",
      description:
        "Prototyped and pitched a marketplace connecting UW students with freelance barbers and artists.",
    },
    {
      name: "Marketing Officer @ SWECC",
      description:
        "Created and filmed promotional content to make tech more welcoming. Grew meeting attendance by highlighting the community and removing intimidation barriers.",
    },
    {
      name: "Contributor @ I2 (Interactive Intelligence)",
      description:
        "UW's student-led NeuroAI research organization focused on bridging neuroscience and artificial intelligence to develop machine learning systems that emulate human intelligence.",
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
    name: "github",
    link: "https://github.com/mattycakes14",
    icon: github,
  },
  {
    id: 4,
    name: "twitter",
    link: "https://x.com/realmattlau14",
    icon: x,
  },
];
