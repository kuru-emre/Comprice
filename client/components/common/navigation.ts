export const NAVIGATION = [
  {
    name: 'Company Catalog',
    href: '/catalog',
  },
  {
    name: 'Create Demand',
    href: '/demands',
    sub: [
      {
        name: 'Exports',
        href: '/demands/exports',
        desc: 'Find and connect with buyers for your export products.',
      },
      {
        name: 'Imports',
        href: '/demands/imports',
        desc: 'Discover opportunities to import products that meet your needs.',
      },
    ],
  },
  {
    name: 'Trade News',
    href: '/news',
  },
  {
    name: 'Trading Guide',
    href: '/guide',
    sub: [
      {
        name: 'Incoterms',
        href: '/incoterms',
        desc: 'Understand international trade terms and their implications.',
      },
      {
        name: 'Insurance in Trade',
        href: '/insurance',
        desc: 'Learn about insurance options to protect your trade transactions.',
      },
      {
        name: 'Payment Methods',
        href: '/payments',
        desc: 'Explore secure payment methods for international trade.',
      },
    ],
  },
  {
    name: 'About Us',
    href: '/about',
    sub: [
      {
        name: 'Who We Are',
        href: '/whoweare',
        desc: 'Get to know the mission, vision, and team behind our company.',
      },
      {
        name: 'Contact Us',
        href: '/contact',
        desc: 'Reach out to us for any inquiries or support.',
      },
      {
        name: 'Q&A',
        href: '/q&a',
        desc: 'Find answers to frequently asked questions about our services.',
      },
    ],
  },
];
