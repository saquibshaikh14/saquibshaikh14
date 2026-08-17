export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "VS Code File Signatures",
    description:
      "A VS Code extension that adds customizable file header signatures. Supports multiple file types, team configs, and marketplace distribution.",
    tech: ["TypeScript", "VS Code API", "Node.js"],
    github: "https://github.com/saquibshaikh14/vscode-add-signature-extension",
    live: "https://marketplace.visualstudio.com/items?itemName=saquibshaikh.vscode-add-signature",
  },
  {
    title: "Offline Notes",
    description:
      "A browser-based private notes app, no server, no tracking, no sync. Everything lives in your local storage. Fully offline.",
    tech: ["React", "LocalStorage", "TypeScript"],
    live: "https://notes.msaquib.com",
  },
  {
    title: "Node.js 2FA System",
    description:
      "Complete OTP-based two-factor authentication implementation using Speakeasy and Google Authenticator. Demonstrates secure TOTP flows.",
    tech: ["Node.js", "Speakeasy", "Express", "TOTP"],
    github: "https://github.com/saquibshaikh14/nodejs-2fa-implementation",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["TypeScript", "React", "Redux", "Zustand", "React Native"],
  "Backend & APIs": ["Node.js", "Express", "gRPC", "FastAPI", "REST APIs"],
  "Cloud & Infra": ["Google Cloud", "AWS", "Docker", "Serverless"],
  "AI & Automation": ["AI Integration", "Webhook", "Conversational AI"],
  "Databases & Testing": [
    "MongoDB",
    "Firestore",
    "SQL",
    "Redis",
    "Vitest",
    "Jest",
    "TDD",
  ],
  "Tools & Workflow": [
    "Cursor",
    "GitHub Copilot",
    "Vite",
    "Git / GitHub",
    "Postman",
  ],
};

export const aboutItems = [
  {
    icon: "◈",
    label: "Distributed Systems",
    sub: "Microservices · Serverless · Event-driven",
  },
  {
    icon: "◉",
    label: "Full Stack Engineering",
    sub: "React · TypeScript · Node.js · Express",
  },
  {
    icon: "◎",
    label: "AI & Agent Workflows",
    sub: "AI agents · Webhooks · Automation",
  },
  {
    icon: "◆",
    label: "API & Cloud Architecture",
    sub: "Google Cloud · AWS · Docker · APIs",
  },
];

export const contactLinks = [
  {
    platform: "LinkedIn",
    handle: "saquibshaikh14",
    url: "https://linkedin.com/in/saquibshaikh14",
    icon: "in",
  },
  {
    platform: "GitHub",
    handle: "saquibshaikh14",
    url: "https://github.com/saquibshaikh14",
    icon: "gh",
  },
  {
    platform: "Portfolio",
    handle: "msaquib.com",
    url: "https://msaquib.com",
    icon: "↗",
  },
];
