// Import images
import expenseWiseImg from '../assets/Untitled design (2).png';
import nextWatchImg from '../assets/NextWatch - Find Your Next Binge.png';
import ruppeeTrackImg from '../assets/Untitled design (3).png';
import peopleTrackerImg from '../assets/Untitled design (17).png';
import expenseWiseScreen1 from '../assets/Untitled design (14).png';
import expenseWiseScreen2 from '../assets/Untitled design (15).png';
import expenseWiseScreen3 from '../assets/Untitled design (16).png';

export const SKILLS_DATA = {
  frontend: {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "ReactJS", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript ES6+", level: 88 }
    ]
  },
  backend: {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Django REST Framework", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Flask", level: 75 },
      { name: "RESTful API Design", level: 90 }
    ]
  },
  databases: {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 90 }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: 80 },
      { name: "Google Cloud Platform", level: 75 },
      { name: "Docker", level: 70 },
      { name: "CI/CD Pipelines", level: 75 }
    ]
  },
  mobile: {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      { name: "React Native with Expo", level: 80 },
      { name: "Express.js Backend", level: 85 },
      { name: "Google Play Deployment", level: 70 },
      { name: "Cross-platform Dev", level: 75 }
    ]
  },
  tools: {
    title: "Tools & Practices",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Agile/Scrum", level: 80 },
      { name: "Unit Testing", level: 75 },
      { name: "API Documentation", level: 85 }
    ]
  }
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "ExpenseWise Manager",
    description: "Mobile app for managing expenses with smart budgeting, goal setting, real-time analytics, and seamless cloud sync across devices.",
    image: expenseWiseImg,
    skillBadges: ["AWS EC2", "React Native", "Expo", "TypeScript", "Express.js"],
    liveUrl: "beta", // Special value to show beta testing message
    githubUrl: null,
    featured: true,
    hasFlipCard: true, // Special flip card for mobile screenshots
    mobileScreenshots: [expenseWiseScreen1, expenseWiseScreen2, expenseWiseScreen3]
  },
  {
    id: 2,
    title: "NextWatch",
    description: "Entertainment discovery platform using TMDB API with custom backend, JWT auth, personalized watchlists, ratings, and serverless AWS Lambda for scalable performance.",
    image: nextWatchImg,
    skillBadges: ["AWS Lambda", "React", "JavaScript", "Express.js", "API Gateway"],
    liveUrl: "https://nextwatch-entertainment-57kteri1y-vishwa-glitchs-projects.vercel.app",
    githubUrl: "https://github.com/vishwa-glitch/Next-Watch",
    featured: true
  },
  {
    id: 3,
    title: "RuppeeTrack",
    description: "Financial tracker for the Indian market that parses SMS to auto-categorize UPI and bank transactions, analyze spending patterns, and predict budgets.",
    image: ruppeeTrackImg,
    skillBadges: ["React Native", "Express.js", "PostgreSQL", "SMS Parsing", "ML"],
    liveUrl: null,
    githubUrl: null, // Remove code button as requested
    featured: true,
    isOngoing: true
  },
  {
    id: 4,
    title: "People Tracker with Emotion Detection",
    description: "Real-time system for multi-person tracking and emotion detection, analyzing facial expressions and emotional states from live video streams.",
    image: peopleTrackerImg,
    skillBadges: ["Python", "Flask", "Machine Learning", "TensorFlow", "Flask Application"],
    liveUrl: null,
    githubUrl: "#",
    featured: true
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Android Apps Developer (Freelance)",
    company: "Upwork - International Client",
    period: "Nov 2023 - Jul 2024",
    description: "Delivered Android application development services for international client with 5.0/5.0 rating. Collaborated remotely across time zones to complete mobile app features and bug fixes on tight deadlines.",
    achievements: [
      "Client testimonial: \"An excellent freelancer, always in touch and completes tasks quickly\""
    ]
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/vishwa-glitch",
  linkedin: "https://linkedin.com",
  email: "mailto:vishwa12550@gmail.com"
};

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];
