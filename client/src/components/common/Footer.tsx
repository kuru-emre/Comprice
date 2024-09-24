import { useTranslations } from 'next-intl';
import Logo from './Logo';
import ThemeToggler from './Themer';
import LocaleSwitcher from '../i18n/LocaleSwitcher';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-main" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-accent text-sm leading-6">{t('title')}</p>
          </div>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
            {t.raw('items').map((item: any) => (
              <div key={item.title}>
                <h3 className="text-main text-sm font-semibold leading-6">{item.title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {item.subItems.map((subItem: any) => (
                    <li key={subItem.name}>
                      <a href={subItem.href} className="text-accent text-sm leading-6">
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex gap-3 items-center border-t border-gray-300 pt-4 sm:mt-20 lg:mt-24 dark:border-gray-700">
          <p className="text-accent flex-1 text-xs leading-5">&copy; 2024 Comprice World, Inc. {t('copyright')}</p>
          <LocaleSwitcher />
          <ThemeToggler />
        </div>
      </div>
    </footer>
  );
}
