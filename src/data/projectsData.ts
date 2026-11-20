export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  link?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "automation-hub",
    number: "01",
    category: "AI Agency Website",
    title: "Automation Hub",
    col1Image1: "/assets/proj-automation-hub-2.png",
    col1Image2: "/assets/proj-automation-hub-3.png",
    col2Image: "/assets/proj-automation-hub-1.png",
    link: "https://automation-4e8np1o5b-shahriarrusan12-1456s-projects.vercel.app",
  },
  {
    id: "wealth-whisper",
    number: "02",
    category: "Fintech Platform",
    title: "Wealth Whisper Tracker",
    col1Image1: "/assets/proj-wealth-2.png",
    col1Image2: "/assets/proj-wealth-3.png",
    col2Image: "/assets/proj-wealth-1.png",
    link: "#",
  },
  {
    id: "enterprise-automations",
    number: "03",
    category: "Automations",
    title: "Workflow Automations",
    col1Image1: "/assets/proj-auto-2.png",
    col1Image2: "/assets/proj-auto-3.png",
    col2Image: "/assets/proj-auto-1.png",
    link: "#",
  },
];

