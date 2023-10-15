import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'home',
      href: getPermalink('/'),
    },
    {
      text: 'work',
      href: getPermalink('/work'),
    },
    {
      text: 'writing',
      href: getBlogPermalink(),
    },
    {
      text: 'coaching',
      href: getPermalink('/coaching'),
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
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
