export interface SkillGroup {
  slug: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    slug: 'languages',
    skills: ['TypeScript', 'Python', 'Java', 'C', 'TeX', 'Bash'],
  },
  {
    slug: 'web-frameworks',
    skills: ['Next.js', 'Astro', 'Tailwind CSS', 'HTML/CSS', 'Node.js'],
  },
  {
    slug: 'tools-platforms',
    skills: ['Git', 'Docker', 'Linux', 'Nix', 'VS Code', 'Neovim'],
  },
  {
    slug: 'interests',
    skills: ['Cyber Security', 'Systems Programming', 'Web Development'],
  },
];
