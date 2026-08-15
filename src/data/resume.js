// Connect icons
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/resume.png";
import linkedInIcon from "../assets/linked.png";
import github from "../assets/github.png";
import x from "../assets/x.png";
import newclad from "../assets/newclad.jpg";
import workday_logo from "../assets/workday_logo.jpg";
import amazonLogo from "../assets/amazon.webp";
export const experiences = [
  {
    id: 0,
    projectName: "Amazon",
    role: "Software Engineer Intern – Aurora RDS",
    location: "Palo Alto, CA",
    startDate: "Sep 2026",
    endDate: "Dec 2026",
    projectDescription:
      "Incoming intern on the Distributed Databases team, working on Amazon Aurora.",
    icon: amazonLogo,
    iconClassName: "amazonIcon",
  },
  {
    id: 1,
    projectName: "Workday",
    role: "Software Engineer Intern – Platform/DevOps",
    location: "Pleasanton, CA",
    startDate: "Jun 2026",
    endDate: "Sep 2026",
    projectDescription:
      "Software Engineer Intern on Workday's Evisort org, focused on infrastructure reliability and cost optimization. Cleaned up monitoring and logging infrastructure, moved compute workloads to a lower-cost architecture, and standardized how services across the org manage cloud configuration. Also represented the team as a Top 5 finalist in Workday's company-wide intern hackathon.",
    icon: workday_logo,
  },
  {
    id: 2,
    projectName: "Clad Labs (YC F25)",
    role: "Software Engineer Intern – AI Tools",
    location: "San Francisco, CA",
    startDate: "Jun 2025",
    endDate: "Sep 2025",
    projectDescription:
      "Software Engineer Intern at this YC-backed startup, building AI-powered tooling that helps developers discover relevant tools right inside their coding workflow — spanning content extraction, semantic search, and the recommendation experience itself.",
    icon: newclad,
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
      "C",
      "C++",
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
      "Tailwind",
      "LangChain",
      "NumPy",
      "TensorFlow",
      "PyTorch",
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
      "Gunicorn",
      "SQLAlchemy",
      "Alembic",
      "AWS (EC2, Auto Scaling Groups, EKS, Lambdas, CloudWatch)",
      "Kubernetes",
      "Terraform",
      "Git",
      "GitHub Actions",
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
    "Machine Learning",
    "Systems Programming",
  ],
  activities: [
    {
      name: "Software Developer @ UW Medicine",
      description:
        "Shipped a toast notification system to give success/failure feedback for user actions (event creation, student signup, etc.), reducing user confusion by providing visible, descriptive success and error states. Rewrote Firestore security rules and developed backend endpoints for role assignment, enforcing role-specific database permissions for admins, leads, and volunteers across 100+ service programs.",
    },
    {
      name: "University District Street Medicine",
      description:
        "Building a web platform for University District Street Medicine (UW Medicine funded organization), including About, Executive Board, and Membership pages to support volunteer recruitment and public engagement.",
    },
    {
      name: "Northwest Health Career Path",
      description:
        "Contributing ongoing maintenance and feature development to the Northwest Health Career website, implementing program filters, UI refinements, and content updates to support healthcare career exploration for underrepresented students.",
    },
    {
      name: "Lead Developer @ Eat Together",
      description:
        "Led development of a React Native mobile app serving 500+ UW students. Conducted user research to identify key decision factors (dietary restrictions, cuisine preferences, group dynamics) and built a Tinder-style swipe interface for restaurant discovery. Integrated Yelp API with dynamic query construction based on user preferences, implemented CRUD operations for favorites, and collaborated with designers on technical constraints and UI iterations.",
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
    link: "/Matt_Lau_Recruitment_V2.pdf",
    icon: resumeIcon,
  },
];
