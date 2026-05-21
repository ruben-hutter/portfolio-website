export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/ruben-hutter',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/ruben-hutter-865b85255/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:ruben@example.com',
    icon: 'mail',
  },
];
