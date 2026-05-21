export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'cvlt.ch',
    description:
      "Website for Club Volo Libero Ticino — a paragliding club in Ticino, Switzerland. Built with Next.js and TypeScript, featuring a modern design and content management.",
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/ruben-hutter/cvlt_web',
    demo: 'https://cvlt.ch',
  },
  {
    title: 'TraceGuard',
    description:
      'Research on optimizing path exploration in symbolic execution using taint analysis to prioritize user inputs.',
    tags: ['TypeScript', 'Python', 'C'],
    github: 'https://github.com/ruben-hutter/TraceGuard',
  },
  {
    title: 'XC-Cup Ranker',
    description:
      'Automatically generates ranking lists for Swissleague XC-Cup paragliding events by scraping flight data from XContest.',
    tags: ['Python', 'Shell'],
    github: 'https://github.com/ruben-hutter/xc-cup-ranker',
  },
  {
    title: 'TRShell',
    description:
      'A custom Linux shell built as an OS project, featuring tiling window manager-like functionality to manage multiple shells and jobs.',
    tags: ['C', 'Python'],
    github: 'https://github.com/ruben-hutter/TRShell',
  },

];
