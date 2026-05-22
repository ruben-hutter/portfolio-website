export interface SocialLink {
  labelKey: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    labelKey: 'social.github',
    url: 'https://github.com/ruben-hutter',
    icon: 'github',
  },
  {
    labelKey: 'social.linkedin',
    url: 'https://linkedin.com/in/ruben-hutter-865b85255/',
    icon: 'linkedin',
  },
  {
    labelKey: 'social.email',
    url: 'mailto:ruben@example.com',
    icon: 'mail',
  },
];
