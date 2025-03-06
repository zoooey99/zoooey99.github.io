import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
  Code,
  Activity,
  Brain,
  Leaf,
  Globe,
  Compass,
} from "lucide-react";

//List of hackathons
/*
    Pitch Perfect
    Verde
    EcoHoya Cup
    Intellistock
    Pixel Battle

*/

export const projects = [
  {
    id: "pixel-battle",
    name: "Pixel Battle",
    hackathon: "Hack NYU",
    date: "Feb 2025",
    description:
      "Pixel Battle is a real-time, blockchain-powered pixel art battleground where users donate to place pixels on a shared canvas, compete for control, earn exclusive NFT rewards, and vote on which charities receive funding—gamifying philanthropy and making fundraising interactive, transparent, and engaging.",
    techStack: [
      "nextjs",
      "flask",
      "supabase",
      "solana",
      "rust",
      "anchor",
      "flask",
    ],
    role: "Fullstack",
    demoLink: "https://sensational-biscuit-8d27df.netlify.app/",
    githubLink: "https://github.com/PatFDev/PixelBattle",
    submissionLink: "https://devpost.com/software/pixel-battle",
    teamMembers: [
      {
        name: "Patrick Farrell",
        linkedin: "https://www.linkedin.com/in/patrick-farrell-a493751b1/",
      },
    ],
    color: "purple",
    icon: Brain,
    bgPattern:
      "radial-gradient(circle at 90% 10%, rgba(147, 51, 234, 0.05) 0%, transparent 70%)",
    category: "Health Tech",
  },
  {
    id: "intellistock",
    name: "Intellistock",
    hackathon: "HackRU",
    date: "Feb 2025",
    description:
      "IntelliStock.ai is an AI-powered inventory management platform that helps grocery stores optimize stock levels, reduce waste, and maximize sales by providing real-time insights and strategic price recommendations for products nearing expiration.",
    techStack: ["nextjs", "supabase", "n8n", "python", "flask"],
    role: "Frontend",
    demoLink: "https://dorahacks.io/buidl/22307/",
    githubLink: "https://github.com/PatFDev/WakeFernBackend",
    submissionLink: "https://dorahacks.io/buidl/22307/",
    teamMembers: [
      {
        name: "Patrick Farrell",
        linkedin: "https://www.linkedin.com/in/patrick-farrell-a493751b1/",
      },
    ],
    color: "blue",
    icon: Activity,
    bgPattern:
      "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
    category: "Sustainability",
  },
  {
    id: "ecohoya-cup",
    name: "EcoHoya Cup",
    hackathon: "Georgetown Hackathon",
    date: "Jan 2025",
    description:
      "EcoHoya Cup is a gamified sustainability competition that engages Georgetown University students in reducing electricity, water, and gas usage across residence halls by providing real-time tracking, fair rankings, automated updates, and AI-powered support to encourage eco-friendly habits.",
    techStack: ["vite", "react", "supabase", "n8n", "openai"],
    role: "Fullstack",
    demoLink: "https://ecohoyacup.netlify.app/",
    githubLink: "https://github.com/zoooey99/eco-hoya",
    submissionLink: "https://devpost.com/software/ecohoya-cup",
    teamMembers: [
      {
        name: "Holly Akati",
        linkedin: "https://www.linkedin.com/in/hollyakati/",
      },
      {
        name: "Julia Knott",
        linkedin: "https://www.linkedin.com/in/julia-knott/",
      },
    ],
    color: "cyan",
    icon: Code,
    bgPattern:
      "radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
    category: "Sustainability",
  },
  {
    id: "verdellm",
    name: "Verde LLM",
    hackathon: "UTD Ripple Hacks",
    date: "Nov 2024",
    description:
      "Verde is a cutting-edge inference engine that optimizes large language models (LLMs) using techniques like quantization, pruning, and parallel vector search to reduce energy consumption by up to 60% per query while maintaining high performance and scalability.",
    techStack: ["nextjs", "piñata", "python"],
    role: "Frontend",
    demoLink:
      "https://www.loom.com/share/4cf8ef2924a2454f9df9f5d70d58f439?sid=96ce3075-f181-4bcd-87a0-b1d38efeee3a",
    githubLink: "https://github.com/jhinericusername/verdellm",
    submissionLink: "https://devpost.com/software/verde",
    teamMembers: [
      {
        name: "Miranda Bialek",
        linkedin: "https://www.linkedin.com/in/miranda-bialek-5a1a2025b/",
      },
      {
        name: "Rachel Tomasetti",
        linkedin: "https://www.linkedin.com/in/racheltomasetti/",
      },
      {
        name: "Prateek Mishra",
        linkedin: "https://www.linkedin.com/in/pikum/",
      },
    ],
    color: "amber",
    icon: Compass,
    bgPattern:
      "radial-gradient(circle at 30% 50%, rgba(251, 191, 36, 0.05) 0%, transparent 70%)",
    category: "AI",
  },
  {
    id: "pitchperfect",
    name: "PitchPerfect",
    hackathon: "YHacks",
    date: "Oct 2024",
    description:
      "An innovative and interactive tool designed to help students and professionals improve their presentation and public speaking skills in a fun and engaging way.",
    techStack: ["nextjs", "react", "vercel"],
    role: "Frontend",
    demoLink: "https://pitchperfect-7afd.vercel.app/",
    githubLink: "https://github.com/racheltomasetti/pitchperfect",
    submissionLink: "https://devpost.com/software/pitchperfect-cqnu25",
    teamMembers: [
      {
        name: "Jazib Raza",
        linkedin: "https://www.linkedin.com/in/jazibwaqarr/",
      },
      { name: "Lorenzo", linkedin: "" },
      {
        name: "Rachel Tomasetti",
        linkedin: "https://www.linkedin.com/in/racheltomasetti/",
      },
    ],
    color: "green",
    icon: Globe,
    bgPattern:
      "radial-gradient(circle at 70% 30%, rgba(34, 197, 94, 0.05) 0%, transparent 70%)",
    category: "Education ",
  },
];
