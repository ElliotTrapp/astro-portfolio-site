import { getPermalink, getBlogPermalink } from '../utils/permalinks';

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
  actions: [
  ]
};

export const footerData = {
  links: [
    { title: 'Contact', links: getPermalink('/contact') },
    { title: 'Thanks', links: '/' },
    {
      title: 'Example Pages',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    /*{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },*/
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ElliotTrapp' },
  ],
  //TODO: Make svg change color on theme change
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/atom.svg)]"></span>
    Made by Elliot Trapp · All rights reserved.
  `,
};
