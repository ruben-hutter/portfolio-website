export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'Python', 'Java', 'C', 'TeX', 'Bash'],
  },
  {
    category: 'Web & Frameworks',
    skills: ['Next.js', 'Astro', 'Tailwind CSS', 'HTML/CSS', 'Node.js'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Linux', 'Nix', 'VS Code', 'Neovim'],
  },
  {
    category: 'Interests',
    skills: ['Cyber Security', 'Systems Programming', 'Web Development'],
  },
];
