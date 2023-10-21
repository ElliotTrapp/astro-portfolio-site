import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'home',
      href: getPermalink('/'),
    },
    {
      text: 'about',
      href: getPermalink('/about'),
    },
    {
      text: 'writing',
      href: getBlogPermalink(),
    },
    {
      text: 'coaching',
      href: 'https://www.startacodecareer.com'
    },

  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    {
      text: 'about',
      href: getPermalink('/about'),
    },
    {
      text: 'contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'terms',
      href: getPermalink('/terms'),
    },
    {
      text: 'privacy policy',
      href: getPermalink('/privacy'),
    },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'github', href: 'https://github.com/onwidget/astrowind' },
  ],
};
