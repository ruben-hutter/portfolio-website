export interface Project {
  slug: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: 'cvlt',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/ruben-hutter/cvlt_web',
    demo: 'https://cvlt.ch',
  },
  {
    slug: 'traceguard',
    tags: ['TypeScript', 'Python', 'C'],
    github: 'https://github.com/ruben-hutter/TraceGuard',
  },
  {
    slug: 'xc-cup-ranker',
    tags: ['Python', 'Shell'],
    github: 'https://github.com/ruben-hutter/xc-cup-ranker',
  },
  {
    slug: 'trshell',
    tags: ['C', 'Python'],
    github: 'https://github.com/ruben-hutter/TRShell',
  },
];
