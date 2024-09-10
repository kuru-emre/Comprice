import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainPage() {
  const t = useTranslations('homePage');

  return (
    <>
      <section className="relative isolate overflow-hidden pt-14">
        <Image
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero image"
          fill={true}
          priority={true}
          quality={50}
          className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.45] dark:brightness-[0.35]"
        />
        <div className="bg-gradient-light dark:bg-gradient-dark absolute inset-0 -z-10" aria-hidden="true"></div>
        <div className="mx-auto max-w-5xl px-2 py-32 sm:py-48 lg:py-60">
          <div className="text-center">
            <h1 className="text-main font-lastica text-4xl font-light tracking-widest sm:text-6xl lg:text-5xl">{t('title')}</h1>
            <p className="text-accent mt-6 text-lg leading-8">{t('subTitle')}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/" className="btn-main">
                {t('getStarted')}
              </Link>
              <Link href="/" className="text-main text-main-hover text-sm font-semibold">
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-main py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <p className="text-main mt-2 font-lastica text-3xl font-normal tracking-widest sm:text-4xl">{t('section_1.title')}</p>
            <p className="text-accent mt-6 text-lg leading-8">{t('section_1.subTitle')}</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {t.raw('section_1.features').map((feature: any) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-main font-semibold leading-7">
                    <div className="bg-opposite absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full">
                      <FontAwesomeIcon icon={['fas', feature.icon]} aria-hidden className="text-opposite h-5 w-5" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="text-accent mt-2 leading-7">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-main overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-main mt-2 font-lastica text-3xl font-normal tracking-widest sm:text-4xl">{t('section_2.title')}</p>
                <p className="text-accent mt-6 text-lg leading-8">{t('section_2.subTitle')}</p>
                <dl className="mt-10 max-w-xl space-y-8 leading-7 lg:max-w-none">
                  {t.raw('section_2.features').map((feature: any) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="text-main inline font-semibold">
                        <FontAwesomeIcon icon={['fas', feature.icon]} aria-hidden className="absolute left-1 top-1 h-5 w-5" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="text-accent inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2432}
              height={1442}
              quality={75}
              className="w-[48rem] max-w-none rounded-xl shadow-lg ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
