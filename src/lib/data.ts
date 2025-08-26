// Define a Project type with an optional image field
export type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
  image?: string;
};

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Git & GitHub",
  "Vercel",
  "Testing (Jest/RTL)",
];

export const projects: Project[] = [
  {
    title: "Realtime Chat App",
    description:
      "A realtime chat using WebSockets with auth, message persistence, and responsive UI.",
    tech: ["Next.js", "Socket.IO", "Prisma", "PostgreSQL"],
    demo: "https://example.com",
    repo: "https://github.com/your-username/realtime-chat",
    image: "/images/projects/realtime-chat.jpg",
  },
  {
    title: "Expense Tracker",
    description:
      "Track expenses by category with charts, CSV import, and offline support via PWA.",
    tech: ["Next.js", "IndexedDB", "Chart.js"],
    demo: "https://example.com",
    repo: "https://github.com/your-username/expense-tracker",
    image: "/images/projects/expense-tracker.jpg",
  },
  {
    title: "Image Optimizer",
    description:
      "Drag-n-drop image compression and resizing tool running 100% in the browser.",
    tech: ["React", "WASM", "Tailwind"],
    demo: "https://example.com",
    repo: "https://github.com/your-username/image-optimizer",
    image: "/images/projects/image-optimizer.jpg",
  },
  {
    title: "Algo Visualizer",
    description:
      "Interactive visualizations for classic algorithms: pathfinding, sorting, and graphs.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    demo: "https://example.com",
    repo: "https://github.com/your-username/algo-visualizer",
    image: "/images/projects/algo-visualizer.jpg",
  },
];


