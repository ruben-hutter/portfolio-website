export interface SkillGroup {
  slug: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    slug: 'languages',
    skills: ['Java', 'Python', 'C', 'C++', 'Rust', 'Bash', 'TypeScript', 'SQL', 'Lua'],
  },
  {
    slug: 'web-frameworks',
    skills: ['HTML/CSS', 'Node.js', 'Next.js', 'Astro', 'React', 'Tailwind CSS', 'Payload CMS'],
  },
  {
    slug: 'tools-platforms',
    skills: ['Linux', 'Neovim', 'Tmux', 'Git', 'Docker', 'Nix'],
  },
  {
    slug: 'interests',
    skills: ['Symbolic Execution', 'Fuzzing', 'Binary Analysis', 'Reverse Engineering', 'Homelab & Infrastructure'],
  },
];
