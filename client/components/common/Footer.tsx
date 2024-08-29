import Logo from './Logo';
import ThemeToggler from './Themer';

const navigation = {
  resources: [
    { name: 'Customer Support', href: '#' },
    { name: 'Trade Documentation', href: '#' },
    { name: 'Trading Guides', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
  marketplace: [
    { name: 'Product Listings', href: '#' },
    { name: 'Supplier Directory', href: '#' },
    { name: 'Request Quotations', href: '#' },
    { name: 'Trade Assurance', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'News & Updates', href: '#' },
    { name: 'Career Opportunities', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Partnerships', href: '#' },
  ],
  legal: [
    { name: 'Trading Policies', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-main" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-accent text-sm leading-6">
              Empowering Businesses to Connect, Trade, and Thrive with HS Code Integration in a Unified Marketplace.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-main text-sm font-semibold leading-6">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-accent text-sm leading-6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-main text-sm font-semibold leading-6">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.marketplace.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-accent text-sm leading-6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-main text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-accent text-sm leading-6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-main text-sm font-semibold leading-6">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-accent text-sm leading-6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center border-t border-gray-300 pt-4 sm:mt-20 lg:mt-24 dark:border-gray-700">
          <p className="text-accent flex-1 text-xs leading-5">&copy; 2024 Comprice World, Inc. All rights reserved.</p>
          <ThemeToggler />
        </div>
      </div>
    </footer>
  );
}
