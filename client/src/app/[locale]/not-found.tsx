import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('notFoundPage');

  return (
    <main className="bg-main grid min-h-full place-items-center px-6 py-32 sm:py-32 lg:px-8 lg:pt-52">
      <div className="text-center">
        <p className="text-accent text-base font-semibold">404</p>
        <h1 className="text-main mt-4 font-lastica text-3xl font-light tracking-widest sm:text-5xl">{t('title')}</h1>
        <p className="text-accent mt-6 text-lg leading-7">{t('subTitle')}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="btn-main">
            {t('homeLink')}
          </Link>
        </div>
      </div>
    </main>
  );
}
